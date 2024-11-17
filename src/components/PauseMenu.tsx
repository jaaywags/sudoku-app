import React from 'react';
import { View, StyleSheet } from 'react-native';
import SaveAndQuitButton from './SaveAndQuitButton';
import QuitButton from './QuitButton';

const PauseMenu: React.FC = () => {
  return (
    <View style={styles.pauseMenu}>
      <SaveAndQuitButton onPress={() => { /* Handle save and quit */ }} />
      <QuitButton onPress={() => { /* Handle quit */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  pauseMenu: {
    // ... pause menu styles
  },
});

export default PauseMenu;