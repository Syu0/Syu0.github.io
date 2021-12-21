const checkBoard = document.querySelector("#checkBoard");
const resetBtn = document.querySelector("#reset");
const challangeForm = document.querySelector("#ChallangeForm");
let myRecodes = [];

const CHALLANGE_KEY = "challange";
const myGoal = challangeForm.querySelector("input");
const CHALLANGE_GOAL = "mygoal";
const STATUS_COMPLATE = "complated";
const STATUS_PROGRESS = "progress";

function setMyGoal(event){
    event.preventDefault();
    printMyGoal(myGoal.value)
    localStorage.setItem(CHALLANGE_GOAL, myGoal.value);
    printGuideText("Recode your progress.")
}

function printMyGoal(text){
    challangeForm.querySelector("h2").innerText = text;    
    myGoal.className = "hidden"
}

function printGuideText(msg){
    challangeForm.querySelector("span:last-child").innerText = msg;
}
challangeForm.addEventListener("submit",setMyGoal);

function complateEffect(){
    const resultSpan = document.querySelector("#guideMessage");
    resultSpan.className = "";
    const buttons = checkBoard.querySelectorAll("button") ;
    buttons.forEach(item=>item.classList.add("complatedEffect"));
}

function completedToday(event){
    // if already complated
    const eventId = parseInt(event.target.id);
    const objIndex = myRecodes.findIndex((obj => obj.id == eventId));
    if (myRecodes[objIndex].status === STATUS_COMPLATE) {
        console.log(myRecodes[objIndex].status);
        return;
    }
    
    const complateBtnInfo = {
        "id" : eventId,
        "status":STATUS_COMPLATE,
        "text" : "v"
    } 
    paintTodayBtn(event.target, complateBtnInfo);

    // update array
    myRecodes[objIndex] = complateBtnInfo;

    if (myRecodes.length < 30){
        const nextBtnInfo = {
            "id" : eventId+1,
            "status": STATUS_PROGRESS,
            "text" : eventId+1
        }
        const newBtn = document.createElement("button");
        newBtn.id=eventId+1;
        newBtn.className="item progress";
        newBtn.addEventListener("click",completedToday);
        checkBoard.appendChild(newBtn);
        paintTodayBtn(newBtn, nextBtnInfo);
    
        myRecodes.push(nextBtnInfo);
    } else {
        complateEffect();
        alert("finally clear!")
    }
    // save to localStorage
    localStorage.setItem(CHALLANGE_KEY,JSON.stringify(myRecodes));

}
function paintTodayBtn(btn, info){
    btn.innerText = info.text;
    btn.classList.add(info.status);
}

const savedRecodes = localStorage.getItem(CHALLANGE_KEY);
if(savedRecodes !== null){
    myRecodes = JSON.parse(savedRecodes);
}

function paintCheckBoard(){
    let breakSignal = false;
    const result = myRecodes.filter(item =>{item.status === STATUS_COMPLATE});
   
    for (const x of Array(30).keys()) {
        const button = document.createElement("button");
        const num = x+1;
        const day_num = num;
        button.id=day_num;
        button.className="item";
        const btnInfo = {
            "id" : day_num,
            "status": STATUS_PROGRESS,
            "text" : day_num
        } 
        if(myRecodes.length !== 0) {
            const found = myRecodes.find(element => element.id === day_num);
    
            if(found !== undefined){
                btnInfo.text = found.text;
                btnInfo.status = found.status;
                paintTodayBtn(button, btnInfo);
                button.addEventListener("click",completedToday);
                checkBoard.appendChild(button);
            } else {
                paintTodayBtn(button, btnInfo);
                button.addEventListener("click",completedToday);
                checkBoard.appendChild(button);
                breakSignal = true;

            }
        }
        else {            
            myRecodes.push(btnInfo);
            paintTodayBtn(button, btnInfo);
            button.addEventListener("click",completedToday);
            checkBoard.appendChild(button);
            breakSignal = true;
        }
        if (breakSignal) {
            return
        }
    }
    if (result.length === 0 && myRecodes.length > 28){ complateEffect(); return;}

}
paintCheckBoard();

function resetChallange(event){
    
    if (confirm("모든 저장된 기록이 사라져요. 계속할까요?") == true) {
        localStorage.removeItem(CHALLANGE_KEY);
        location.reload();
    } else {
        return;
    }
 
}
resetBtn.addEventListener("click",resetChallange);

const savedMyGoal = localStorage.getItem(CHALLANGE_GOAL);

if (savedMyGoal !== null){
    printMyGoal(savedMyGoal);
    printGuideText("you can do anything but you should do this.")
}