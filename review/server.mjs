import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const port=Number(process.env.REVIEW_PORT || 43121);
const reviewPath=process.env.REVIEW_DATA_FILE?path.resolve(process.env.REVIEW_DATA_FILE):path.join(root,'catalog','reviews.json');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.gif':'image/gif','.png':'image/png','.json':'application/json; charset=utf-8','.mp4':'video/mp4','.jpg':'image/jpeg','.md':'text/plain; charset=utf-8'};
const tools=JSON.parse(await fs.readFile(path.join(root,'catalog/tools.json'),'utf8'));
const ids=new Set(tools.map(t=>t.id));
let reviews={};
try{reviews=JSON.parse(await fs.readFile(reviewPath,'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
let writeQueue=Promise.resolve();
function json(res,status,data){res.writeHead(status,{'Content-Type':types['.json'],'Cache-Control':'no-store'});res.end(JSON.stringify(data));}
const server=http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,`http://127.0.0.1:${port}`);
  if(url.pathname==='/api/tools'&&req.method==='GET'){
   const fresh=JSON.parse(await fs.readFile(path.join(root,'catalog/tools.json'),'utf8'));
   tools.splice(0,tools.length,...fresh);ids.clear();for(const t of tools)ids.add(t.id);
   return json(res,200,tools);
  }
  if(url.pathname==='/api/reviews'&&req.method==='GET')return json(res,200,reviews);
  if(url.pathname.startsWith('/api/reviews/')&&req.method==='PUT'){
   if(req.headers.origin&&req.headers.origin!==`http://127.0.0.1:${port}`)return json(res,403,{error:'来源不匹配'});
   const id=decodeURIComponent(url.pathname.slice('/api/reviews/'.length));
   if(!ids.has(id))return json(res,404,{error:'未找到项目'});
   let raw='';for await(const part of req){raw+=part;if(raw.length>20000)return json(res,413,{error:'备注过长'});}
   const {status,note}=JSON.parse(raw);
   if(!['pending','approved','changes','rejected'].includes(status)||typeof note!=='string'||note.length>8000)return json(res,400,{error:'审核内容无效'});
   const entry={status,note,updatedAt:new Date().toISOString()};
   const operation=writeQueue.catch(()=>{}).then(async()=>{
    const next={...reviews,[id]:entry};
    await fs.writeFile(reviewPath+'.tmp',JSON.stringify(next,null,2)+'\n');
    await fs.rename(reviewPath+'.tmp',reviewPath);
    reviews=next;
   });writeQueue=operation;await operation;
   return json(res,200,entry);
  }
  if(!['GET','HEAD'].includes(req.method))return json(res,405,{error:'Method not allowed'});
  let target;
  if(url.pathname==='/')target=path.join(root,'review/index.html');
  else if(url.pathname==='/gallery/'||url.pathname==='/gallery/index.html')target=path.join(root,'index.html');
  else if(url.pathname.startsWith('/gallery/media/')){
   target=path.resolve(root,'.'+decodeURIComponent(url.pathname.slice('/gallery'.length)));
   if(!target.startsWith(path.join(root,'media')+path.sep))return json(res,403,{error:'Forbidden'});
  }
  else if(url.pathname==='/gallery/docs/MEDIA.md')target=path.join(root,'docs/MEDIA.md');
  else if(url.pathname==='/app.js'||url.pathname==='/style.css')target=path.join(root,'review',url.pathname.slice(1));
  else if(url.pathname.startsWith('/media/')){
   target=path.resolve(root,'.'+decodeURIComponent(url.pathname));
   if(!target.startsWith(path.join(root,'media')+path.sep))return json(res,403,{error:'Forbidden'});
  }else return json(res,404,{error:'Not found'});
  const body=await fs.readFile(target);
  if(path.extname(target)==='.mp4'&&req.headers.range){
   const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
   if(!match||(!match[1]&&!match[2])){res.writeHead(416,{'Content-Range':`bytes */${body.length}`});return res.end();}
   const start=match[1]?Number(match[1]):Math.max(0,body.length-Number(match[2]));
   const end=match[1]?(match[2]?Math.min(Number(match[2]),body.length-1):body.length-1):body.length-1;
   if(start> end||start>=body.length){res.writeHead(416,{'Content-Range':`bytes */${body.length}`});return res.end();}
   res.writeHead(206,{'Content-Type':'video/mp4','Content-Range':`bytes ${start}-${end}/${body.length}`,'Content-Length':end-start+1,'Accept-Ranges':'bytes','Cache-Control':'no-cache'});
   return res.end(req.method==='HEAD'?undefined:body.subarray(start,end+1));
  }
  res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Content-Length':body.length,'Accept-Ranges':'bytes','Cache-Control':'no-cache'});
  res.end(req.method==='HEAD'?undefined:body);
 }catch(e){if(e.code==='ENOENT')return json(res,404,{error:'Not found'});json(res,500,{error:'保存或读取失败，请重试'});console.error(e.message);}
});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}/`));
