// tady je místo pro náš program//

// barva odstavce//
function zmenBarvuOdstavce (){
let odstavec = document.querySelector("#odstavec");
odstavec.classList.toggle("stylodstavce");
}

// velikost písma odstavce//

// přehrávač//
let prehravac;
prehravac = document.querySelector (".prehravac");

function zapniHudbu(){
prehravac.play();
}

function vypniHudbu(){
prehravac.pause();
}

function hrajOdZacatku(){
prehravac.currentTime=0;
}

function mute(){
prehravac.volume = 0;
}
    
function upravHlasitost0(){
prehravac.volume = 0.05;
}

function upravHlasitost1(){
prehravac.volume = 1;
}