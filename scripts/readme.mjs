import fs from 'node:fs/promises';
const tools=JSON.parse(await fs.readFile('catalog/tools.json','utf8'));
const categories=JSON.parse(await fs.readFile('catalog/categories.json','utf8'));
const byId=new Map(tools.map(t=>[t.id,t]));
const videoBase='https://dogchenya.github.io/everything_ok/';
const raw=u=>u.replace(/^https:\/\/github.com\//,'https://raw.githubusercontent.com/').replace('/blob/','/');
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
 let s=`# everything_ok\n\n${zh?'[English](README.en.md)':'[简体中文](README.md)'} · [${zh?'视频版网页':'Video gallery'}](https://dogchenya.github.io/everything_ok/)\n\n${zh?'好用的 GitHub 工具，按用途分类，先看演示再决定要不要用。':'Useful GitHub tools, grouped by what you want to do. See them work before trying them.'}\n\n${zh?'**想简单分享文件？**同一网络传文件看 [LocalSend](#localsend)，不想安装看 [PairDrop](#pairdrop)，跨目录收集打包看 [GatherPack](#gatherpack)。':'**Want to share files easily?** Try [LocalSend](#localsend) on a local network, [PairDrop](#pairdrop) in a browser, or [GatherPack](#gatherpack) to collect and archive scattered files.'}\n\n${zh?'录屏已转为 GIF，在 README 中直接播放；点动图下方的「MP4 视频」可打开清晰版。录屏默认 2–3 倍速，原速版也保留。':'Recorded workflows play here as GIFs. Use the MP4 link below each preview for a clearer video. Recordings run at 2–3×, with normal-speed copies available.'}\n\n`;
 s+=categories.map(c=>`[${c[lang]} · ${c.tools.length}](#${c.id})`).join(' · ');
 s+=`\n\n${zh?'共 17 个已审核项目。星标快照：2026-10-24；上游素材、步骤 GIF 和部分实测会单独标明。':'17 reviewed projects. Star snapshot: 2026-10-24. Upstream media, step GIFs and partial recordings are labelled.'}\n\n`;
 for(const c of categories){
  s+=`<a id="${c.id}"></a>\n\n## ${c[lang]}\n\n`;
  if(c.id==='file-sharing')s+=zh?'临时发文件优先看前两个；整理成包用 GatherPack，长期保持文件一致再考虑 Syncthing。\n\n':'For a quick transfer, start with the first two. Use GatherPack to assemble an archive, or Syncthing for ongoing synchronization.\n\n';
  for(const id of c.tools){
   const t=byId.get(id),d=t.demo,local=d.url.startsWith('media/'),video=/\.(mp4|webm)$/i.test(d.url);
   s+=`<a id="${id}"></a>\n\n### [${t.name}](${t.repository})${id==='gatherpack'?(zh?' · 自有项目':' · Own project'):''}\n\n**${t.summary[lang]}**\n\n${zh?'上手':'Setup'}：${t.requirements[lang]} · ★ ${t.quality.stars.toLocaleString('en-US')}\n\n`;
   if(local&&video){
    const gif=d.url.replace(/\.mp4$/,'.gif');await fs.access(gif);
    s+=`![${t.name} ${zh?'实际操作演示':'recorded workflow'}](${gif})\n\n[${zh?'MP4 视频':'MP4 video'}](${videoBase+d.url}) · ${d.speed}× · ${d.durationSeconds.toFixed(1)} s · [${zh?'原速版':'Normal speed'}](${videoBase+d.originalUrl})\n\n`;
   }else if(!video){
    s+=`![${t.name} ${zh?'演示':'demo'}](${local?d.url:raw(d.url)})\n\n`;
    if(!local)s+=`[${zh?'上游 GIF 来源':'Upstream GIF source'}](${d.url})\n\n`;
   }else{
    s+=`[▶ ${zh?'查看上游演示视频':'Watch upstream demo video'}](${raw(d.url)})\n\n`;
   }
   if(scopes[id])s+=`${scopes[id][zh?0:1]}\n\n`;
   else s+=zh?'演示由上游项目提供，保留原始来源。\n\n':'Demo provided by the upstream project; original source retained.\n\n';
  }
 }
 s+=`## ${zh?'说明与补充项目':'Notes and contributions'}\n\n${zh?'有些项目需要服务器、模型或付费 API，使用前请查看官方许可和费用。星标不代表质量保证；演示仅覆盖所注明的功能。':'Some tools require hosting, models or paid APIs. Check official licensing and pricing. Stars do not guarantee quality, and demos cover only the stated workflows.'}\n\n[${zh?'演示来源与实测范围':'Sources and demo scope'}](docs/MEDIA.md) · [${zh?'推荐一个工具':'Suggest a tool'}](https://github.com/dogchenya/everything_ok/issues/new) · [${zh?'收录规范与维护':'Contributing and maintenance'}](CONTRIBUTING.md)\n`;
 await fs.writeFile(zh?'README.md':'README.en.md',s);
}
console.log('Built categorized READMEs with inline animated recordings.');
