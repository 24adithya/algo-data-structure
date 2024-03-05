// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

// Accepted  1,895,713 Submissions 3,382,325

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
  if (grid === null || grid.length === 0) {
    return 0;
  }

  let noOfIslands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === '1') {
        noOfIslands += 1; //increase count by 1
        dfs(row, column, grid);
      }
    }
  }

  return noOfIslands;
};

const dfs = (row, column, grid) => {
  if (
    row < 0 ||
    row >= grid.length ||
    column < 0 ||
    column >= grid[row].length ||
    grid[row][column] === '0'
  )
    return;

  grid[row][column] = '0';

  dfs(row - 1, column, grid); //up
  dfs(row, column + 1, grid); //right
  dfs(row + 1, column, grid); //down
  dfs(row, column - 1, grid); //left
};

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
);

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
);
