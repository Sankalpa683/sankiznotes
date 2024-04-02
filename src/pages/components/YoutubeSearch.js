import axios from 'axios';
import React, { useState } from 'react';

const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: 'class 12 neb notes', // your search query
          key: 'AIzaSyCdWFPMFOvYIuJjclMPtO9MhdXyUUln0Fk', // replace with your actual API key
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className="mt-8">
      <input
        type="text"
        placeholder="Search videos"
        className="border border-gray-300 p-2 rounded-md mr-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSearch}>
        Search
      </button>
      <div className="mt-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="mb-4">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="mt-2">{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeSearch;
