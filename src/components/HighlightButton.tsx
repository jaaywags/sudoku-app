import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface HighlightButtonProps {
  color: string;
  onPress: () => void;
}

const HighlightButton: React.FC<HighlightButtonProps> = ({ color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>Highlight</Text>
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

export default HighlightButton;