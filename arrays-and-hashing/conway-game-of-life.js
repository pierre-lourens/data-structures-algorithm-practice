/*
Conway's Game Of Life

Conway's Game of Life (see https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a famous example of a cellular automaton devised as a thought experiment for modeling local populations and other networks.

The game takes an initial state which is a matrix of booleans. True represents a live cell. False is dead. On every turn, each cell computes it's next state based on it's own state and that of it's neighbors along horizontals, verticals, or diagonals. The rules are:

- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

For ease of viewing the states, we'll use strings instead of booleans. An "X" will represent a live cell, a space will represent a dead cell.
 
neighbors -- horizontal, verticla, diagonal 
directly adjacent 
that means it's 8 for the center


3 for [0,0]


EXAMPLE(S)
blinker = [
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", "X", "X", "X", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
]

[
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
]
*    *   *
*  [2,2] * 
*    *   *

conway(blinker, 1) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', 'X', 'X', 'X', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]
conway(blinker, 2) =>
[
  [ ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', 'X', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]

Notice that this pattern cycles between horizontal and vertical orientations. Look in the the wikipedia article for more interesting and well known patterns! 
 

FUNCTION SIGNATURE
function conway(board, rounds) {
def conway(board, rounds):

*/
function getNewValue(r, c, board) {
  const directions = [
    [0, -1], // W
    [-1, -1], // NW
    [-1, 0], // N
    [-1, 1], // NE
    [0, 1], // E
    [1, 1], // SE
    [1, 0], // S
    [1, -1], // SW
  ];

  let countAlive = 0;

  for (const dir of directions) {
    const destX = r + dir[0];
    const destY = c + dir[1];

    const outOfBounds =
      destX < 0 || destX >= board.length || destY >= board[0].length;

    if (outOfBounds) {
      continue;
    }
    const val = board[destX][destY];
    if (val === "X") {
      countAlive++;
    }
  }

  const isAlive = board[r][c] === "X";
  let isDead = true; // true or false

  if (isAlive) {
    //alive
    if (countAlive < 2 || countAlive > 3) {
      isDead = true;
    } else if (countAlive === 2 || countAlive === 3) isDead = false;
  } else {
    if (countAlive === 3) isDead = false;
  }
  return isDead ? " " : "X";
}

function conway(board, rounds) {
  let count = 0;
  let oldBoard = board;

  while (count < rounds) {
    let nextBoard = [];
    for (let r = 0; r < board.length; r++) {
      let newRow = [];
      for (let c = 0; c < board[0].length; c++) {
        const newCell = getNewValue(r, c, oldBoard);
        newRow.push(newCell);
      }
      nextBoard.push(newRow);
    }
    console.log({ nextBoard });
    oldBoard = nextBoard;
    count++;
  }
  return oldBoard;
}

const board = [
  [" ", " ", " ", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", "X", " ", " "],
  [" ", " ", " ", " ", " "],
];

const expected1 = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", "X", "X", "X", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
];

console.log(conway(board, 2));

let toad = [
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", "X", "X", "X", " "],
  [" ", "X", "X", "X", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
];

const expectedToad1 = [
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", "X", " ", " "],
  [" ", "X", " ", " ", "X", " "],
  [" ", "X", " ", " ", "X", " "],
  [" ", " ", "X", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
];

const toad2 = [
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", "X", "X", "X", " "],
  [" ", "X", "X", "X", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
];
