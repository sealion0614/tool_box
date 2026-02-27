var seconds_input=document.getElementById("seconds-input");
let countdown=0;
let display_countdown="";
var timerId;
let isPaused=false;
let lastnum=0;

start_timer=()=>{
    isPaused=false;
    console.log(isPaused);
    if(countdown==0){
        console.log("normal start");
        var num=seconds_input.value;
        lastnum=num;
    if(num<=0){
        alert("unvailable");
        document.getElementById(`seconds-input`).value='';
    }
    else{
        countdown=num;
        display_countdown_handler();
        document.getElementById("countdown-display").innerHTML=`<p>${display_countdown}</p>`
        clearInterval(timerId);
        timerId=setInterval(display_timer,1000);
        document.getElementById(`seconds-input`).value='';
    }
    }
    else{
        console.log("paused then started");
        display_countdown_handler();
        document.getElementById("countdown-display").innerHTML=`<p>${display_countdown}</p>`
        clearInterval(timerId);
        timerId=setInterval(display_timer,1000);
    }
    

}
display_timer=()=>{
    countdown--;
    display_countdown_handler();
    if(countdown<=0){
        clearInterval(timerId);
        countdown=0;
        document.getElementById("countdown-display").innerHTML=`<p>time's up</p>`;
    }
    else{
        document.getElementById("countdown-display").innerHTML=`<p>${display_countdown}</p>`;
    }
}
display_countdown_handler=()=>{
    let hour=0;
    let minute=0;
    let second=0;
    if(countdown>=3600){
        hour=Math.floor(countdown/3600);
        minute=Math.floor((countdown-(hour*3600))/60);
        second=(countdown-(hour*3600)-(minute*60));
    }
    else if(countdown>=60){
        minute=Math.floor(countdown/60);
        second=(countdown-(minute*60));
    }
    else{
        second=countdown;
    }

    if(hour>=10){
        if(minute>=10){
            if(second>=10){
                console.log(`${hour}:${minute}:${second}`)
                display_countdown=`${hour}:${minute}:${second}`;
            }
            else{
                console.log(`${hour}:${minute}:0${second}`)
                display_countdown=`${hour}:${minute}:0${second}`;
            }
        }
        else{
            if(second>=10){
                console.log(`${hour}:0${minute}:${second}`)
                display_countdown=`${hour}:0${minute}:${second}`;
            }
            else{
                console.log(`${hour}:0${minute}:0${second}`)
                display_countdown=`${hour}:0${minute}:0${second}`;
            }
        }
    }
    else if(minute>=10){
         if(second>=10){
                console.log(`0${hour}:${minute}:${second}`)
                display_countdown=`0${hour}:${minute}:${second}`;
            }
            else{
                console.log(`0${hour}:${minute}:0${second}`)
                display_countdown=`0${hour}:0${minute}:0${second}`;
            }
    }
    else if(second>=10){
        console.log(`0${hour}:0${minute}:${second}`);
        display_countdown=`0${hour}:0${minute}:${second}`;
    }
    else{
        console.log(`0${hour}:0${minute}:0${second}`);
        display_countdown=`0${hour}:0${minute}:0${second}`;
    }
}
pause_timer=()=>{
    if(countdown<=0){
        alert("you dare try to pause when not starting?")
    }
    else{
        isPaused=true;
        clearInterval(timerId);
        console.log("paused");
        console.log(isPaused);
    }
}
reset_timer=()=>{
    clearInterval(timerId);
    if(lastnum!=0){
    countdown=lastnum;
    display_countdown_handler();
    document.getElementById("countdown-display").innerHTML=`<p>${display_countdown}</p>`
    timerId=setInterval(display_timer,1000);
    }
    
}
document.getElementById("start-countdown").addEventListener("click",start_timer);
document.getElementById("pause-countdown").addEventListener("click",pause_timer);
document.getElementById("reset-countdown").addEventListener("click",reset_timer);