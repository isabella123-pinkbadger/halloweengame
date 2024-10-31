// Function to start the game
function startGame() {
    // Prompt the player for their name
    let playerName = prompt("What is your name?");
    // Welcome the player
    alert("Welcome, " + playerName + ", to the scariest Halloween game of all time!");
    
    // Ask the player to choose a path
    let choice = prompt("Do you want to go into the (1) attic or (2) bedroom?");
    
    // Call the appropriate function based on the player's choice
    if (choice === "1") {
        attic();
    } else if (choice === "2") {
        bedroom();
    } else {
        alert("Invalid choice! Please refresh the page and try again.");
    }
}

