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
    let choice = prompt("You see a dusty old board game with a spooky green light flashing. Do you (1) play it or (2) throw it away or (3) burn it?");
    
    // Handle the player's choice
    if (choice === "1") {
        alert("You get sucked into the game and try to survive!");
    } else if (choice === "2") {
        alert("You throw the board game at the window but it hits the wall and bounces back, impaling your cranium");
    } else if (choice === "3") {
        alert("The ghosts get attracted to the fire and you get slimed!");
    } else {
        alert("Invalid choice! The ghost gets you for not choosing!");
    }

    // End the game
    alert("Thanks for playing, Happy Halloween!");
}

// Function for the bedroom path
function bedroom() {
    // Present the player with a choice
    let choice = prompt("You hear suspenseful noises. Do you (1) investigate or (2) run away or (3) hide in the closet?");
    
    // Handle the player's choice
    if (choice === "1") {
        alert("You discover a hidden treasure full of baked goods!");
    } else if (choice === "2") {
        alert("You run into a lamp, go unconscious, then wake up in a kidnappers basement!");
     } else if (choice === "3") {
        alert("You drop into a pool full of flesh-eating piranhas");
    } else {
        alert("Invalid choice! The ghost gets you for not choosing!");
    }

    // End the game
    alert("Thanks for playing, Happy Halloween!");
}

// Start the game
startGame();



