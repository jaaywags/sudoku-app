import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NoteButtonProps {
  number: number;
  onPress: () => void;
}

const NoteButton: React.FC<NoteButtonProps> = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button:   
 {
    // ... button styles
  },
  buttonText: {
    // ... text styles
  },
});

export default NoteButton;