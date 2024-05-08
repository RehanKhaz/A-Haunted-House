#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
let condition : boolean = true;
// INFORMATION ABOUT THE GAME :~
while(condition){
console.log(
  " \n \t " +
    "Welcome to " +
    chalk.yellow.bold.underline.italic("A HAUNTED HOUSE") +
    " game created by REHAN KHAN"
);
console.log(
  " \n \t \t" + chalk.bold.blue(" <=== BACKGROUND SCENIARIO OF THIS STORY ===> ")
);
console.log(chalk.bgWhite.black.italic`Assume that, you and your best friend are in jungle and here he lost . You are finding him everywhere and he is still missing. All of sudden, you find a house which seems to be a horror like a haunted house. You enter in the house and you find his shoes outside the gate. You become sure that your friend is inside this haunted house. Outside the house, a saint was over there. You tell him your problem , and he says that he can't do anything except explaining the structure of this house. He explains you the structure of this house and now you are on the mission to rescue him even after knowing that you can also die.`)

console.log(
  " \n \t \t" + chalk.bold.blue(" <=== INFORMATION ABOUT THE GAME ===> ")
);
console.log(
  chalk.bgWhite.black.italic(
    "The saint said : 'This house consists of four different rooms. In one room of this house, there is a lion waiting for his dinner. In the second room, there is a CHURAIL, and in the third room, there is the key to the main door through which you can exit from this HOUSE. But the fun fact is that there is another room in this house where your brother is imprisoned by the devil, and you have to free him. Once any one enter in this house then he can't come out without having key. The important thing is that you don't know in which room the key is.'"
  )
);
console.log(" \n");
console.log(chalk.bgYellowBright.black.bold`TASK:` + chalk.rgb(255,165, 0)` You have to find the key and your best Friend to win this game and exit from this Haunted house.`)
let userChoice = await inquirer.prompt({
  name: "door",
  type: "list",
  message: chalk.redBright("Choose the room:"),
  choices: ["Room 'A'", "Room 'B'", "Room 'C'", "Room 'D'"],
});
let rooms = [
  chalk.greenBright("You came into the room of CHURAIL and CHURAIL imprisons you."),
  chalk.greenBright(
    "Unfortunately, you come to the room of Lion and become his meal."
  ),
  chalk.greenBright("You find the key."),
  chalk.greenBright("Congratulations! you find your best friend."),
];
let random = rooms[Math.floor(Math.random() * 4)];

// USING ELSE-IF STATEMENTS:~
if (random === rooms[0] || random === rooms[1]) {
  console.log(random);
  console.log(chalk.rgb(48, 25, 52)`You loss the game.`);
} else if (random === rooms[2]) {
  console.log(random);
  console.log(
    chalk.blueBright`Congratulations! You find the key of the door. Now you've to free your best friend. Go and Find your best Friend.`
  );
  let askAgain = await inquirer.prompt({
    name: "againAsk",
    type: "list",
    message: chalk.yellow`Go to this rooms in order to find your best friend.`,
    choices: ["Room 1", "Room 2", "Room 3"],
  });

  let rooms = [
    "You came into the room of the CHURAIL and now CHURAIL also imprisons you.",
    "Unfortunately , you and your best Friend come to the room of Lion and both become his meal.",
    "Congratulations! you find your best Friend ",
  ];
  let randomRoom = rooms[Math.floor(Math.random() * 3)];
  if (randomRoom === rooms[0] || randomRoom === rooms[1]) {
    console.log(chalk.bgRed.white(randomRoom));
    console.log(chalk.bgWhite.blue`You loss the game.`);
  } else if (randomRoom === rooms[2]) {
    console.log(randomRoom);
    console.log(
      "Congratulations on finding your best friend!. You are truly a courageful person. You makes every single effort to rescue your friend. All the friends showed be like you."
    );
    console.log(
      chalk.bgWhite.blueBright`Now you & your friends are free to go home.`
    );
    console.log(chalk.bgBlueBright.white`Congratulations! You win this game.`);
  }
} else if (random === rooms[3]) {
  console.log(chalk.green(`${random}`))
  console.log(
    chalk
      .rgb(	135, 206, 235)`Congratulations! on finding your bestfriend. Now you have to find the key of main door.`
  );
  let askAgain = await inquirer.prompt({
    name: "againAsk",
    type: "list",
    message: "Go to this rooms in order to find the key.",
    choices: ["Room 1", "Room 2", "Room 3"],
  });

  let rooms = [
    "You went into the room of the CHURAIL and now CHURAIL imprison you as well as your best Friend.",
    "Unfortunately , you and your best friend goes to the room of Lion and become his meal.",
    "You find the key of main door.",
  ];
  let randomRoom2 = rooms[Math.floor(Math.random() * 3)];
  if (randomRoom2 === rooms[0] || randomRoom2 === rooms[1]) {
    console.log(chalk.green.bgWhite(randomRoom2));
    console.log(chalk.bgGreen.white`You loss the game.`);
  } else if (randomRoom2 === rooms[2]) {
    console.log(randomRoom2);

    console.log(
      chalk.rgb(255,165, 0)`Congratulations on finding the key. You are truly a courageful person. You makes every single effort to rescue your friend. All the friends showed be like you."`
    );
    console.log(
      chalk.white.bgGreen`Now you & your friend are free to go home.`
    );
    console.log(chalk.bgBlack.white`You win this game.`);
  }
}
console.log(chalk.	rgb(170, 51, 106)`THANKS! for playing this game.`);

// feedback
let review = await inquirer.prompt({
  name: "feedBack",
  type: "confirm",
  message: chalk.grey`Do you like this game?`,
  default: true,
});
if (review.feedBack === true) {
  console.log(chalk.yellow.italic`Thanks for appreciating me.`);
} else if (review.feedBack === false) {
  console.log(
    chalk.yellow
      .italic`I will work harder to make myself better. Thanks for your feedback.`
  );
}
let askGamer = await inquirer.prompt({
  name:"Again",
  type:"confirm",
  message:"Do you want to play again?",
  default: true,
})
condition = askGamer.Again
}
