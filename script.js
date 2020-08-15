function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    var timeFormat = "AM";

    if(hours > 12) {
        hours = hours - 12;
         timeFormat ="PM";
    }

    else if(hours === 0) {
        hours = 12;
         timeFormat = "AM";

    }
   

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let finalTime = `${hours}: ${minutes}: ${seconds} ${timeFormat}`;
    
    document.getElementById('clock').innerText = finalTime;

    setInterval(currentTime, 1000);
}

currentTime();