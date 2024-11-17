import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CellProps {
  value: number;
  isSelected: boolean;
  isHighlighted: boolean;
  onSelect: () => void;
}

const Cell: React.FC<CellProps> = ({ value, isSelected, isHighlighted, onSelect }) => {
  return (
    <TouchableOpacity style={[styles.cell, isSelected && styles.selected, isHighlighted && styles.highlighted]} onPress={onSelect}>
      <Text style={styles.cellText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: 'lightblue',
  },
  highlighted: {
    backgroundColor: 'lightgray',
  },
  cellText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Cell;