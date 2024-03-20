let button = document.querySelector("#checker4");
let rightAnswers = [
  "3000",
  "10",
  "180",
  "5",
  "105",
  "4320",
  "215000",
  "210",
  "25",
  "336",
];
let score = 0;

button.addEventListener("click", function () {
  let inputs = document.querySelectorAll("#task_area input");

  let i = 0;
  for (let input of inputs) {
    if (input.value == rightAnswers[i]) {
      input.classList.add("correct");
      score++;
    } else {
      input.classList.add("incorrect");
    }
    i++;
  }
});
