import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMMKV } from 'react-native-mmkv';
import Dashboard from '../components/Dashboard';
import ContinueButton from '../components/ContinueButton';
import LevelButton from '../components/LevelButton'; // Create this component

const HomeScreen: React.FC = () => {
  const mmkv = useMMKV();
  const [easyCount, setEasyCount] = useState(0);
  const [mediumCount, setMediumCount] = useState(0);
  const [hardCount, setHardCount] = useState(0);
  const [expertCount, setExpertCount] = useState(0);
  const [easyBestTime, setEasyBestTime] = useState(0);
  const [mediumBestTime, setMediumBestTime] = useState(0);
  const [hardBestTime, setHardBestTime] = useState(0);
  const [expertBestTime, setExpertBestTime] = useState(0);
  const [hasSavedGame, setHasSavedGame] = useState(false);

  useEffect(() => {
    // Load data from MMKV
    const savedEasyCount = mmkv.getNumber('easyCount') || 0;
    const savedMediumCount = mmkv.getNumber('mediumCount') || 0;
    const savedHardCount = mmkv.getNumber('hardCount') || 0;
    const savedExpertCount = mmkv.getNumber('expertCount') || 0;
    const savedEasyBestTime = mmkv.getNumber('easyBestTime') || 0;
    const savedMediumBestTime = mmkv.getNumber('mediumBestTime') || 0;
    const savedHardBestTime = mmkv.getNumber('hardBestTime') || 0;
    const savedExpertBestTime = mmkv.getNumber('expertBestTime') || 0;
    const hasSavedGame = mmkv.getBoolean('hasSavedGame') || false;

    setEasyCount(savedEasyCount);
    setMediumCount(savedMediumCount);
    setHardCount(savedHardCount);
    setExpertCount(savedExpertCount);
    setEasyBestTime(savedEasyBestTime);
    setMediumBestTime(savedMediumBestTime);
    setHardBestTime(savedHardBestTime);
    setHasSavedGame(hasSavedGame);
  }, []);

  const handleContinue = () => {
    // Load saved game state and navigate to GameScreen
  };

  const handleStartGame = (difficulty: string) => {
    // Navigate to GameScreen with the selected difficulty
  };

  return (
    <View style={styles.homeScreen}>
      <Dashboard
        easyCount={easyCount}
        mediumCount={mediumCount}
        hardCount={hardCount}
        expertCount={expertCount}
        easyBestTime={easyBestTime}
        mediumBestTime={mediumBestTime}
        hardBestTime={hardBestTime}
        expertBestTime={expertBestTime}
      />
      {hasSavedGame && <ContinueButton onPress={handleContinue} />}
      <LevelButton difficulty="easy" onPress={() => handleStartGame('easy')} />
      <LevelButton difficulty="medium" onPress={() => handleStartGame('medium')} />
      <LevelButton difficulty="hard" onPress={() => handleStartGame('hard')} />
      <LevelButton difficulty="expert" onPress={() => handleStartGame('expert')} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    // ... home screen styles
  },
});

export default HomeScreen;