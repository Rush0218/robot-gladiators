//Game States
// "WIN" - player robot has defated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100; 
var playerAttack = 10; 
var playerMoney = 10; 

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50; 
var enemyAttack = 12; 

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


//Fight function
var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
         //ask player if they would like to fight or quit
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
 
        //if playe rpicks "skip" confrim and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?")

            //if yes (true) leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!"); 
                playerMoney = playerMoney - 10; 
                console.log("playerMoney", playerMoney);
                break;
            }  
        }
        
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack; 
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");
        
        // Check enemy's health
        if(enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break; 
            } else {
             window.alert(enemyName + " still has " + enemyHealth + " health left.")
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "); 


            //check player's health
            if(playerHealth <= 0) {
                window.alert(playerName + " has died!"); 
                break;
            }
                else {
                    window.alert(playerName + " still has " + playerHealth + " health left.")
                }

    }
};

        
//Run fight function to start game
var startGame = function() {
    // reset player's stats
    playerHealth = 100; 
    playerAttack = 10; 
    playerMoney = 10; 

    for(var i = 0; i < enemyNames.length; i++) {

        //let playere know what round they are in, remember that arrays stay at 0 so it needs to have 1 added to it
        if (playerHealth > 0) {

            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));

            // pick a new enemy  to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            //reset enemy health
            enemyHealth = 50;

            //pass the pickedEnemyName variable's value into the fight function 
            fight(pickedEnemyName);
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!")
            break;
        }
    }
    //after the loop ends, player is either out of health or enemies to fight, so fun the endGame function
    endGame();
};

var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("The game has now ended. Let's see how you did!");
    }
    
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm ("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};