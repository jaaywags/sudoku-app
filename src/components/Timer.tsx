import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

interface TimerProps {
  isPaused: boolean;
  onReset: () => void;
}

const Timer: React.FC<TimerProps> = ({ isPaused, onReset }) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setSecondsElapsed(prevSeconds => prevSeconds + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const formattedTime = new Date(secondsElapsed * 1000).toISOString().substr(11, 8);

  return (
    <Text style={styles.timerText}>{formattedTime}</Text>
  );
};

const styles = StyleSheet.create({
  timerText: {
    // ... timer text styles
  },
});

export default Timer;