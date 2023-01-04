const { readFileSync } = require('fs')
const load = () => JSON.parse(readFileSync('employee.json'))
const loadB = () => JSON.parse(readFileSync('paygrade.json'))
const loadC = () => JSON.parse(readFileSync('department.json'))
module.exports = { load, loadB, loadC }