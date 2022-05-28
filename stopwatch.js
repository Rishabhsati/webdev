var hours=00;
var minutes=00;
var seconds=00;
var tens=00;

var appendhours = document.getElementById("hours");
var appendminutes = document.getElementById("minutes");
var appendseconds = document.getElementById("seconds");
var appendtens = document.getElementById("tens");

var buttonstart = document.getElementById("StartTimer");
var buttonpause = document.getElementById("PauseTimer");
var buttonreset = document.getElementById("ResetTimer");
var interval=00;

function starttimer(){
    tens++;
    if(tens<9){
        appendtens.innerHTML="0"+tens;
    }
    if(tens>9){
        appendtens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        appendseconds.innerHTML="0"+seconds;
        tens=0;
        appendtens.innerHTML="0"+0;
    }
    if(seconds>9){
        appendseconds.innerHTML=seconds;
    }
    if(seconds>60){
        minutes++;
        appendminutes.innerHTML="0"+minutes;
        seconds=0;
        appendseconds.innerHTML="0"+0;
    }
    if(minutes>9){
        appendseconds.innerHTML=minutes;
    }
    if(minutes>60){
        hours++;
        appendhours.innerHTML="0"+hours;
        minutes=0;
        appendminutes.innerHTML="0"+0;
    }
    if(hours>9){
        appendhours.innerHTML=hours;
    }
    if(hours>24){
              
    }
}

buttonstart.onclick=function(){
    interval=setInterval(starttimer);
};

buttonpause.onclick=function(){
    clearInterval(interval);
};

buttonreset.onclick=function(){
    clearInterval(interval);
    tens=00;
    seconds=00;
    minutes=00;
    hours=00;
    appendtens.innerHTML="0" + tens;
    appendseconds.innerHTML="0" + seconds;
    appendminutes.innerHTML="0" + minutes;
    appendhours.innerHTML= "0" + hours;
};