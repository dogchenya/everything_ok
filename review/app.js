const $=s=>document.querySelector(s);
let tools=[],reviews={},filter='all',search='',mediaFilter='all';
const drafts=new Map(),timers=new Map(),queues=new Map();
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels={pending:'待审核',approved:'通过',changes:'需修改',rejected:'不收录'};
function media(t){
 let u=t.demo.url;if(!u)return null;
 if(u.startsWith('media/'))return {type:/\.(mp4|webm)$/i.test(u)?'video':'image',url:'/'+u,local:true};
 if(/^https:\/\/github\.com\/[^/]+\/[^/]+\/blob\//.test(u))u=u.replace('https://github.com/','https://raw.githubusercontent.com/').replace('/blob/','/');
 if(/\.gif(?:\?|$)/i.test(u))return {type:'image',url:u};
 if(/\.(mp4|webm)(?:\?|$)/i.test(u))return {type:'video',url:u};
 const videoId=u.match(/youtube\.com\/watch\?v=([\w-]+)/)?.[1];
 if(videoId)return {type:'youtube',url:`https://www.youtube-nocookie.com/embed/${videoId}`};
 return null;
}
function status(id){return (drafts.get(id)||reviews[id]||{}).status||'pending';}
function stats(){
 const counts={pending:0,approved:0,changes:0,rejected:0};for(const t of tools)counts[status(t.id)]++;
 $('#progress-text').textContent=`${tools.length-counts.pending} / ${tools.length}`;
 $('#progress-bar').style.width=`${(tools.length-counts.pending)/Math.max(1,tools.length)*100}%`;
 for(const s of ['approved','changes','rejected'])$(`#${s}-count`).textContent=counts[s];
 $('#total-count').textContent=tools.length;
}
function mediaHtml(t){
 const m=media(t),name=escapeHtml(t.name);
 if(!m)return `<div class="empty-media"><span class="empty-icon">▧</span><strong>演示待补齐</strong>当前${t.demo.status.startsWith('skipped')?'采集未完成，已跳过':'尚无可直接嵌入的素材'}。${t.demo.url?`<br><a href="${escapeHtml(t.demo.url)}" target="_blank" rel="noopener noreferrer">查看已有来源 ↗</a>`:''}</div>`;
 if(m.type==='youtube')return `<iframe src="${m.url}" title="${name} 使用演示" loading="lazy" allow="fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
 const el=m.type==='video'?`<video src="${escapeHtml(m.url)}" ${m.local?`poster="${escapeHtml(m.url.replace(/\.mp4$/,'.jpg'))}"`:''} controls preload="metadata" playsinline aria-label="${name} 使用演示"></video>`:`<img src="${escapeHtml(m.url)}" alt="${name} 使用演示" loading="lazy">`;
 return el+`<button class="expand" data-expand="${t.id}">放大查看 ↗</button>`;
}
function card(t){
 const m=media(t),r=drafts.get(t.id)||reviews[t.id]||{status:'pending',note:''};
 const badge=m?.local?(m.type==='video'?(t.demo.status==='recorded_partial_video'?'自行录制 · 部分流程':'自行录制 · 实际操作'):'上一轮步骤 GIF'):m?.type==='image'?'上游 GIF':m?.type==='video'?'上游视频':m?.type==='youtube'?'视频教程':'核心流程待录';
 const q=t.quality, quality=q?`<div class="quality"><span>${escapeHtml(t.setupLevel||'')}</span><strong>★ ${Number(q.stars).toLocaleString('en-US')}</strong><span>${t.selection?.cohort==='high-star-v2'?'本轮高星候选':t.selection?.cohort==='own-project'?'自有项目 · 单独收录':'上轮保留'}</span><span>核对 ${q.checkedAt.slice(0,10)}</span></div><p class="selection-reason">${escapeHtml(t.selection?.reason||'')}<br><small>最近提交 ${q.lastPush.slice(0,10)} · ${escapeHtml(q.license)} · ${t.verification==='core_workflow_recorded'?'已实测并录制核心流程':t.verification==='drawing_recorded_export_unverified'?'已录绘图 · 文件导出未验证':'尚未完成本轮核心流程实测'}</small></p>`:'';
 return `<article class="card" data-id="${t.id}" data-status="${r.status}"><div class="card-head"><div class="name-row"><span class="initial">${escapeHtml(t.name[0])}</span><div><h2>${escapeHtml(t.name)}</h2><a class="repo-link" href="${t.repository}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.repository.replace('https://github.com/',''))} ↗</a></div></div><span class="badge ${m?.local?'local':!m?'pending':''}">${badge}</span></div><div class="media-stage">${mediaHtml(t)}</div><div class="card-body">${t.demo.speed?`<p class="speed-note"><b>${t.demo.speed}× 加速演示</b> · 操作步骤保留，结尾停留 2 秒 <a href="/${escapeHtml(t.demo.originalUrl)}" target="_blank" rel="noopener noreferrer">查看原速视频 ↗</a></p>`:''}${quality}<p class="summary">${escapeHtml(t.summary.zh)}</p><p class="english">${escapeHtml(t.summary.en)}</p><div class="requirements"><b>使用门槛</b><span>${escapeHtml(t.requirements.zh)}</span></div><p class="media-note">${escapeHtml(t.demo.note)}</p><div class="review-area"><div class="review-heading"><span>你的审核结论</span><span class="save-state">${r.updatedAt?'已保存':'选择后自动保存'}</span></div><div class="review-buttons">${['approved','changes','rejected','pending'].map(s=>`<button data-status="${s}" class="${r.status===s?'chosen':''}" aria-pressed="${r.status===s}">${s==='approved'?'✓ ':s==='changes'?'↻ ':s==='rejected'?'× ':''}${labels[s]}</button>`).join('')}</div><textarea aria-label="${escapeHtml(t.name)} 审核备注" maxlength="8000" placeholder="写下修改意见，例如：补充费用说明、演示太短…">${escapeHtml(r.note)}</textarea></div></div></article>`;
}
function render(){
 const visible=tools.filter(t=>(filter==='all'||status(t.id)===filter)&&(!search||`${t.name} ${t.summary.zh} ${t.summary.en}`.toLowerCase().includes(search))&&(mediaFilter==='all'||mediaFilter==='video'&&media(t)?.local&&media(t)?.type==='video'||mediaFilter==='local'&&media(t)?.local||mediaFilter==='ready'&&media(t)||mediaFilter==='missing'&&!media(t)));
 $('#cards').innerHTML=visible.map(card).join('')||'<div class="empty-list">没有符合筛选条件的工具。</div>';
 $('#list-count').textContent=`显示 ${visible.length} 个工具 · 共 ${tools.length} 个`;
 for(const img of $('#cards').querySelectorAll('.media-stage img'))img.addEventListener('error',()=>{
  const stage=img.parentElement;stage.replaceChildren();const box=document.createElement('div');box.className='empty-media';box.innerHTML='<span class="empty-icon">▧</span><strong>素材暂时无法加载</strong>可以打开原始来源查看，审核结论仍可保存。<br>';
  const a=document.createElement('a');a.href=img.src;a.textContent='打开原始素材 ↗';a.target='_blank';a.rel='noopener noreferrer';box.append(a);stage.append(box);
 });stats();
}
function updateCard(id){const el=document.querySelector(`[data-id="${id}"]`);if(!el)return;el.dataset.status=status(id);for(const b of el.querySelectorAll('[data-status]')){b.classList.toggle('chosen',b.dataset.status===status(id));b.setAttribute('aria-pressed',b.dataset.status===status(id));}stats();}
function stateMessage(id,message,error=false){const el=document.querySelector(`[data-id="${id}"] .save-state`);if(el){el.textContent=message;el.classList.toggle('error',error);}}
async function save(id){
 clearTimeout(timers.get(id));timers.delete(id);
 const value={...drafts.get(id)};if(!value.status)return;
 const job=(queues.get(id)||Promise.resolve()).catch(()=>{}).then(async()=>{
  stateMessage(id,'保存中…');
  const res=await fetch(`/api/reviews/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(value)});
  if(!res.ok)throw new Error('保存失败');
  const result=await res.json();reviews[id]=result;
  if(JSON.stringify(drafts.get(id))===JSON.stringify(value)){drafts.delete(id);stateMessage(id,'✓ 已保存');}
 });queues.set(id,job);try{await job;}catch{stateMessage(id,'保存失败，请再次选择重试',true);toast('保存失败，修改暂留在页面中，请勿关闭。');}
}
function change(id,patch,delayed=false){const base=drafts.get(id)||reviews[id]||{status:'pending',note:''};drafts.set(id,{status:base.status,note:base.note,...patch});updateCard(id);stateMessage(id,'待保存…');clearTimeout(timers.get(id));if(delayed)timers.set(id,setTimeout(()=>save(id),500));else save(id);}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');setTimeout(()=>$('#toast').classList.remove('visible'),3500);}
$('#cards').addEventListener('click',e=>{
 const b=e.target.closest('button'),el=e.target.closest('.card');if(!b||!el)return;
 if(b.dataset.status)change(el.dataset.id,{status:b.dataset.status});
 if(b.dataset.expand){const t=tools.find(t=>t.id===b.dataset.expand),m=media(t);$('#preview-title').textContent=t.name;$('#preview-content').innerHTML=m.type==='video'?`<video src="${escapeHtml(m.url)}" controls autoplay playsinline></video>`:`<img src="${escapeHtml(m.url)}" alt="${escapeHtml(t.name)} 演示">`;$('#preview').showModal();}
});
$('#cards').addEventListener('input',e=>{if(e.target.matches('textarea'))change(e.target.closest('.card').dataset.id,{note:e.target.value},true);});
$('#cards').addEventListener('focusout',e=>{if(e.target.matches('textarea')){const id=e.target.closest('.card').dataset.id;if(timers.has(id))save(id);}});
$('.tabs').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;for(const item of $('.tabs').children)item.classList.toggle('active',item===b);render();});
$('#search').addEventListener('input',e=>{search=e.target.value.trim().toLowerCase();render();});
$('#media-filter').addEventListener('change',e=>{mediaFilter=e.target.value;render();});
$('#close-preview').addEventListener('click',()=>$('#preview').close());
$('#preview').addEventListener('close',()=>$('#preview-content').replaceChildren());
$('#export').addEventListener('click',async()=>{
 for(const id of [...timers.keys()])save(id);await Promise.allSettled([...queues.values()]);
 const data={exportedAt:new Date().toISOString(),tools:tools.map(t=>({id:t.id,name:t.name,repository:t.repository,...(drafts.get(t.id)||reviews[t.id]||{status:'pending',note:''})}))};
 const a=document.createElement('a');const u=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.href=u;a.download='tool-reviews.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);toast('审核结果已导出');
});
window.addEventListener('beforeunload',e=>{if(drafts.size){e.preventDefault();e.returnValue='';}});
(async()=>{try{const [a,b]=await Promise.all([fetch('/api/tools'),fetch('/api/reviews')]);if(!a.ok||!b.ok)throw Error();tools=await a.json();reviews=await b.json();tools.sort((a,b)=>Number(b.demo.status==='recorded_video')-Number(a.demo.status==='recorded_video')||Number(Boolean(media(b)?.local&&media(b)?.type==='video'))-Number(Boolean(media(a)?.local&&media(a)?.type==='video'))||Number(b.audience==='general')-Number(a.audience==='general')||(b.quality?.stars||0)-(a.quality?.stars||0));render();}catch{$('#load-error').hidden=false;$('#load-error').textContent='无法读取本地清单，请确认审核服务正在运行，然后刷新。';}})();
