const fs = require('fs');
const path = require('path');

// Read the file
const data = fs.readFileSync(path.join(__dirname, 'items.js'), 'utf-8');

// Parse the JSON
const items = JSON.parse(data);

// Modify the URLs
items.forEach(item => {
  const match = item.image.match(/punk(\d+)\.png$/);
  if (match) {
    const number = parseInt(match[1], 10);
    item.image = `https://ipfs.io/ipfs/bafybeia572ov7hr66ponkmkymxyq7zqb73xeaasrheqtjju6v4c5zkbdjy/${number}.png`;
  }
});

// Write the modified JSON to a new file
fs.writeFileSync(path.join(__dirname, 'output.js'), JSON.stringify(items, null, 2));