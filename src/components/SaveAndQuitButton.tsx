import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SaveAndQuitButtonProps {
  onPress: () => void;
}

const SaveAndQuitButton: React.FC<SaveAndQuitButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Save and Quit</Text>
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

export default SaveAndQuitButton;