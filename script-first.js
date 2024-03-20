let button = document.querySelector("#checker");
let rightAnswers = [
  "22",
  "60",
  "121",
  "203",
  "910",
  "8",
  "20",
  "113",
  "109",
  "309",
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
