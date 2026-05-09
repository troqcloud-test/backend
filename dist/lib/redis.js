"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_URL = exports.redis = void 0;
exports.testRedisConnection = testRedisConnection;
const redis_1 = require("redis");
const redisUrl = process.env.REDIS_URL ?? "redis://127.0.0.1:6379";
exports.redis = (0, redis_1.createClient)({
    url: redisUrl,
});
exports.REDIS_URL = redisUrl;
exports.redis.on("error", (error) => {
    console.error("[redis] client error", error);
});
async function testRedisConnection() {
    try {
        const pong = await exports.redis.ping();
        return pong === "PONG";
    }
    catch {
        return false;
    }
}
