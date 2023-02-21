
const sentences = ["THE MAN JUMPED OVER THE PRAYER","THE CHAIR PONDERS NEAR THE BENCH"]

var word_time = 400
var ret_time = 10*1000
var rec_time = 10*1000
var words = []
var interval = 31
var w_to_show = 0
var audio = new Audio('notification.mp3');
var started = false


for(let i=0; i < sentences.length; i++){
    var s = sentences[i].split(" ")
    for(let j= 0; j < s.length; j++){
       words.push(s[j])
    }
}
function endRecall(){
    audio.play();
    document.getElementById("win").style.color = "red"
    document.getElementById("win").innerHTML = "STOP"
}

function initiateRecall(){
    audio.play();
    document.getElementById("win").style.color = "green"
    document.getElementById("win").innerHTML = "RECALL PERIOD"
    setTimeout(endRecall,rec_time)
}

function changeWord(){
    console.log("change")
    if(w_to_show < words.length){
        document.getElementById("win").innerHTML = words[w_to_show]
    }
    else{
        console.log("woof" + interval)
        clearInterval(interval)
        audio.play();
        document.getElementById("win").style.color = "blue"
        document.getElementById("win").innerHTML = "RETENTION PERIOD"
        setTimeout(initiateRecall,ret_time)
    }

    w_to_show++
}






function start(){
    if(!started){
        interval = setInterval(changeWord,word_time)
    }
    started = true
}
