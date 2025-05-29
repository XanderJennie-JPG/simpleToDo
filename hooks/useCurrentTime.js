import { useState, useEffect } from 'react';

export default function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const timer = setInterval(update, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  return currentTime;
} 