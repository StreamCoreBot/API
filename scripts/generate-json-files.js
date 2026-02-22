const fs = require('fs');
const path = require('path');

// Read users.json
const usersPath = path.join(__dirname, '..', 'users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

// Create public/json directory if it doesn't exist
const jsonDir = path.join(__dirname, '..', 'public', 'json');
if (!fs.existsSync(jsonDir)) {
  fs.mkdirSync(jsonDir, { recursive: true });
}

// Generate individual JSON files
users.forEach(user => {
  const fileName = `${user.StreamerName.toLowerCase()}.json`;
  const filePath = path.join(jsonDir, fileName);
  const content = JSON.stringify({ BotName: user.BotName }, null, 2);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${fileName}`);
});

console.log(`Generated ${users.length} JSON files in public/json/`);
