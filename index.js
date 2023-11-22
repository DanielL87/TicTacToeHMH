let player1 = "X";
let player2 = "O";
let turnCount = 0;
let grid = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

document.querySelectorAll(".col").forEach((col) => {
  col.addEventListener("click", handleClick);
});

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid[i][j] = " ";
    }
  }

  document.querySelectorAll(".col").forEach((col) => {
    col.textContent = " ";
  });

  turnCount = 0;
});

function gameOver() {
  for (let i = 0; i < 3; i++) {
    // Check rows
    if (
      grid[i][0] !== " " &&
      grid[i][0] === grid[i][1] &&
      grid[i][0] === grid[i][2]
    ) {
      return grid[i][0];
    }
    // Check columns
    else if (
      grid[0][i] !== " " &&
      grid[0][i] === grid[1][i] &&
      grid[0][i] === grid[2][i]
    ) {
      return grid[0][i];
    }
  }

  // Check diagonals
  if (
    grid[0][0] !== " " &&
    grid[0][0] === grid[1][1] &&
    grid[1][1] === grid[2][2]
  ) {
    return grid[0][0];
  } else if (
    grid[0][2] !== " " &&
    grid[0][2] === grid[1][1] &&
    grid[1][1] === grid[2][0]
  ) {
    return grid[0][2];
  }

  // No winner yet
  return null;
}

function handleClick(event) {
  const rowIndex = +event.target.getAttribute("data-i");
  const colIndex = +event.target.getAttribute("data-j");

  if (grid[rowIndex][colIndex] === " ") {
    const currentPlayer = turnCount % 2 === 0 ? player1 : player2;

    grid[rowIndex][colIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    turnCount++;

    const winner = gameOver();
    if (winner) {
      alert(`Player ${winner} wins! Game Over!`);
    }
  }
}
