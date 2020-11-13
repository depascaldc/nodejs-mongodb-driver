# NodeJS MongoDB Driver

## written by depascaldc

---

### Install
- `npm install --save nodejs-mongodb-driver`

---
### Example Usage

```js

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


```

- FOR MORE EXAMPLES WATCH in examples.js File in the project root directory...

<div style="background:#333; border-radius:10px; padding:30px;" align="center">
    <a style="color:#00ff00" target="_blank" href="https://github.com/depascaldc/"><img src="https://img.shields.io/github/followers/depascaldc?label=GitHub%20Followers&logo=GitHub&logoColor=%23ffffff&style=flat-square"></img></a>
    <a style="color:#00ff00" target="_blank" href="https://discord.gg/Hjymztg5rR"><img src="https://img.shields.io/discord/776519121147527210?label=depascaldc.xyz%20Discord&logo=Discord&logoColor=%23ffffff&style=flat-square"></img></a>
    <a style="color:#00ff00" target="_blank" href="https://www.paypal.com/paypalme/depascaldc"><img src="https://img.shields.io/static/v1?label=Donate%20Via%20Paypal&message=paypal&style=flat-square&logo=paypal&color=lightgrey"></img></a>
</div>
