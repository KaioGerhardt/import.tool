const fs = require('fs');

try {
  const data = fs.readFileSync('./src/db/settings.json');
  var json = JSON.parse(data);

} catch (err) {
  console.error(err);
}

module.exports = {
  json
}