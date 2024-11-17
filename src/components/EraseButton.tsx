import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface EraseButtonProps {
  onPress: () => void;
}

const EraseButton: React.FC<EraseButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Erase</Text>
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

export default EraseButton;