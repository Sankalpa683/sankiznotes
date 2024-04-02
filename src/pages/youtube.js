import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/search');
        setVideos(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Class 12 NEB Notes</h1>
      {isLoading && <p>Loading videos...</p>}
      {error && <p className="text-red-500">Error fetching videos: {error.message}</p>}
      {videos.length > 0 && (
        <ul className="grid grid-cols-1 md
