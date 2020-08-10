window.onload =function(){
    quesDisplay(0);
}
var questions = [{
    question: "'OS' computer abbreviation usually means ?",
    answer: "Operating System",
    options: [
        "Order of Significance",
        "Open Software",
        "Operating System",
        "Optical Sensor"
    ]
},
{
    question: "Who developed Yahoo?",
    answer: "David Filo and Jerry Yang",
    options: [
        "Dennis Ritchie and Ken Thompson",
        "David Filo and Jerry Yang",
        "Vint Cerf and Robert Kahn",
        "Steve Case and Jeff Bezos"
    ]
},
{
    question: "What does VVVF stand for?",
    answer: "Variable Voltage Variable Frequency",
    options: [
        "Variant Voltage Vile Frequency",
        "Variable Velocity Variable Fun",
        "Very Very Vicious Frequency",
        "Variable Voltage Variable Frequency"
    ]
},
{
    question: "What does the term PLC stand for?",
    answer: "Programmable Logic Controller",
    options: [
        "Programmable Lift Computer",
        "Program List Control",
        "Programmable Logic Controller",
        "Piezo Lamp Connector"
    ]
},
{
    question: "What does the term PLC stand for?",
    answer: "Database",
    options: [
        "Database",
        "Double Byte",
        "Data Block",
        "Driver Boot"
    ]
},
{
    question: "Thank You For Submission",
    answer:null,
    options: []
}
]
var scorebar=document.getElementById("scorebar");
var scorebar1=document.getElementById("scorebar1");
var scorebar0=document.getElementById("scorebar0");
var btn1=document.getElementById("btn1");
var ulid=document.getElementById("main1");
btn1.disabled=true;
var counterQuest=0;
var score = 0;
function next(){
    let user_answer = document.querySelector('li.colorclass').innerHTML;
    if (user_answer == questions[counterQuest].answer) {
        score ++;
        
    } else {
        score += 0;

    }
    counterQuest++;
    quesDisplay(counterQuest)  
    if(counterQuest==questions.length-1){
        pointss(counterQuest)
        btn1.style.display="none";
        ulid.style.display="none";
    }
}
function done(){
    var inp=document.getElementById("inputf");
    var setname=inp.value;
    
    if(setname=="" ||setname==" "||setname=="  "){
        alert("Please Write Your Name")
    }
    else{
        scorebar.innerHTML=`<h1>Welcome ${setname}</h1>`
        btn1.disabled=false;
    }
}
function pointss(a){
    if(score==5){
        scorebar0.innerHTML=`<h2>Excellant</h2><i class="fas fa-trophy fa-2x"></i>`
    }
    else if(score==4){
        scorebar0.innerHTML=`<h2>Good</h2><i class="far fa-thumbs-up fa-2x"></i>`
    }
    else if(score==3){
        scorebar0.innerHTML=`<h2>Not Bad</h2><i class="fas fa-brain fa-2x"></i>`
    }
    else if(score==2){
        scorebar0.innerHTML=`<h2>You Can Improve</h2><i class="fas fa-industry fa-2x"></i>`
    }
    else if(score==1){
        scorebar0.innerHTML=`<h2>Failed</h2><i class="fas fa-lock fa-2x"></i>`
    }
    
    scorebar1.innerHTML=`<h2>Your Score is ${score}</h2>`
}
function quesDisplay(a){
    var main=document.getElementById("main");
   main.innerHTML=`<h1>${questions[a].question}</h1>`
   var main1=document.getElementById("main1");
   main1.innerHTML=`<ul id="ulid" class="list">
                            <li class="opt animate__animated animate__zoomIn">${questions[a].options[0]}</li>
                            <li class="opt animate__animated animate__zoomIn">${questions[a].options[1]}</li>
                            <li class="opt animate__animated animate__zoomIn">${questions[a].options[2]}</li>
                            <li class="opt animate__animated animate__zoomIn">${questions[a].options[3]}</li>
                        </ul>`
                        clickFunc()
}
function clickFunc(){
    let Q = document.querySelectorAll("li.opt")
    for (let i = 0; i < Q.length; i++) {
        Q[i].onclick = function () {
            for (let j = 0; j < Q.length; j++) {
                if (Q[j].classList.contains("colorclass")) {
                    Q[j].classList.remove("colorclass")
                }
            }
            Q[i].classList.add('colorclass')
        }
    }
}
