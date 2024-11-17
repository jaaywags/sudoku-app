import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LevelButtonProps {
  difficulty: string;
  onPress: () => void;
}

const LevelButton: React.FC<LevelButtonProps> = ({ difficulty, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{difficulty}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // ... button styles
  },
  buttonText: {
    // ... text styles
  },
});

export default LevelButton;