import fs from 'node:fs';
import sharp from 'sharp';
const dirs=['public/images/cases','public/images/portfolio','public/assets/aistudio'];
const files=dirs.flatMap(d=>fs.readdirSync(d).filter(f=>/\.(png|webp)$/.test(f)).map(f=>d+'/'+f));
fs.mkdirSync('../qa/evidence',{recursive:true});
fs.writeFileSync('../qa/evidence/files.json',JSON.stringify(files,null,2));
for(let start=0;start<files.length;start+=12){
 const batch=files.slice(start,start+12),composites=[];
 for(let j=0;j<batch.length;j++){
 const img=await sharp(batch[j]).resize(420,260,{fit:'inside'}).flatten({background:'white'}).png().toBuffer();
 composites.push({input:img,left:(j%3)*440,top:Math.floor(j/3)*300});
 const txt=Buffer.from(`<svg width="440" height="32"><rect width="440" height="32" fill="white"/><text x="4" y="20" font-size="13">${start+j} ${batch[j].split('/').pop().slice(0,49)}</text></svg>`);
 composites.push({input:txt,left:(j%3)*440,top:Math.floor(j/3)*300+265});
 }
 await sharp({create:{width:1320,height:Math.ceil(batch.length/3)*300,channels:3,background:'#ddd'}}).composite(composites).png().toFile('../qa/evidence/sheet-'+start+'.png');
}
console.log(files.length);
