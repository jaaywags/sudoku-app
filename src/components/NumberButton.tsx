import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NumberButtonProps {
  number: number;
  onPress: () => void;
}

const NumberButton: React.FC<NumberButtonProps> = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default NumberButton;