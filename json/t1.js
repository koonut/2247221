const { readFileSync } = require('fs');
var load = () => JSON.parse(readFileSync('student.json'))//stringfy //parse
module.exports = { load };