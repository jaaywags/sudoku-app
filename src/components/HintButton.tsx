import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface HintButtonProps {
  onPress: () => void;
}

const HintButton: React.FC<HintButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Hint</Text>
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

export default HintButton;