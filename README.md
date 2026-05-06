# Example Portfolio Platform

Minimal example portfolio platform (Node + Express serving a static frontend).

## Install

```bash
npm install
```

## Run

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Structure

- `server.js` — Express server and API endpoint `/api/projects`.
- `public/` — Static frontend files (`index.html`, `app.js`, `styles.css`).
- `data/projects.json` — Sample project data.

## Next ideas

- Add an admin UI to add/edit projects.
- Add authentication and deployment steps.
