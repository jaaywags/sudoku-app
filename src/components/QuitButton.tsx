import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface QuitButtonProps {
  onPress: () => void;
}

const QuitButton: React.FC<QuitButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Quit</Text>
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

export default QuitButton;