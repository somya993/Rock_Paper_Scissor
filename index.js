let userscore=0
let compscore=0;

const choices = document.querySelectorAll('.choice')
const msg = document.getElementById('msg')
const userScorePara=document.getElementById('user-score')
const compScorePara=document.getElementById('comp-score')
const genCompChoice = () => {
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerHTML=userscore;
        msg.innerHTML=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerHTML=compscore;
        msg.innerHTML=`You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        msg.innerHTML="Tie. Play Again :)";
        msg.style.backgroundColor="#081b31";
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        if(userChoice==="scissor"){
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}    

choices.forEach((choice) =>{
    choice.addEventListener('click', () => {
        const userChoice=choice.getAttribute('id');
        console.log(userChoice);
        playGame(userChoice);
    })
})