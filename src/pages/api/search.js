
import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        key: 'AIzaSyCdWFPMFOvYIuJjclMPtO9MhdXyUUln0Fk', // Use your YouTube API key
      },
    });

    res.status(200).json(response.data.items);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
}
