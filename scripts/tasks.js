/* tasklist format {
        name: ,
        work:
    }, */

const tasklist = [
    {
        name: "The Wild West",
        work: "All of the player must only use Sheriff for the whole round."
    },
    {
        name: "Spartans",
        work: "All of the players must rush to attack the enemy team but without buying armor."
    },
    {
        name: "Spartans",
        work: "All of the players must rush to attack the enemy team but without buying armor."
    },
    {
        name: "Battle Cry",
        work: `All of the players must continously yell "CHARGE!" throughout the round.`
    },
    {
        name: "Fast as Fluff Boi",
        work: "None of the players must not let go of the W key untill they are dead."
    },
    {
        name: "Conquering Like A Kangaroo kangaroo",
        work: "All of the players must continue to jump while moving and shooting."
    },
    {
        name: "My World is Spinning",
        work: "Everytime you encounter an enemy, you must 360 before you are allowed to shoot them."
    },
    {
        name: "Bodyguards",
        work: "The team must choose one of the players as their king and surround the king like bodyguards. The bodyguards must protect the king and must not let them die."
    },
    {
        name: "Powerless",
        work: "None of the players are allowed to purchase any of their abilities."
    },
    {
        name: "Lurking in the Shadows",
        work: "All of the players must camp at a spot of their choice and are only allowed to kill an enemy from that shadow spot. In case they are spotted by an enemy at a different location, they must rush to their shadow spot and then attack the enemy."
    },
    {
        name: "The Expendables",
        work: "All of the players must lower their health at the start of the round using a player's abilities and then march into battle."
    },
    {
        name: "Knives out",
        work: "All of the players are only allowed to kill an enemy using their knives."
    },
    {
        name: "Simping Season",
        work: "All of the males agents must play while constantly simping for the female agents throughout the round."
    },
    {
        name: "Don't Breath!",
        work: "All of the players must turn their speaker volumes to zero and play the round without any sound."
    },
    {
        name: "Cloud Campers",
        work: "Using Brimstone/Omen's smokes, the team must set smoke clouds at the default entry spots of their location and aren't allowed to exit the smoke cloud untill after they've disappeared."
    }
]




const count = tasklist.length;
const body2 = document.getElementById("container2");
var current =0;
var audio = new Audio('images/process.mp3');
const taskSelect = () =>{
    audio.play();
    var numb = Math.floor((Math.random() * count) + 1);
    if(numb==current){
        numb=numb+1;
    }
    else if(numb==current || numb==count){
        numb=numb-1;
    }
    current = numb;
        const test = tasklist[numb];
            body2.innerHTML = `<div class="taskcard">
            <h1 class="t-msg">"${test.name}"</h1>
            <h1 class="ttask">${test.work}</h1>
            </div>`
            window.location.href = "index.html#container2";
        return current;
}

const active2 = document.getElementById("btn2");
active2.addEventListener('click', () =>{
    taskSelect();
})

