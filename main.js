// tady je místo pro náš program//

// barva odstavce//
function zmenBarvuOdstavce (){
let odstavec = document.querySelector("#odstavec");
odstavec.classList.toggle("stylodstavce");
}

// velikost písma odstavce//
function zmenVelikostOdstavce() {
let odstavec2 =document.querySelector("#odstavec2");
let fontSize=window.getComputedStyle(odstavec2).getPropertyValue("font-size")
odstavec2.style.fontSize=parseInt(fontSize)+1+'px'
  }

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