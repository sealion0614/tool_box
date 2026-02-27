let countup=0;
let display_countup="";
var swId;
let swPaused=false;
start_sw=()=>{
    swPaused=false;
    console.log(swPaused);
    if(countup==0){
        console.log("normal start");
        display_countup_handler();
        document.getElementById("stopwatch-display").innerHTML=`<p>${display_countup}</p>`
        clearInterval(swId);
        swId=setInterval(display_sw,1000);
    }
    else{
        console.log("paused then started");
        display_countup_handler();
        document.getElementById("stopwatch-display").innerHTML=`<p>${display_countup}</p>`
        clearInterval(swId);
        swId=setInterval(display_sw,1000);
    }
    

}
display_sw=()=>{
    countup++;
    display_countup_handler();
    document.getElementById("stopwatch-display").innerHTML=`<p>${display_countup}</p>`;
}
display_countup_handler=()=>{
    let hour=0;
    let minute=0;
    let second=0;
    if(countup>=3600){
        hour=Math.floor(countup/3600);
        minute=Math.floor((countup-(hour*3600))/60);
        second=(countup-(hour*3600)-(minute*60));
    }
    else if(countup>=60){
        minute=Math.floor(countup/60);
        second=(countup-(minute*60));
    }
    else{
        second=countup;
    }

    if(hour>=10){
        if(minute>=10){
            if(second>=10){
                console.log(`${hour}:${minute}:${second}`)
                display_countup=`${hour}:${minute}:${second}`;
            }
            else{
                console.log(`${hour}:${minute}:0${second}`)
                display_countup=`${hour}:${minute}:0${second}`;
            }
        }
        else{
            if(second>=10){
                console.log(`${hour}:0${minute}:${second}`)
                display_countup=`${hour}:0${minute}:${second}`;
            }
            else{
                console.log(`${hour}:0${minute}:0${second}`)
                display_countup=`${hour}:0${minute}:0${second}`;
            }
        }
    }
    else if(minute>=10){
         if(second>=10){
                console.log(`0${hour}:${minute}:${second}`)
                display_countup=`0${hour}:${minute}:${second}`;
            }
            else{
                console.log(`0${hour}:${minute}:0${second}`)
                display_countup=`0${hour}:0${minute}:0${second}`;
            }
    }
    else if(second>=10){
        console.log(`0${hour}:0${minute}:${second}`);
        display_countup=`0${hour}:0${minute}:${second}`;
    }
    else{
        console.log(`0${hour}:0${minute}:0${second}`);
        display_countup=`0${hour}:0${minute}:0${second}`;
    }
}
pause_sw=()=>{
    if(countup==0){
        alert("you dare try to pause when not starting?")
    }
    else{
        swPaused=true;
        clearInterval(swId);
        console.log("paused");
        console.log(swPaused);
    }
}
reset_sw=()=>{
    clearInterval(swId);
    countup=0;
    display_countup_handler();
    document.getElementById("stopwatch-display").innerHTML=`<p>${display_countup}</p>`
}
document.getElementById("sw-start").addEventListener("click",start_sw);
document.getElementById("sw-pause").addEventListener("click",pause_sw);
document.getElementById("sw-reset").addEventListener("click",reset_sw);