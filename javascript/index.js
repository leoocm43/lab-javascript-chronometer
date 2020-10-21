const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {

  printSeconds()
  printMinutes();
  

}

var fakeTime = 0;
setInterval(()=>{
  fakeTime +=1
}, 2000)

function printMinutes() {
  // setInterval(() => {
  //   if (fakeTime < 600000){
  //     minUni.innerHTML = fakeTime
  //   }else{
  //     // minDec.innerHTML = chronometer.currentTime
  //     // minUni.innerHTML = ''
  //   }
  //   //if(chronometer.currentTime == 600){
  //    //minDec.innerHTML = 0;
  //     //minUni.innerHTML =0;
  //     //printMinutes()
  //   //}
  // }, 1000)
}

function printSeconds() {
  setInterval(() => {
    if (chronometer.currentTime < 10){
      secUni.innerHTML = chronometer.currentTime
    }else{
      secDec.innerHTML = chronometer.currentTime
      secUni.innerHTML = ''
    }
    if(chronometer.currentTime == 60){
      chronometer.currentTime = 0
     secDec.innerHTML = 0;
      secUni.innerHTML =0;
      //printMinutes()
    }
  }, 1000)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

  const $li = document.createElement('li')
  $li.innerText = `Secs: ${chronometer.currentTime}`
  const $splitList = document.querySelector('section ol')
  $splitList.appendChild($li)
  /*
  let splt = document.getElementById("splits")
  let $splitList = document.createElement("li")
  let $splitText = document.createTextNode(splitClick())
  $splitList.appendChild($splitText)
  splt.appendChild($splitList)*/
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerHTML ="STOP"
  btnLeft.setAttribute("class","btn stop")
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML  = "SPLIT"
  btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerHTML  = "START"
  btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML  = "RESET"
  btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerHTML==="START") {
    chronometer.startClick()
    printTime();
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stopClick()
    setStartBtn();
    setResetBtn()
  }


});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.innerHTML==="RESET") {
    chronometer.resetClick()

    clearSplits()
  } else {
    printSplit()
    chronometer.splitClick();
    
  }
});