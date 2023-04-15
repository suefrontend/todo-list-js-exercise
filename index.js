const newTask = function (title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    markedCompleted: function () {
      this.complete = true;
    },
  };
  return task;
};

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markedCompleted();
task1.logState();
