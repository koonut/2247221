const fs = require('fs')
let new_emp = { "id": 5, "name": "Koonut", "age": 23 }
const { load } = require("./lab9.js")
var employee = load()
console.log(employee)
employee.people.push(new_emp)

fs.writeFile("empployee.json", JSON.stringify(employee), (err) => {
    if (err)
        console.log(err)
    else
        console.log("Done writing")
})


console.log(employee)