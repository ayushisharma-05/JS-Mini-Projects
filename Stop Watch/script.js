
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var milli = document.getElementById("milli");

var millicount = 0, seccount = 0, mincount = 0, watch;
start.addEventListener("click", () => {
    watch = true;
    stopwatch();
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("stop").innerHTML = "Stop";
});

reset.addEventListener("click", () => {
    watch = false;
    min.innerHTML = "00" + "&nbsp:&nbsp";
    milli.innerHTML = "00";
    sec.innerHTML = "00" + "&nbsp:&nbsp";
    mincount = 0;
    seccount = 0;
    millicount = 0;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("stop").innerHTML = "Stop";

})

stop.addEventListener("click", () => {
    if (millicount != 0 || seccount != 0 || mincount != 0) {
        document.getElementById("start").innerHTML = "Resume";
        document.getElementById("stop").innerHTML = "Pause";
        watch = false;// stopwatch function har 1 sec bad chal hi rha h bas apanne stop hit kiya to eventlistner ne wacth me false set kdia and stopwatch()ki condition break hui and vo band hoya


    }
})
function stopwatch() {
    if (watch) {
        millicount++;
        if (millicount == 99) {
            seccount++;
            millicount = 0;
        }
        if (seccount == 59) {
            mincount++;
            seccount = 0;
        }
        milli.innerHTML = (millicount < 10 ? "0" + millicount : millicount);
        sec.innerHTML = (seccount < 10 ? "0" + seccount + "&nbsp:&nbsp" : seccount + "&nbsp:&nbsp");
        min.innerHTML = (mincount < 10 ? "0" + mincount + "&nbsp:&nbsp" : mincount + "&nbsp:&nbsp");
    }
    setTimeout(stopwatch, 10)
}


// start.addEventListener("click",()=>{
//     watch=true;
//     stopwatch();
//     document.getElementById("start").innerHTML="Start";
//     document.getElementById("stop").innerHTML="Stop";

// });
// reset.addEventListener("click",()=>{
//     watch=false;
//     min.innerHTML="00"+"&nbsp:&nbsp";
//     sec.innerHTML="00"+"&nbsp:&nbsp";
//     milli.innerHTML="00";
//     millicount=0;
//     mincount=0;
//     seccount=0;
//     document.getElementById("start").innerHTML="Start";
//     document.getElementById("stop").innerHTML="Stop";
// });
// stop.addEventListener("click",()=>{
//     if(millicount!=0|| seccount!=0|| mincount!=0){
//         document.getElementById("start").innerHTML="Resume";
//         document.getElementById("stop").innerHTML="Pause";
//         watch=false;
//     }
// })
// function stopwatch(){
//     if(watch){
//         millicount++;
//         if(millicount==99){
//             seccount++;
//             millicount=0;
//         }
//         if(seccount==59){
//             mincount++;
//             seccount=0;
//         }
//         min.innerHTML = (mincount < 10 ? "0" + mincount : mincount) + "&nbsp;:&nbsp;";
//         sec.innerHTML = (seccount < 10 ? "0" + seccount : seccount) + "&nbsp;:&nbsp;";
//         milli.innerHTML = (millicount < 10 ? "0" + millicount : millicount);
//         setTimeout(stopwatch,10)
//     }
// }
