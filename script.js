let output=document.getElementById('sec');
let startbtn=document.getElementById('start');
let stopbtn=document.getElementById('stop');
let resetbtn=document.getElementById('reset');
console.log(output);
console.log(startbtn);
console.log(stopbtn);
console.log(resetbtn);
sec=30;
function timer(){
    sec-=1
    if (sec<=29){
        output.innerHTML=sec;
    }
    if (sec==0){
        output.innerHTML="0";
        clearInterval(myinterval);
        alert('Time is up!')
    }

}
let myinterval;
start.addEventListener('click',function(){
    clearInterval(myinterval);
    myinterval=setInterval(timer,1000);
})
stop_0.addEventListener('click',function(){
    clearInterval(myinterval);
})
resetbtn.addEventListener('click',function(){
    sec=0
    output.innerHTML='30';
    clearInterval(myinterval);
})