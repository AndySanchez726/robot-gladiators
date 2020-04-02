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
            if(playerHealth > 0) {
                window.alert("Welcome to Robot Gladiators! Round" + ( i + 1 ));
            } else {
                window.alert("You have lost your robot in battle! Game Over!");
            }
        
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};
// start the game when the page loads


var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great jobm you've sruvived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.")
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
startGame();