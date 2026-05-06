# Example Portfolio Platform

Minimal example portfolio platform (Node + Express serving a static frontend) — **containerized and deployment-ready**.

## Quick Start (Local Development)

### Option 1: Docker (Recommended)
```bash
docker compose up -d --build
```
Open http://localhost:3005

### Option 2: Node Direct
```bash
npm install
npm start
```
Open http://localhost:3000

## Structure

- `server.js` — Express server and API endpoint `/api/projects`.
- `public/` — Static frontend files (`index.html`, `app.js`, `styles.css`).
- `data/projects.json` — Sample project data.
- `Dockerfile` — Container definition (Node 20 Alpine).
- `docker-compose.yml` — Deployment orchestration (port 3005).
- `.dockerignore` — Clean builds.
- `.env` — Environment configuration.

## Docker Commands

**Build & start:**
```bash
docker compose up -d --build
```

**View logs:**
```bash
docker compose logs -f portfolio
```

**Stop:**
```bash
docker compose down
```

**View running containers:**
```bash
docker ps
```

## Production Deployment

The app is containerized for scalable deployment. Environment variables configure:
- `NODE_ENV` — `development` or `production`
- `PORT` — Server port (default `3000`)

Update `docker-compose.yml` or override at runtime:
```bash
docker compose up -d -e NODE_ENV=production -e PORT=3000
```

## Nginx Routing (Optional)

Add to nginx config:
```nginx
server {
    listen 80;
    server_name portfolio.local;

    location / {
        proxy_pass http://portfolio:3000;
    }
}
```

Then restart nginx and access: `http://portfolio.local:8080`

## Next Ideas

- Add admin UI to manage projects.
- Add authentication (JWT).
- Add database (PostgreSQL/MongoDB).
- CI/CD pipeline (GitHub Actions).
