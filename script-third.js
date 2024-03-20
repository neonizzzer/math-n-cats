let button = document.querySelector("#checker3");
let rightAnswers = [
  "25",
  "28",
  "117",
  "486",
  "48",
  "121",
  "160",
  "840",
  "333",
  "192",
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
