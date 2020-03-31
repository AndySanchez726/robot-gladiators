var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = "50";
var enemyAttack = "12";


//Game States
//"WIN" - Player robot has defeated allthe enemy robots
//  * Fight all the enemy robots
//  *Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
        //Prompt if the player wants to fight or not
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                //subtract money from player for skipping
                break;
            }
        }

        // Subtract playerAttack from enemyHealth, use result to update enemyHealth
        enemyHealth = enemyHealth - playerAttack
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney = 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Subtract enemyAttack from playerHealth, use result to update playerHealth
        playerHealth = playerHealth - enemyAttack
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remainging."
        );

        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}