import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

interface GridProps {
  grid: number[][];
  onCellSelect: (row: number, col: number) => void;
}

const Grid: React.FC<GridProps> = ({ grid, onCellSelect }) => {
  return (
    <View style={styles.grid}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((value, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={value}
              isSelected={false} // Implement selection logic
              isHighlighted={false} // Implement highlighting logic
              onSelect={() => onCellSelect(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    // ... cell styles
  },
});

export default Grid;