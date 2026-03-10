#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function findRoots(dir){
  const results = [];
  const files = fs.readdirSync(dir);
  files.forEach(f=>{
    const full = path.join(dir,f);
    const stat = fs.statSync(full);
    if(stat.isDirectory()) return results.push(...findRoots(full));
    if(!full.endsWith('.css')) return;
    const content = fs.readFileSync(full,'utf8');
    if(/:root\s*\{/.test(content)) results.push(full);
  });
  return results;
}

const roots = [...findRoots(path.join(process.cwd(),'src')), ...findRoots(path.join(process.cwd(),'public'))];
if(roots.length){
  console.log('Found :root in files:');
  roots.forEach(r=>console.log(' - '+r));
  process.exit(1);
} else {
  console.log('No :root blocks found in src/ or public/ except tokens.css');
  process.exit(0);
}
