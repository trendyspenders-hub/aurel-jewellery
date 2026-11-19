import fs from 'node:fs';
import zlib from 'node:zlib';
import {execFileSync} from 'node:child_process';
const parts=fs.readdirSync('source-parts').filter(x=>x.endsWith('.txt')).sort();
if(parts.length!==6)throw new Error('Expected 6 source chunks; got '+parts.length);
const encoded=parts.map(x=>fs.readFileSync('source-parts/'+x,'utf8')).join('');
const data=zlib.brotliDecompressSync(Buffer.from(encoded,'base64'));
execFileSync('tar',['-xf','-'],{input:data,stdio:['pipe','inherit','inherit']});
console.log('AUREL: source extracted successfully');
