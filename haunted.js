const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  health: 100,
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
  catchphrase : undefined,
};


console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
player.catchphrase = READLINE.question("What is Your catchphrase: ")
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
    console.log(`${player.name} is walking in the house and finds a staircase `);
    let staircase = READLINE.question = ("Do you decide to go up the staircase ?: ")
      if (staircase == "y" || staircase == "yes"){
          player.courage++;
          player.health = - 10;
      }else{

      }

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However... a killer clown forces you back in the house`);
   

}

console.log("Thanks for playing!");
console.log("player.health");
