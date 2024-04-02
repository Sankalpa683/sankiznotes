import axios from 'axios';

const youtubeApiKey = "AIzaSyCdWFPMFOvYIuJjclMPtO9MhdXyUUln0Fk";  // Load from .env

export default async function handler(req, res) {
  const searchTerm = 'class 12 neb notes';
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&key=${youtubeApiKey}`;

  try {
    const response = await axios.get(url);
    const videos = response.data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));
    res.status(200).json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
}
