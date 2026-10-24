import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const tools=JSON.parse(await fs.readFile('catalog/tools.json','utf8'));
assert(tools.length>0);
assert.equal(new Set(tools.map(t=>t.id)).size,tools.length);
const categories=JSON.parse(await fs.readFile('catalog/categories.json','utf8'));
const categoryIds=categories.flatMap(c=>c.tools);
assert.equal(new Set(categories.map(c=>c.id)).size,categories.length);
assert.equal(categoryIds.length,tools.length);
assert.deepEqual([...categoryIds].sort(),tools.map(t=>t.id).sort());
for(const c of categories)assert(c.zh&&c.en&&c.tools.length);
for(const t of tools){
 assert.equal(t.review,'approved');
 assert(t.summary.zh&&t.summary.en&&t.requirements.zh&&t.requirements.en);
 assert(t.demo.url);
 if(t.demo.url.startsWith('media/'))await fs.access(t.demo.url);
 if(t.demo.originalUrl)await fs.access(t.demo.originalUrl);
}
for(const file of ['README.md','README.en.md','index.html','docs/MEDIA.md','CONTRIBUTING.md','review/README.md']){
 const source=await fs.readFile(file,'utf8');
 const links=[...source.matchAll(/(?:href|src|poster)="([^"]+)"/g)].map(m=>m[1]);
 if(!file.endsWith('.html'))links.push(...[...source.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]));
 for(const link of links){if(/^(?:https?:|#)/.test(link))continue;await fs.access(path.resolve(path.dirname(file),link.split('#')[0]));}
}
const tracked=execFileSync('git',['ls-files','--cached'],{encoding:'utf8'}).trim().split('\n').filter(Boolean);
for(const file of tracked){
 assert(!/^(?:\.tools\/|research\/|catalog\/reviews|catalog\/batches\/|media\/recordings\/)/.test(file),`Private/local file staged: ${file}`);
 const stat=await fs.stat(file);assert(stat.size<95*1024*1024,`File too large: ${file}`);
 if(/\.(?:md|json|mjs|js|html|css)$/.test(file)){
  const s=await fs.readFile(file,'utf8');
  assert(!/(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----)/.test(s),`Possible credential in ${file}`);
  assert(!/[A-Z]:[\\/]Users[\\/]/i.test(s),`Local user path in ${file}`);
 }
}
console.log(`Verified ${tools.length} tools, ${categories.length} categories, documentation/media links and ${tracked.length} repository files.`);
