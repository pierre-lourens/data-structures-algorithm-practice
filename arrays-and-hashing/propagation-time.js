/*
'''
Propagate information through a network

A subset of database servers in a grid network received an update that needs to be replicated to the remaining nodes. Nodes can only broadcast updates to their immediate neighbors, north, west, south, and east, each second.

Given an initial state of the nodes with the updated information, determine how many seconds it will take to propagate the update to the entire network.
 

EXAMPLE(S)
If the state of the network at the 0th second is:
[
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]
Then it takes 2 seconds to propagate the information. After the 1st second:
[
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0]
]
After the 2nd second:
[
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]
 

FUNCTION SIGNATURE
function broadcastTime(network) {
def broadcastTime(network: list[list[int]]) -> int:
'''
*/



/* let network1 = [
  [1],
  [0],
  [0],
]
console.log(broadcastTime(network1) == 2) */

let network2 = [
  [0,1,0],
  [0,1,0],
  [0,1,0],
]
console.log(broadcastTime(network2))

/*


[1,1,1], x=> step 1
[1,1,1],
[1,1,1],
[0,1,0]

O(N) + O(N)
O(size of matrix)

- then update each node and proceed to nest round

- dirs [0,-1]
ingredients:
- numSeconds: 0
- countOfNewlyAddedInThisRound: 7
-visitedLen = 10
- visited: [[0,1],[1,1],[2,1], [0,0],[0,2],[1,0],[1,2],[2,0],[2,2],[3,1]] 
                                 ^

source length equivalent to num elements

propagate from each source all at once 

we need at least one starting point
cover mult starting points? 
only travel from our current node if the dest is a 0
*/

function broadcastTime(network) {
  let numSeconds = 0;
  const visited = [];

  let countOfNewlyAddedInPrevRound = 0;

  // get intial sources
  for (let i = 0; i < network.length; i++) {
    for (let j = 0; j < network[i].length; j++) {
      if (network[i][j] === 1) {
        visited.push([i, j]);
        countOfNewlyAddedInPrevRound++;
      }
    }
  }

  const TOTAL_ELEMENTS = network.length * network[0].length;
  const DIRS = [
    [0, -1], // left
    [-1, 0], // up
    [0, 1],  // right
    [1, 0],  // down
  ]

 while (visited.length < TOTAL_ELEMENTS) {
  const visitedLen = visited.length;
  const startIdx = visitedLen - countOfNewlyAddedInPrevRound;

  for (let sourceIdx = startIdx; sourceIdx < visitedLen; sourceIdx++) {
    for (const dir of DIRS) {
      const newRow = visited[sourceIdx][0] + dir[0];
      const newCol= visited[sourceIdx][1] + dir[1];
      const outOfBounds = newRow < 0 || newRow > network.length - 1 || newCol < 0 || newCol > network[0].length - 1;
      if (outOfBounds) continue;
      
      const dest = network[newRow][newCol];
      
      if (dest === 0) {
        visited.push([newRow, newCol]);
        network[newRow][newCol] = 1;
        countOfNewlyAddedInPrevRound++;
      }
    }
  }
  numSeconds++;
 }

  return numSeconds;
}

// console.log(broadcastTime(network2) == 2)

let network3 = [
  [0,0,0],
  [0,0,0],
  [0,1,0],
] 
console.log(broadcastTime(network3) == 3)

let network4 = [
  [1,0,1],
  [0,0,0],
  [0,1,0],
]
console.log(broadcastTime(network4) == 1)

let network5 = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
]
console.log(broadcastTime(network5) == 4)

let network6 = [
  [0,0,0,0,0],
  [0,1,0,1,0],
  [0,0,0,0,0],
  [0,1,0,1,0],
  [0,0,0,0,0]
]
console.log(broadcastTime(network6) == 2)

let network7 = [
  [1,0,0,0,1],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,1]
]
console.log(broadcastTime(network7) == 4)

let network8 = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
  [1,0,0],
]
console.log(broadcastTime(network8) == 5) 