import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const tools=JSON.parse(await fs.readFile('catalog/tools.json','utf8'));
assert.equal(tools.length,17);
assert.equal(new Set(tools.map(t=>t.id)).size,17);
for(const t of tools){
 assert.equal(t.review,'approved');
 assert(t.summary.zh&&t.summary.en&&t.requirements.zh&&t.requirements.en);
 assert(t.demo.url&&!['appflowy','rustdesk','dify'].includes(t.id));
 if(t.demo.url.startsWith('media/'))await fs.access(t.demo.url);
 if(t.demo.originalUrl)await fs.access(t.demo.originalUrl);
}
for(const file of ['README.md','README.en.md','index.html','docs/MEDIA.md','media/README.md']){
 const source=await fs.readFile(file,'utf8');
 const links=[...source.matchAll(/(?:href|src|poster)="([^"]+)"/g)].map(m=>m[1]);
 if(!file.endsWith('.html'))links.push(...[...source.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]));
 for(const link of links){if(/^(?:https?:|#)/.test(link))continue;await fs.access(path.resolve(path.dirname(file),link.split('#')[0]));}
}
const staged=execFileSync('git',['diff','--cached','--name-only'],{encoding:'utf8'}).trim().split('\n').filter(Boolean);
for(const file of staged){
 assert(!/^(?:\.tools\/|research\/|catalog\/reviews|catalog\/batches\/|media\/recordings\/)/.test(file),`Private/local file staged: ${file}`);
 const stat=await fs.stat(file);assert(stat.size<95*1024*1024,`File too large: ${file}`);
 if(/\.(?:md|json|mjs|js|html|css)$/.test(file)){
  const s=await fs.readFile(file,'utf8');
  assert(!/(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----)/.test(s),`Possible credential in ${file}`);
  assert(!/[A-Z]:[\\/]Users[\\/]/i.test(s),`Local user path in ${file}`);
 }
}
console.log(`Verified ${tools.length} reviewed tools, local documentation/media links and ${staged.length} staged files.`);
