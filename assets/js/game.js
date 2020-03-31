var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 12;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = "50";
var enemyAttack = "12";

var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract playerAttack from enemyHealth, use result to update enemyHealth
    enemyHealth = enemyHealth - playerAttack
    //log resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }
    //Subtract enemyAttack from playerHealth, use result to update playerHealth
    playerHealth = playerHealth - enemyAttack
    //Log resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remainging. "
    );
    // Check player's health
    if(playerHealth <= 0) {
        window.alert(playerName + " has died!")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }
};

fight();