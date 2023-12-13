const express = require('express');
const db = require('./db');
const { User, Repository, Release, PullRequestOpened, PullRequestClosed, CodeScan, Commit } = require('./models');




const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('API is running!');
});

// Add more routes to fetch data from the database

// Endpoint to get all items
// Define routes here
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/repos', async (req, res) => {
  try {
    const users = await Repository.findAll(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/commits', async (req, res) => {
  try {
    const users = await Commit.findAll(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/pr_open', async (req, res) => {
  try {
    const users = await PullRequestOpened.findAll(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/pr_done', async (req, res) => {
  try {
    const users = await PullRequestClosed.findAll(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/release', async (req, res) => {
  try {
    const users = await Release.findAll(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/pr_done', async (req, res) => {
  try {
    const users = await PullRequestClosed.findAll(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/scan', async (req, res) => {
  try {
    const users = await CodeScan.findAll(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await db.authenticate();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server running on port ${PORT}`);
});