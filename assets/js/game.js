//Game States
// "WIN" - player robot has defated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100; 
var playerAttack = 10; 
var playerMoney = 10; 

// you can also log multiple values at one like this
console.log(playerName, playerHealth, playerAttack); 

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50; 
var enemyAttack = 12; 



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
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}