const fs = require('fs');
const { execSync } = require('child_process');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const commitCount = 200;
for (let i = 0; i < commitCount; i++) {
  const d = `${i} days ago`;
  const rand = getRandomInt(10, 11);

  fs.appendFileSync('test.txt', d + '\n');

  execSync('git add test.txt');
  execSync(`git commit --date="2020-${rand}-${d}" -m "Commit number ${i + 1}"`);
}

execSync('git push -u origin main');
