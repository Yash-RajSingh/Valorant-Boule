// 1-brim, 2-viper, 3-omen, 4-kj, 5-cypher, 6-sova, 7-sage, 8-pheonix, 9-jett, 
// 10-reyna, 11-raze, 12-breach, 13-skye, 14-yoru, 15-astra, 16-kayo, 17-chamber
const agents = [
    {
        name: "Brimstone",
        picture: "./images/agents/01.png"
    },
    {
        name: "Viper",
        picture: "./images/agents/02.png"
    },
    {
        name: "Omen",
        picture: "./images/agents/03.png"
    },
    {
        name: "KillJoy",
        picture: "./images/agents/04.png"
    },
    {
        name: "Cypher",
        picture: "./images/agents/05.png"
    },
    {
        name: "Sova",
        picture: "./images/agents/06.png"
    },
    {
        name: "Sage",
        picture: "./images/agents/07.png"
    },
    {
        name: "Phoenix",
        picture: "./images/agents/08.png"
    },
    {
        name: "Jett",
        picture: "./images/agents/09.png"
    },
    {
        name: "Reyna",
        picture: "./images/agents/10.png"
    },
    {
        name: "Raze",
        picture: "./images/agents/11.png"
    },
    {
        name: "Breach",
        picture: "./images/agents/12.png"
    },
    {
        name: "Skye",
        picture: "./images/agents/13.png"
    },
    {
        name: "Yoru",
        picture: "./images/agents/14.png"
    },
    {
        name: "Astra",
        picture: "./images/agents/15.png"
    },
    {
        name: "KAY/O",
        picture: "./images/agents/16.png"
    },
    {
        name: "Chamber",
        picture: "./images/agents/17.png"
    }
]

const selected = []
const fun = () =>{
    let x = Math.floor((Math.random() * 17) + 1);
    return x;
}

for(i=0; i<=5 ; i++){
    let x = fun();
    if(selected.includes(x)==0)
    {
        selected.push(x);  
    }
    else{
        selected.pop();
    }
    i=selected.length;
    
}

const newlist = [];
for(const a in selected){
    let test = selected[a];
    newlist[a] = agents[test];
}
console.log(newlist)
const body = document.getElementById("container");
const Amsg = document.getElementById("container0");
var audio = new Audio('images/jackpot.mp3');
const agentSelect = () =>{
    audio.play();
    Amsg.innerHTML =`<h2 id="a-msg">Your Agents Are</h2>`;
    body.innerHTML = `
    ${newlist.map(function(newlist){
        return `
        <div class="agentcard">
            <img src="${newlist.picture}" height="300" width="190" class="a-img">
            <h1>${newlist.name}</h1>
            </div>`
    }).join('')}`
    window.location.href = "index.html#container";
}

const active = document.getElementById("btn1");
active.addEventListener('click', () =>{
    agentSelect();
});