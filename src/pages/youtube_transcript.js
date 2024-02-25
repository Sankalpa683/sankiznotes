import React from 'react'
import axios from 'axios';

const API_KEY = 'AIzaSyCOgL2Dwd6dSQE4169RsxBJOfSkQuSBuyk';

export const getVideoTranscript = async (videoId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${API_KEY}`
    );

    const transcript = response.data.items[0]?.snippet?.localized?.title;

    return transcript;
  } catch (error) {
    console.error('Error fetching transcript:', error);
    return null;
  }
};


