function setAlarm(secs){
    let hours = document.getElementById("hou").value 
    let minutes = document.getElementById("min").value 
    let seconds = document.getElementById("sec").value
    document.getElementById("text").innerHTML = "Alarm set for "+ hours + " hours " + minutes + " minutes and " + seconds + " seconds"
    
   let tim = setTimeout(function(){
      let audio = document.getElementById("alarmAudio")
     audio.play();
    },secs)
    let stop = document.getElementById("stop")
    stop.addEventListener("click", function(){
      clearTimeout(tim)
      document.getElementById("text").innerHTML = "Alarm Stopped"
    })
    return tim
  }
  
   
    
    
  let set = document.getElementById("set");
  set.addEventListener("click", function(){
    setAlarm(document.getElementById("hou").value*60*60*1000 + document.getElementById("min").value*60*1000 + document.getElementById("sec").value*1000)
  })
  
  setInterval(function() {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    document.getElementById('hour').innerHTML = h + ":" + m + ":" + s 
  },1000)