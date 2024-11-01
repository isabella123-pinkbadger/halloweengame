// Function to start the game
function startGame() {
    // Prompt the player for their name
    let playerName = prompt("What is your name?");
    // Welcome the player
    alert("Welcome, " + playerName + ", to the scariest Halloween game of all time!");
    alert("You wake up in a mysterious house. How will you escape?");
    
    // Ask the player to choose a path
    let choice = prompt("Do you want to go into the (1) attic or (2) bedroom or (3) stay where you are?");
    
    // Call the appropriate function based on the player's choice
    if (choice === "1") {
        attic();
    } else if (choice === "2") {
        bedroom();
    } else if (choice === "3") {
        stay();
    } else {
        alert("You do nothing and die of boredom. What a way to go!");
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
        alert("You do nothing and die of boredom. What a way to go!");
    }

    // End the game
    alert("Thanks for playing, Happy Halloween!");
}

// Function for the stay where you are path
function stay() {
    // Present the player with a choice
    let choice = prompt("You turn around a see the front door. How did you miss that earlier? Do you (1) stay where you are, (2) call the police, or (3) leave through the front door.");
    
    // Handle the player's choice
    if (choice === "1") {
        alert("You stay where you are for another 3 days and die of drying to death.");
    } else if (choice === "2") {
        alert("You call the police about a haunted house. They finally arrive and come barging through the front door. When they see your ugly face they yell, 'ZOMBIE!!' and gun you down with machine gun fire.");
    } else if (choice === "3") {
        alert("You choose the most logical choice and just leave the house altogether. Congratualions! You survived.");
    } else {
        alert("You do nothing and die of boredom. What a way to go!");
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
        alert("You do nothing and die of boredom. What a way to go!");
    }

    // End the game
    alert("Thanks for playing, Happy Halloween!");
}

// Start the game
startGame();



