var ed=document.getElementById("editor");
var dc=document.getElementById("counter");
var tm=document.getElementById("timer");
var bt=document.getElementById("bt");
var timing = true;
var timer;

var date1, date2;
var delta;

date1 = new Date();

function updateTime (){
	date2 =  new Date();
    delta = date2-date1;
    
	var minutes = Math.floor(delta/60000);
	var seconds = Math.floor((delta/1000) % 60);
	
	tm.innerText = minutes + ":" + seconds;
}

ed.onkeypress= function (e) {
    words = e.target.value.match(/\S+/g);
    
    if(words) 
		wordCount = words.length;
	else
		wordCount = 0;
		
	counter.innerText=wordCount;
}

bt.onclick = function(e) {
    if(timing){
        timing=false;
        date1 = date2;
        clearInterval(timer);
        bt.innerText="Start Timer";
    }
    else {
        timing=true;
        date1 = new Date() - delta;
        timer = setInterval(updateTime, 1000);
        bt.innerText="Stop Timer";
    }
}

timer = setInterval(updateTime, 1000);
