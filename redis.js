const redis = require("redis");

const client = redis.createClient();

// client.get("::1", redis.print);
client.del("::1", redis.print);
