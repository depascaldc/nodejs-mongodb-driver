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