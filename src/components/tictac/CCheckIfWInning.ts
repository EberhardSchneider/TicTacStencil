const winningPositions = 
[
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]
];

export const getWinningPlayer = function(field): number {
  winningPositions.forEach( row => {
    if (field[row[0]] != 0) {
      if (field[row[0]] == field[row[1]] && field[row[1]] == field[row[2]]) {
        return field[row[0]];
      }
    }
  });
  return 0;
}
