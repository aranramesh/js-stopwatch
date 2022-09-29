var seconds = 00;
var tens = 00;

let appendtens = document.getElementById("tens");
let appendseconds = document.getElementById("seconds");

let buttonstart = document.getElementById("button-start");
let buttonstop = document.getElementById("button-stop");
let buttonreset = document.getElementById("button-reset");

let interval ; // store the value

// next function

  function start(){
   tens++;
  
    if(tens < 9){
        appendtens.innerHTML ="0" + tens ;
    }
    if(tens > 9){
        appendtens.innerHTML = tens ;
    }
    if(tens > 99 ){
        seconds++;
        appendseconds.innerHTML = "0" + seconds;
        tens = 0 ;
        appendtens.innerHTML ="0" + 0 ;
    }
    if (seconds > 9 ){
        appendseconds.innerHTML = seconds ;
    }
  }

buttonstart.onclick = function () {
    interval = setInterval(start);
};
buttonstop.onclick = function () {
    clearInterval(interval);
};

