let button = document.querySelector("#checker2");
let rightAnswers = [
  "16",
  "600",
  "1800",
  "84777",
  "125240",
  "5",
  "30",
  "180",
  "9",
  "130",
];

button.addEventListener("click", function () {
  let inputs = document.querySelectorAll("#task_area input");

  let i = 0;
  for (let input of inputs) {
    if (input.value == rightAnswers[i]) {
      input.classList.add("correct");
    } else {
      input.classList.add("incorrect");
    }
    i++;
  }
});
