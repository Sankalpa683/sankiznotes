// pages/youtube.js
import React, { useState } from 'react';
import axios from 'axios';

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?query=${encodeURIComponent(query)}`);
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div>
    <br></br><br></br><br></br><br></br><br></br><br></br>
      <h1>YouTube Search</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <p>{video.snippet.title}</p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
