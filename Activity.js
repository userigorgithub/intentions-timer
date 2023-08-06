class Activity {
  constructor(category, description, minutes, seconds, completed) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

  markComplete() {
    this.completed = true;
  }

  beginTimer(minutes, seconds) {
    var timer = setInterval(function() {
      if (seconds > 0) {
        seconds -= 1;
      } else if (minutes > 0) {
        minutes -= 1;
        seconds = 59;
      } else {
        clearInterval(timer);
        timerButton.innerText = "COMPLETE!";
        logCurrentActivity.classList.remove('hidden');
      }
      minutes = minutes.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");
      startTime.innerText = `${minutes}:${seconds}`}, 1000)

  //   if (secs.innerText != 0) {
  //     "0" + secs.innerText--;
  //   } else if (mins.innerText != 0 && secs.innerText == 0) {
  //     secs.innerText = 59;
  //     mins.innerText--;
  //   } else if (mins.innerText && secs.innerText === 0) {
  //     logCurrentActivity.classList.remove('.hidden');
  //   } else if (mins.innerText && secs.innerText == 0) {
  //     clearInterval(upTimer);
  //     timerButton.innerText = "COMPLETE!";
  //     currentActivity = new Activity()
  //     currentActivity.markComplete();
  //     logCurrentActivity.classList.remove('hidden');
  //   }
  }
}
