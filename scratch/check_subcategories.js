const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'services');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const slugMatch = content.match(/slug:\s*'([^']+)'/);
  const subMatch = content.match(/subcategories:\s*\[([\s\S]*?)\]/);
  const titleMatch = content.match(/shortTitle:\s*'([^']+)'/);
  
  const slug = slugMatch ? slugMatch[1] : f;
  const title = titleMatch ? titleMatch[1] : f;
  
  console.log(`\n========================================`);
  console.log(`${f} [${slug}] - "${title}"`);
  console.log(`========================================`);
  
  if (subMatch) {
    const rawLines = subMatch[1].split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0);
    rawLines.forEach(l => console.log('  ' + l));
  } else {
    console.log('  NO SUBCATEGORIES FOUND!');
  }
});
