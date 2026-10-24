import fs from 'node:fs/promises';
import {promisify} from 'node:util';
import {execFile} from 'node:child_process';
const run=promisify(execFile);
const ffmpeg=process.env.FFMPEG||'ffmpeg';
const tools=JSON.parse(await fs.readFile('catalog/tools.json','utf8'));
for(const t of tools){
 const source=t.demo.url;
 if(!source.startsWith('media/')||!source.endsWith('.mp4'))continue;
 const target=source.replace(/\.mp4$/,'.gif');
 await run(ffmpeg,['-hide_banner','-loglevel','error','-y','-i',source,'-filter_complex','fps=12,scale=800:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128:stats_mode=diff[p];[b][p]paletteuse=dither=sierra2_4a:diff_mode=rectangle','-loop','0',target]);
 if((await fs.stat(target)).size>=10*1024*1024)throw Error('Preview exceeds 10 MiB: '+target);
 console.log(target);
}
