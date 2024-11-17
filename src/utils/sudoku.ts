function isValid(grid: number[][], row: number, col: number, num: number): boolean {
  // Check row
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === num) {
      return false;
    }
  }

  // Check column
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === num) {
      return false;
    }
  }

  // Check 3x3 box
  const boxRowStart = Math.floor(row / 3) * 3;
  const boxColStart = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[boxRowStart + i][boxColStart + j] === num) {
        return false;
      }
    }
  }

  return true;
}

function solveSudoku(grid: number[][], row: number, col: number): boolean {
  // Base case: If we have reached the end of the grid, we have a solution
  if (row === 9) {
    return true;
  }

  // If we have reached the end of a row, move to the next row
  if (col === 9) {
    return solveSudoku(grid, row + 1, 0);
  }

  // If the cell is already filled, move to the next cell
  if (grid[row][col] !== 0) {
    return solveSudoku(grid, row, col + 1);
  }

  // Try filling the cell with numbers from 1 to 9
  for (let num = 1; num <= 9; num++) {
    if (isValid(grid, row, col, num)) {
      grid[row][col] = num;

      // Recursively solve the rest of the grid
      if (solveSudoku(grid, row, col + 1)) {
        return true;
      }

      // If the recursive call doesn't lead to a solution, backtrack
      grid[row][col] = 0;
    }
  }

  return false;
}

function generateSudoku(difficulty: 'easy' | 'medium' | 'hard' | 'expert'): number[][] {
  const grid: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0,   
 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  if (!solveSudoku(grid,   
 0, 0)) {
    throw new Error("Failed to solve Sudoku puzzle");
  }

  // Remove cells based on difficulty level
  const numCellsToRemove = {
    easy: 30,
    medium: 40,
    hard: 50,
    expert: 60,
  }[difficulty];

  let cellsRemoved = 0;
  while (cellsRemoved < numCellsToRemove) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);

    if (grid[row][col] !== 0) {
      grid[row][col] = 0;
      cellsRemoved++;
    }
  }

  return grid;
}

export default generateSudoku;