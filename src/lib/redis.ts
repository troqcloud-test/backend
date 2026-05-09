import { createClient } from "redis";

const redisUrl = process.env.REDIS_URL ?? "redis://127.0.0.1:6379";

export const redis = createClient({
  url: redisUrl,
});

export const REDIS_URL = redisUrl;

redis.on("error", (error: unknown) => {
  console.error("[redis] client error", error);
});

export async function testRedisConnection(): Promise<boolean> {
  try {
    const pong = await redis.ping();
    return pong === "PONG";
  } catch {
    return false;
  }
}
