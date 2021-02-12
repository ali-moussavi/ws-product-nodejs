About My Solution For Server-Side Rate-Limiting

To solve this challenge I wrote a middleware function and I used the user’s IP address to implement rate-limiting. If our API had any sort of authentication for users, for example, an API key we could also use that to limit the number of requests a user makes in a certain time but since our API did not have that I used the user’s IP address.

For implementing the rate-limiting I used an algorithm called Sliding Window Counter. This algorithm keeps track of each user’s request count while grouping them by fixed time windows ( which is a fraction of the limit’s window). For example, if our limit for the user is 100 requests per 24 hours we can group all the requests in each one-hour together and increment the counter if the user makes another request in that one-hour timestamp. Then for determining whether the user has exceeded their limit, we retrieve all records created in the last window ( in our example 24 hours) and then sum the counters on them.

Besides, the records that get expired (more than 24 hours is passed since logging them) get deleted to save memory. Also, this is an accurate approach as the window is not fixed across users and is based on the user’s activity and the memory consumption is optimized since we will not log every request that the user makes and instead we group requests together in certain time fractions.

It is also worth mentioning that I used Redis to keep track of each user’s request count and their IP addresses since Redis saves data on the memory and it is very fast so the rate-limiting process does not slow our API.

I have implemented the rate-limiting constraint to be 30 requests per hour for each user but it can be changed easily by editing rateLimiter.js file in middleware folder.

Live Demo: https://eqworks-ws.herokuapp.com/api
