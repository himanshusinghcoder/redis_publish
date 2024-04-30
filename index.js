const express = require('express')
const redisClient = require('./redis_config')
const app = express()

app.get('/', async (req, res) => {
    const data = await redisClient.publish('test', "test successful")
    console.log(">>>data", data);
    res.send({status: "success"})
})



app.listen(7070, () => {
    console.log("app listening on port 7070");
})