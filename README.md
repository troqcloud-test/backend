# troqcloud-node

## Database Setup (Prisma ORM)

1. Copy env file:
   - `cp .env.example .env`
2. Set your DB + Redis connection in `.env`:
   - PostgreSQL: keep `DATABASE_URL` as `postgresql://...`
   - Local Redis (Homebrew default): `REDIS_URL=redis://127.0.0.1:6379`
3. Create/update DB schema:
   - `npm run db:push`
4. Start app:
   - `npm run dev`

## Switching to MySQL (minimal code changes)

Your API code does not change.

1. Update `DATABASE_URL` in `.env` to a MySQL URL.
2. In `prisma/schema.prisma`, change datasource provider from `"postgresql"` to `"mysql"`.
3. Regenerate Prisma client and sync schema:
   - `npm run prisma:generate`
   - `npm run db:push`
4. Restart the app.

## Endpoints

- `GET /`
- `GET /about`
- `GET /health`
- `GET /ready`
- `GET /users`
- `GET /users/:id`
- `POST /users`
- `GET /redis/ping` (returns `PONG`)
- `GET /redis/:key`
- `POST /redis/:key` with JSON body: `{"value":"hello","ttlSeconds":60}` (ttl optional)
- `POST /redis/incr/:key`
- `DELETE /redis/:key`

## Quick Redis Checks

```bash
curl -X POST http://localhost:8080/redis/greeting \
  -H "content-type: application/json" \
  -d '{"value":"hello redis","ttlSeconds":120}'

curl http://localhost:8080/redis/ping
curl http://localhost:8080/redis/greeting
curl -X POST http://localhost:8080/redis/incr/page-views
curl -X DELETE http://localhost:8080/redis/greeting
```
