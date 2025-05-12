let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("click",function(){
    if(started==false){
        console.log("game started");
        started=true;
        //level=0;
        //gameseq=[];
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    //random btn choose
    gameFlash(randBtn);
    console.log("game sequence",gameSeq);
  
}
function checkAns(currentIdx){
    // console.log("curr level",level);
    // let idx=level-1;
    if(userSeq[currentIdx]===gameSeq[currentIdx]){
        if(userSeq.length===gameSeq.length){
      setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText=`game over! press any key to start ${level}.`;
         document.body.classList.add("game-over");
         setTimeout(()=>{
          document.body.classList.remove("game-over");
         },200);
        reset();
    }
}
function btnPress(){
    // console.log(this);
let btn=this;
userFlash(btn);
 let usercolor=btn.getAttribute("id");
userSeq.push(usercolor);
checkAns(userSeq.length-1);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}
