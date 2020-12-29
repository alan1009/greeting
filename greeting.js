const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text); 
}
     
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
} 

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//로컬스토리지에서 값을 가져오는 함수
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){// 로컬유저 없는 경우
        askForName();
    }
    else{//로컬유저 있는 경우
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
    saveName();
}
init();