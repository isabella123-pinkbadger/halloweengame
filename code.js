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

// Function for the attic path
function attic() {
    // Present the player with a choice
    let choice = prompt("You see a dusty old board game with a spooky green light flashing. Do you (1) play it or (2) throw it away?");
    
    // Handle the player's choice
    if (choice === "1") {
        alert("You get sucked into the game and try to survive!");
    } else if (choice === "2") {
        alert("Bad Karma for the rest of your life!");
    } else {
        alert("Invalid choice! The ghost gets you for not choosing!");
    }

    // End the game
    alert("The End. Thanks for playing!");
}



