const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/projects', (req, res) => {
  const dataPath = path.join(__dirname, 'data', 'projects.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read projects data' });
    try {
      const projects = JSON.parse(data);
      res.json(projects);
    } catch (e) {
      res.status(500).json({ error: 'Invalid projects data' });
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
