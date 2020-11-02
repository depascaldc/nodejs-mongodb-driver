const { NodeJSMongoDriver } = require('./index')
const connectionString = `mongodb://user:password@localhost:27017/admin`

const dbHandler = new NodeJSMongoDriver(connectionString)
// or
dbHandler = NodeJSMongoDriver.simple("user", "password", "localhost", 27017, "admin")


dbHandler.query("database", "collection", {
    username: "depascaldc"
}, (err, res) => {
    if(err) return console.error(err)
    if(!res[0]) return console.log("No Objects found in Result...")
    console.log(res)
})

dbHandler.queryAsync("database", "collection", {
    username: "depascaldc"
}).then(res => {
    if(!res[0]) return console.log("No Objects found in Result...")
    console.log(res)
}).catch(err=>{
    console.error(err)
})

dbHandler.insertObject("database", "collection", {
    username: "depascaldc"
}, (err, res) => {
    if(err) return console.error(err)
    console.log(res) // should be a boolean
})

dbHandler.insertObjectAsync("database", "collection", {
    username: "depascaldc"
}).then(res => {
    console.log(res) // should be a boolean
}).catch(err=>{
    console.error(err)
})

dbHandler.deleteObject("database", "collection", {
    username: "depascaldc"
}, (err, res) => {
    if(err) return console.error(err) 
    console.log(res) // should be a boolean
})

dbHandler.deleteObjectAsync("database", "collection", {
    username: "depascaldc"
}).then(res => {
    console.log(res) // should be a boolean
}).catch(err=>{
    console.error(err)
})

// ................. see index.js for more functions... theyre build by the same scheme