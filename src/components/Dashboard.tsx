import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DashboardProps {
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  expertCount: number;
  easyBestTime: number;
  mediumBestTime: number;
  hardBestTime: number;
  expertBestTime: number;
}

const Dashboard: React.FC<DashboardProps> = ({ easyCount, mediumCount, hardCount, expertCount, easyBestTime, mediumBestTime, hardBestTime, expertBestTime }) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes}:${secondsRemaining.toString().padStart(2, '0')}`;
  };
  
  return (
    <View style={styles.dashboard}>
      <Text>Easy Wins: {easyCount}</Text>
      <Text>Medium Wins: {mediumCount}</Text>
      <Text>Hard Wins: {hardCount}</Text>
      <Text>Expert Wins: {expertCount}</Text>
      <Text>Easy Best Time: {formatTime(easyBestTime)}</Text>
      <Text>Medium Best Time: {formatTime(mediumBestTime)}</Text>
      <Text>Hard Best Time: {formatTime(hardBestTime)}</Text>
      <Text>Expert Best Time: {formatTime(expertBestTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    // ... dashboard styles
  },
});

export default Dashboard;