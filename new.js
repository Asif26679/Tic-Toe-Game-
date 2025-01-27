  // Let Select all field //

let boxes=document.querySelectorAll('.box');
let resetBbtn=document.querySelector('#reset-btn')
let newGameBtn=document.querySelector('#new-btn')
let msgContainer=document.querySelector('.msg-container')
let msg=document.querySelector('#msg')


let turnO=true;
count=0; 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML="O";
            turnO =false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        if(count>5){
            let winner=checkWinner();  
           if(count===9 && !winner){
            gameDraw();
           } 
        }
        // if(count===9 &&  !winner){
        //     gameDraw();
        // };

    })
})
  // Win Patterns of the Game //

  let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const checkWinner=()=>{
    for(let pattern of winPattern){
        pos1=pattern[0];
        let pos1Val=boxes[pos1].innerHTML;
        pos2=pattern[1];
        let pos2Val=boxes[pos2].innerHTML;
        pos3=pattern[2];
        let pos3Val=boxes[pos3].innerHTML;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos3Val && pos2Val==pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
}
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulation Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes()
}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
newGameBtn.addEventListener("click",()=>{
     enableBox();
     turnO=true;
     count=0;
     msgContainer.classList.add("hide");
})

resetBbtn.addEventListener("click",()=>{
     enableBox();
     turnO=true;
     count=0;
     msgContainer.classList.add("hide");
})

const gameDraw=()=>{
    msg.innerHTML=`Game is Draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}