// Function to start the game
function startGame() {
    // Prompt the player for their name
    let playerName = prompt("What is your name?");
    // Welcome the player
    alert("Welcome, " + playerName + ", to the Haunted All Saints HS!");

    // Ask the player to choose a path
    let choice = prompt("Do you want to go into the (1) library or (2) basement?");
    
    // Call the appropriate function based on the player's choice
    if (choice === "1") {
        library();
    } else if (choice === "2") {
        basement();
    } else {
        alert("Invalid choice! Please refresh the page and try again.");
    }
}

// Function for the library path
function library() {
    // Present the player with a choice
    let choice = prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?");
    
    // Handle the player's choice
    if (choice === "1") {
        alert("A ghost emerges from the book and scares you to death!");
    } else if (choice === "2") {
        alert("You quietly leave the library and find the exit. You survive!");
    } else {
        alert("Invalid choice! The ghost gets you for not choosing!");
    }

    // End the game
    alert("The End. Thanks for playing!");
}

// Function for the basement path
function basement() {
    // Present the player with a choice
    let choice = prompt("You hear strange noises. Do you (1) investigate or (2) run away?");
    
    // Handle the player's choice
    if (choice === "1") {
        alert("You discover a car trunk filled with candy!");
    } else if (choice === "2") {
        alert("You trip and fall... The ghost catches you!");
    } else {
        alert("Invalid choice! The ghost gets you for not choosing!");
    }

    // End the game
    alert("The End. Thanks for playing!");
}

// Start the game
startGame();
