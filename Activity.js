class Activity {
  constructor(categoryType, descriptionText, minutesSpent, secondsSpent, completedTotal) {
    this.category = categoryType;
    this.description = descriptionText;
    this.minutes = minutesSpent;
    this.seconds = secondsSpent;
    this.completed = completedTotal;
    this.id = Date.now();
  }
  startTimer() {
    this.timer = timer;
  }
  markComplete() {
    this.complete = complete;
  }
  saveToStorage() {
    this.storage = storage;
  }
}
