var day,hours,minutes,seconds;
function init() {
day=new Date
hours=day.getHours();
minutes=day.getMinutes();
seconds=day.getSeconds();
clock();
};
function clock() {
seconds++;
if(seconds===60){
  seconds=0;
  minutes++
  if(minutes===60){
    minutes=0;
    hours++
    if(hours===24){
      hours=0
    }
  }
}
changeTimeElement('sec',seconds);
changeTimeElement('min',minutes);
changeTimeElement('hr',hours);
setTimeout(clock,1000);
};

function changeTimeElement(id,value){
if(value<10){
  value='0'+value
}
document.getElementById(id).innerHTML=value;
};

window.onload=init;