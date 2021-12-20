const checkBoard = document.querySelector("#checkBoard");
const resetBtn = document.querySelector("#reset");

let myRecodes = [];

const CHALLANGE_KEY = "challange"
function completedToday(event){
    event.target.innerText = "complate!"
    const newComplate = {
        "id" : event.target.id,
        "img" : "happy_smile.png",
        "text" : "complate!"
    } 
    myRecodes.push(newComplate);
    // save to localStorage
    localStorage.setItem(CHALLANGE_KEY,JSON.stringify(myRecodes));

}

const savedRecodes = localStorage.getItem(CHALLANGE_KEY);
if(savedRecodes !== null){
    myRecodes = JSON.parse(savedRecodes);
}

for (const x of Array(30).keys()) {
    const button = document.createElement("button");
    const num = x+1;
    const day_num = "day"+num;
    button.className="item"
    button.innerText = day_num;
    button.id = day_num;
    if(myRecodes !== null) {
        const found = myRecodes.find(element => element.id === day_num);

        if(found !== undefined){
            button.innerText = found.text;
            button.id = day_num; 
        } 
    }
    button.addEventListener("click",completedToday);
    checkBoard.appendChild(button);
}

function resetChallange(event){
    
    if (confirm("모든 저장된 기록이 사라져요. 계속할까요?") == true) {
        localStorage.removeItem(CHALLANGE_KEY);
        location.reload();
    } else {
        return;
    }
 
}
resetBtn.addEventListener("click",resetChallange);


 