const express = require('express');
const { google } = require('googleapis');

const app = express();

// Initialize YouTube API
const youtube = google.youtube({
  version: 'v3',
  auth: 'YOUR_API_KEY', // Replace with your YouTube API key
});

// Route to fetch captions
app.get('/captions/:videoId', async (req, res) => {
  try {
    const { videoId } = req.params;
    const captions = await youtube.captions.list({
      part: 'snippet',
      videoId,
    });
    res.json(captions.data);
  } catch (error) {
    console.error('Error fetching captions:', error);
    res.status(500).json({ error: 'Failed to fetch captions' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

