alert("WELCOME");
var playertext=document.querySelector("#play");
var comptext=document.querySelector("#comp");
var restext=document.querySelector("#res");
var allbuttonstore=document.querySelectorAll(".user");
let player;
let computer;
let result;

//Main
allbuttonstore.forEach(button=>button.addEventListener("click",()=>{
    player=button.textContent;
    compturn();
    playertext.textContent=`Player:${player}`;
    comptext.textContent=`Computer:${computer}`;
    restext.textContent=`Result:${winner()}`;
}));

//Computer Turn Code:
function compturn(){
    const rdmno=Math.floor(Math.random()*3);
    switch(rdmno){
        case 0:
            computer="Stone";
            break;

        case 1:
            computer="Paper";
            break;

        case 2:
            computer="Scissor";
            break;

    }
};




//Winner Selection:
function winner(){
    if(player==computer)
        return "DRAW";
    else if(player=="Stone"){
        if(computer=="Paper")
        return "YOU LOOSE";
        else    
            return "YOU WIN";
    }
    else if(player=="Paper"){
        if(computer=="Scissor")
        return "YOU LOOSE";
        else    
            return "YOU WIN";
    }
    else if(player=="Scissor"){
        if(computer=="Stone")
        return "YOU LOOSE";
        else    
            return "YOU WIN";
    }
}