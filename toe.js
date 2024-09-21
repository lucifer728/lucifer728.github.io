let boxes=document.querySelectorAll(".box");
let turnO=true;
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let reset=document.querySelector("#reset");
let drawmsg=document.querySelector(".msg-draw");
let draw=document.querySelector("#draw");
let winningPatern=[
    [0,1,2],[0,4,8],[0,3,6],[1,4,7],
    [2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        drawgame();
    });
    
})

const checkWinner=()=>{
    for(let pat of winningPatern){
        let p1=boxes[pat[0]].innerText;
        let p2=boxes[pat[1]].innerText;
        let p3=boxes[pat[2]].innerText;
        if(p1!=""&&p2!=""&&p3!=""){
            if(p1===p2&&p2===p3){
                showwinner(p1);
                
            }
        }
    }
    
}
const drawgame=()=>{
    let count=9,c=0;
    for(let box of boxes){
        if(box.innerText==="O"||box.innerText==="X"){
            c++;
        }
    }
    if(c===count){
    drawmsg.classList.remove("hide");
    }
}
const w=showwinner=(win)=>{
    msg.innerText=`Congratulation! You won the Game. ${win}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
        // box.innerText="";
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetbtn=()=>{
    turnO=true;
   enablebox();
    msgcontainer.classList.add("hide");
    drawmsg.classList.add("hide");
}
reset.addEventListener("click",resetbtn);
newbtn.addEventListener("click",resetbtn);