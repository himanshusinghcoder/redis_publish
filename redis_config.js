const redis =  require('redis')

const redisClient = redis.createClient()
redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err)
})
redisClient.on('connect', function (err) {
    console.log('Connected to Prediction redis successfully')
})


redisClient.connect()

module.exports = redisClient