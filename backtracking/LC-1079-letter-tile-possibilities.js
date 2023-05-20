/*
LC 1079 - Letter Tile Possibilities

https://leetcode.com/problems/letter-tile-possibilities/description/

this was what came to me initially... though on reflection I could use indices rather than letter counts.

*/
var numTilePossibilities = function (tiles) {
  const counts = tiles.split("").reduce((freqObj, tile) => {
    freqObj[tile] = freqObj[tile] ? freqObj[tile] + 1 : 1;
    return freqObj;
  }, {});
  const uniques = new Set();
  dfs();
  function dfs(path = [], usedCounts = {}) {
    const joined = path.join("");

    if (uniques.has(joined)) {
      return;
    } else if (joined) {
      uniques.add(joined);
    }

    for (const option of tiles) {
      if (counts[option] === usedCounts[option]) continue;

      usedCounts[option] = usedCounts[option] ? usedCounts[option] + 1 : 1;
      path.push(option);
      dfs(path, usedCounts);
      path.pop();
      usedCounts[option] = usedCounts[option] - 1;
    }
  }
  return uniques.size;
};
