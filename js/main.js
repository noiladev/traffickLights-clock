let elRed = document.querySelector('.red')
let elYellow = document.querySelector('.yellow')
let elGreen = document.querySelector('.green')
let elRedFP = document.querySelector('.red__FP')
let elGreenFP = document.querySelector('.green__FP')

function remRed(){
    elRed.style.backgroundColor = '#fff'
}
function addRed(){
    elRed.style.backgroundColor = 'red'
}
function remYellow(){
    elYellow.style.backgroundColor = '#fff'
}
function addYellow(){
    elYellow.style.backgroundColor = 'yellow'
}
function remGreen(){
    elGreen.style.backgroundColor = '#fff'
}
function addGreen(){
    elGreen.style.backgroundColor = 'green'
}
function remRedFP(){
    elRedFP.style.backgroundColor = '#fff'
}
function addRedFP(){
    elRedFP.style.backgroundColor = 'red'
}
function remGreenFP(){
    elGreenFP.style.backgroundColor = '#fff'
}
function addGreenFP(){
    elGreenFP.style.backgroundColor = 'green'
}
let count = 0
setInterval(() => {
    count = count + 1
    if(count >=1 && count <=2 ){
        addRed()
        addGreenFP()
    }else{
        remRed()
        remRedFP()
    }
    if(count == 3 || count == 6){
        addYellow()
        remRedFP()
        remGreenFP()
    }else{
        remYellow()
    }
    if(count >=4 && count <=5 ){
        addGreen()
        addRedFP()
    }else{
        remGreen()
        remRedFP()
    }
    if(count >=6){
        count = 0
    }
}, 1000);

// TIME
 // TIME 
let elTime = document.querySelector('.time'); 
let elMinut = document.querySelector('.minut'); 
let elSecund = document.querySelector('.secund'); 
 
function rotateMinute() { 
    elMinut.style.transform = 'rotate(6deg)'; 
} 
 
function rotateSecund() { 
    elSecund.style.transform = 'rotate(6deg)'; 
} 
 
let countTime = 0; 
 
setInterval(() => { 
    
    countTime = countTime + 1; 
    
        rotateSecund(); 
    
    if (countTime % 60 == 0) { 
        
        rotateMinute(); 
    } 
    


}, 1000)


// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours() % 12; // Convert to 12-hour format
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     const hourDeg = (hours + minutes / 60) * 360 / 12;
//     const minuteDeg = (minutes + seconds / 60) * 360 / 60;
//     const secondDeg = seconds * 360 / 60;

//     document.getElementById('hourHand').style.transform = `rotate(${hourDeg}deg)`;
//     document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
//     document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
// }

// updateClock()