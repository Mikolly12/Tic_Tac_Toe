let boxes = document.querySelectorAll(".box");
let res = document.querySelector("#reset");
let newBtn = document.querySelector(".new-game");
let msg = document.querySelector("#msg");
let msgCon = document.querySelector(".msg-box");
let c = 0;
let turn0 = true;
let patterns = [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0)
        {
            box.innerText = "O";
            turn0 = false;
            box.style.backgroundColor = "#f9e900";
            c++;
        }
        else{
            box.innerText = "X";
            turn0 = true;
            box.style.backgroundColor = "#ed33b9";
            c++;
        }

        box.disabled = true;
        checkWinner();
    });
});

const newgame = () =>{
    turn0 = true;
    enableBoxes();
    msgCon.classList.add("hide");
    c =0;

};

const disableBoxes =() =>{
    for(let box of boxes)
    box.disabled = true;
    
}

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "#ffffff";
    }
    
}
const showWinner = (rel) =>{
    msg.innerHTML = `!! Winner is ${rel} !!`;
    msgCon.classList.remove("hide");
    res.classList.add("hide");
    c =0;
    disableBoxes();
};

const showDraw = () =>{
    msg.innerHTML = `!! Game is Draw !!`;
    msgCon.classList.remove("hide");
    res.classList.add("hide");
    c =0;
    disableBoxes();
};

const checkWinner =  () => {

    for(let pattern of patterns)
    {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
       // console.log(p1 ,p2,p3);
        if(p1 != "" && p2 !="" && p3!= ""){
       if(p1 === p2 && p2 === p3)
       {
        showWinner(p1);
       }
    
    }
        if(c===9)
        showDraw();
    }
}

res.addEventListener("click" , newgame);
newBtn.addEventListener("click" , () =>
{
    newgame();
    res.classList.remove("hide");
});