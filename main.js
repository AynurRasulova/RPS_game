// const hello=document.querySelector("#hello");
// hello.addEventListener("click",function(){
// alert("click etdiniz")
// })

// const first=document.querySelector("#first");
// first.addEventListener("mouseover",function(){
//     first.innerHTML="sagol";
    
// })
// first.addEventListener("mouseleave",function(){
//     first.innerHTML="salam";
    
// })

// window.addEventListener("keydown", function(e){
   

//    if(e.key === "Enter"){
//     alert("entere basildi")
//    }
//    else{alert("Entere basdana")}
// })

const user=document.querySelector("#user");
const comp=document.querySelector("#comp");
const userScore=document.querySelector("#userScore");
const compScore=document.querySelector("#compScore");

let userCount = 0
let compCount = 0
const arr = ["r", "p", "s"]

function randomChoice(){
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

window.addEventListener("keydown", function(e){
 let userChoice=e.key;
let compChoice = randomChoice()

if(!arr.includes(userChoice)){
    alert("Siz yalniz R P S herflerine klik edebilersiniz!")
}
else {
user.innerHTML=userChoice
comp.innerHTML = compChoice

if(userChoice==="r" && compChoice==="s"){
    alert("You win")
    userCount++
    userScore.innerHTML = userCount
}
//^ second version 
else if(userChoice==="r" && compChoice==="p"){
    alert("You are looser")
    compCount++
    compScore.innerHTML= compCount
}
// ^ third version
else if(userChoice==="s" && compChoice==="r"){
    alert("You are looser")
    compCount++
    compScore.innerHTML=compCount
}
// ^fourth version
else if(userChoice==="p" && compChoice==="r"){
    alert("You win")
    userCount++
    userScore.innerHTML=userCount
}
// ^fifth version
else if(userChoice==="r" && compChoice==="s"){
    alert("You win")
    userCount++
    userScore.innerHTML=userCount
}
// ^sixth version
else if(userChoice==="p" && compChoice==="s"){
    alert("You are looser")
    compCount++
    compScore.innerHTML=compCount
}
// ^seventh version
else if(userChoice==="s" && compChoice==="p"){
    alert("You win")
    userCount++
    userScore.innerHTML=userCount
}
// ^last version
else{
    alert("Equal!")
}
}


})


