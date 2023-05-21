// Tic-Tac-Toe Game Function
function playTicTacToe() {
    let currentPlayer = "X";
    let board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
  
    // Function to switch players
    function switchPlayer() {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  
    // Function to display the current board
    function displayBoard() {
      console.log(board[0].join(" | "));
      console.log("---------");
      console.log(board[1].join(" | "));
      console.log("---------");
      console.log(board[2].join(" | "));
    }
  
    // Function to check if a player has won
    function checkWin(player) {
      // Check rows
      for (let row = 0; row < 3; row++) {
        if (
          board[row][0] === player &&
          board[row][1] === player &&
          board[row][2] === player
        ) {
          return true;
        }
      }
  
      // Check columns
      for (let col = 0; col < 3; col++) {
        if (
          board[0][col] === player &&
          board[1][col] === player &&
          board[2][col] === player
        ) {
          return true;
        }
      }
  
      // Check diagonals
      if (
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)
      ) {
        return true;
      }
  
      return false;
    }
  
    // Function to play the game
    function play(row, col) {
      // Check if the cell is already occupied
      if (board[row][col] !== "") {
        console.log("Cell already occupied. Please choose another cell.");
        return;
      }
  
      // Place the player's mark on the board
      board[row][col] = currentPlayer;
  
      // Display the updated board
      displayBoard();
  
      // Check if the current player has won
      if (checkWin(currentPlayer)) {
        console.log("Player " + currentPlayer + " wins!");
        return;
      }
  
      // Switch to the next player
      switchPlayer();
    }
  
    // Display the initial board
    displayBoard();
  
    // Return an object with the play function
    return {
      play: play
    };
  }
  
  // Example usage:
  const game = playTicTacToe();
  game.play(0, 0); // X plays at (0, 0)
  game.play(1, 1); // O plays at (1, 1)
  game.play(0, 1); // X plays at (0, 1)
  // Continue playing until there is a winner or the game ends
  