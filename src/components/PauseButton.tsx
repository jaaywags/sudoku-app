import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PauseButtonProps {
  onPress: () => void;
}

const PauseButton: React.FC<PauseButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Pause</Text>
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

export default PauseButton;