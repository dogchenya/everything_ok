import fs from 'node:fs/promises';
const tools=JSON.parse(await fs.readFile('catalog/tools.json','utf8'));
const categories=JSON.parse(await fs.readFile('catalog/categories.json','utf8'));
const byId=new Map(tools.map(t=>[t.id,t]));
const videoBase='https://dogchenya.github.io/everything_ok/';
const raw=u=>u.replace(/^https:\/\/github.com\//,'https://raw.githubusercontent.com/').replace('/blob/','/');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=(href,label)=>`<a href="${esc(href)}">${esc(label)}</a>`;
const scopes={
 localsend:['接受文件 → 接收完成。发送端是本机协议测试客户端，未展示两台实体设备互传。','Accept a file → receive it successfully. Sent by a protocol test client on the same computer; two physical devices are not demonstrated.'],
 gatherpack:['从两个目录收集文件 → 检查目录 → ZIP 打包；写入 2 个文件，失败 0。','Collect files from two folders → inspect the collection → create a ZIP; two files written, no failures.'],
 syncthing:['本机两个隔离实例：写入文件 → 同步 → 接收端核对内容。','Two isolated local instances: write a file → synchronize → verify the received content.'],
 'stirling-pdf':['导入两份 PDF → 合并 → 翻页检查 → 下载，结果页数与顺序已核对。','Import two PDFs → merge → inspect pages → download; page count and order verified.'],
 excalidraw:['绘制双语流程图 → 导出预览。文件导出尚未验证，本项为部分流程。','Draw a bilingual diagram → open export preview. File saving remains unverified; this is a partial workflow.'],
 losslesscut:['导入视频 → 选取区间 → 无损导出。关键帧裁剪会造成时间边界偏差。','Import a video → select a segment → export without video re-encoding. Keyframe cuts can shift segment boundaries.'],
 'obs-studio':['添加媒体源 → 适配画布 → 开始与停止录制 → 保存视频。','Add a media source → fit to canvas → start and stop recording → save the video.'],
 'open-webui':['连接本地模型 → 问答与重试 → 刷新后保留历史。保留了小模型未理解上下文追问的失误。','Connect a local model → chat and retry → reload saved history. Includes a real failed implicit follow-up from the small model.'],
 ollama:['本地模型翻译与执行指标。画面是录制用 API 测试客户端，非官方桌面界面。','Local translation and execution metrics, shown in a labelled API test client rather than the official desktop UI.'],
 n8n:['导入三节点模板 → 修改输入 → 执行成功 → 检查输出；不需要外部账号或 API。','Import a three-node template → edit input → execute → inspect output; no external accounts or APIs required.'],
 immich:['官方公开演示：照片时间线 → 相册。步骤 GIF；实例禁用上传，未演示上传。','Official public demo: timeline → albums. Step GIF; uploads are disabled and not demonstrated.'],
 hoppscotch:['发送 GET 请求 → 查看 200 OK 响应。此处为步骤 GIF。','Send a GET request → inspect a 200 OK response. Shown as a step GIF.']
};
const allIds=categories.flatMap(c=>c.tools);
if(allIds.length!==tools.length||new Set(allIds).size!==tools.length||allIds.some(id=>!byId.has(id)))throw Error('Every tool must belong to exactly one category');
for(const lang of ['zh','en']){
 const zh=lang==='zh';
 let s=`# everything_ok\n\n${zh?'[English](README.en.md)':'[简体中文](README.md)'} · [${zh?'演示网页':'Video gallery'}](https://dogchenya.github.io/everything_ok/)\n\n${zh?'实用 GitHub 工具合集，按用途分类，附简介、使用门槛和 GIF 演示。':'Useful GitHub tools, grouped by purpose, with descriptions, setup requirements and GIF demos.'}\n\n`;
 s+=categories.map(c=>`[${c[lang]}](#${c.id})`).join(' · ')+'\n\n';
 for(const c of categories){
  s+=`<a id="${c.id}"></a>\n\n## ${c[lang]}\n\n`;
  s+=`<table>\n<thead><tr><th>${zh?'工具':'Tool'}</th><th>${zh?'用途与上手门槛':'Purpose and setup'}</th><th>${zh?'GIF 演示':'GIF demo'}</th></tr></thead>\n<tbody>\n`;
  for(const id of c.tools){
   const t=byId.get(id),d=t.demo,local=d.url.startsWith('media/'),video=/\.(mp4|webm)$/i.test(d.url);
   let demo='';
   if(local&&video){
    const gif=d.url.replace(/\.mp4$/,'.gif');await fs.access(gif);
    demo=`<a href="${esc(videoBase+d.url)}"><img src="${esc(gif)}" width="420" alt="${esc(t.name)} ${zh?'实际操作演示':'recorded workflow'}"></a><br>${link(videoBase+d.url,zh?'MP4 视频':'MP4 video')} · ${d.speed}× · ${d.durationSeconds.toFixed(1)} s · ${link(videoBase+d.originalUrl,zh?'原速':'Normal speed')}`;
   }else if(!video){
    demo=`<img src="${esc(local?d.url:raw(d.url))}" width="420" alt="${esc(t.name)} ${zh?'演示':'demo'}"><br>${local?(zh?'步骤 GIF':'Step GIF'):link(d.url,zh?'上游 GIF':'Upstream GIF')}`;
   }else{
    demo=link(raw(d.url),zh?'▶ 上游演示视频':'▶ Upstream demo video');
   }
   const scope=scopes[id]?.[zh?0:1]||(zh?'演示由上游项目提供。':'Demo provided by the upstream project.');
   const badge=d.status==='recorded_partial_video'?(zh?'部分流程 · 导出未验证':'Partial · export unverified'):d.status==='generated_step_gif'?(zh?'步骤 GIF':'Step GIF'):'';
   s+=`<tr>\n<td width="120" valign="top"><a id="${id}"></a><strong>${link(t.repository,t.name)}</strong><br>★ ${t.quality.stars.toLocaleString('en-US')}${id==='gatherpack'?`<br>${zh?'自有项目':'Own project'}`:''}</td>\n<td width="260" valign="top"><strong>${esc(t.summary[lang])}</strong><br><br>${zh?'上手':'Setup'}：${esc(t.requirements[lang])}${badge?`<br><br><strong>${badge}</strong>`:''}<details><summary>${zh?'演示范围':'Demo scope'}</summary>${esc(scope)}</details></td>\n<td width="420" valign="top">${demo}</td>\n</tr>\n`;
  }
  s+='</tbody>\n</table>\n\n';
 }
 s+=`## ${zh?'说明与补充项目':'Notes and contributions'}\n\n${zh?'有些项目需要服务器、模型或付费 API，使用前请查看官方许可和费用。星标不代表质量保证；演示仅覆盖所注明的功能。':'Some tools require hosting, models or paid APIs. Check official licensing and pricing. Stars do not guarantee quality, and demos cover only the stated workflows.'}\n\n[${zh?'演示来源与实测范围':'Sources and demo scope'}](docs/MEDIA.md) · [${zh?'推荐一个工具':'Suggest a tool'}](https://github.com/dogchenya/everything_ok/issues/new) · [${zh?'收录规范与维护':'Contributing and maintenance'}](CONTRIBUTING.md)\n`;
 await fs.writeFile(zh?'README.md':'README.en.md',s);
}
console.log('Built categorized README tables with inline animated recordings.');
