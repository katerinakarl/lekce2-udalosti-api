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

function hrajOdZacatk(){
prehravac.currentTime = 0;
}

function mute (){
prehravac.mute();
}
  
    
function pridejHlasitost (){
prehravac.volume(0.5);
}

let tlacitko = document.querySelector(".play");
.addEventListener "click", zavolejUdalost(event)

function zavolejUdalost (udalost) {
    let prvek = udalost.target;
    prvektext.log(udalost)
    console.log(udalost)