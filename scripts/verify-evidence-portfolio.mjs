import fs from 'node:fs';
import assert from 'node:assert/strict';
import {chromium,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const projects=JSON.parse(fs.readFileSync('src/data/portfolioImages.json','utf8'));
const base=process.env.AUDIT_URL||'http://127.0.0.1:4318';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const reports=[],errors=[];
fs.mkdirSync('../qa/evidence',{recursive:true});
try{
 const page=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:900}});
 for(const project of projects){
  const r=await page.goto(base+project.route);
  assert.equal(r.status(),200,project.route);
  await expect(page.locator('h1')).toHaveText(project.name);
  await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href','https://www.omarseo.digital'+project.route);
  await expect(page.locator('[data-evidence-status]')).toHaveAttribute('data-evidence-status',project.evidenceStatus);
  assert.equal(await page.locator('.portfolio-case .portfolio-visual img').count(),project.evidence.length);
  assert.equal(await page.locator('img[src*="/images/projects/"]').count(),0);
  assert.equal(await page.locator('meta[property="og:image"]').getAttribute('content'),'https://www.omarseo.digital/og-default.jpg');
  for(const e of project.evidence){await expect(page.locator('img[src="'+e.src+'"]').first()).toBeVisible();assert.equal((await page.request.get(base+e.src)).status(),200);}
  for(const raw of await page.locator('script[type="application/ld+json"]').allTextContents())JSON.parse(raw);
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))errors.push(project.route+' overflow');
  reports.push({route:project.route,noJS:true,status:r.status(),captures:project.evidence.length});
 }
 await page.close();
 for(const width of [320,390,1440])for(const large of [false,true]){
  const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});
  const p=await context.newPage();
  for(const route of ['/resultados',projects.find(p=>p.id==='20').route,projects.find(p=>p.id==='22').route]){
   await p.goto(base+route,{waitUntil:'networkidle'});
   if(large)await p.addStyleTag({content:'html{font-size:200%!important}'});
   if(route==='/resultados')assert.equal(await p.locator('[data-project-id]').count(),22);
   const overflow=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
   const a=await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
   if(overflow||a.violations.length)errors.push({route,width,large,overflow,violations:a.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))});
   if(!large){const shot=route==='/resultados'?'index':route.includes('sangel')?'sangel':'pousada';for(const img of await p.locator('.portfolio-visual img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode());}await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:`../qa/evidence/${shot}-${width}.png`,fullPage:true});if(shot==='sangel'){await p.locator('.search-evidence').first().scrollIntoViewIfNeeded();await p.screenshot({path:`../qa/evidence/capture-detail-${width}.png`});}}
   reports.push({route,width,large,overflow,axeViolations:a.violations.length});
  }
  await context.close();
 }
}finally{await browser.close();fs.writeFileSync('../qa/evidence/verification-'+(base.includes('localhost')||base.includes('127.0.0.1')?'local':'production')+'.json',JSON.stringify({base,reports,errors},null,2));}
console.log(JSON.stringify({base,checks:reports.length,errors},null,2));
if(errors.length)process.exitCode=1;
