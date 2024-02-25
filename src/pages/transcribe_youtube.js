

import { useEffect, useState } from 'react';
import { getVideoTranscript } from './youtube_transcript.js';

const VideoPage = () => {
  const videoId = 'https://www.youtube.com/watch?v=TUVcZfQe-Kw';
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const fetchTranscript = async () => {
      const videoTranscript = await getVideoTranscript(videoId);
      setTranscript(videoTranscript);
      console.log(videoTranscript);
    };

    fetchTranscript();
  }, [videoId]);

  
  return (
    <div>
      <h1>YouTube Video Transcript</h1>
      <p>{transcript}</p>
    </div>
  );
};

export default VideoPage;
