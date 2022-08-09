const rangeForm = document.getElementById("rangeForm");
const rangeInput = document.querySelector(".rangeInput");
const chooseForm = document.getElementById("chooseForm");
const chooseInput = document.querySelector(".chooseInput");
const paintRes = document.querySelector(".paintRes");

function handlerRangeInput() {
  const rangeNum = rangeInput.value;
  chooseInput.setAttribute("max", rangeNum);
  console.log(rangeInput.value);
  console.log(rangeNum);
}
rangeForm.addEventListener("input", handlerRangeInput);

function handlerSubmit(event) {
  event.preventDefault();
  const rangeNum = rangeInput.value;
  const chooseNum = chooseInput.value;
  const randomNum = Math.floor(Math.random() * rangeNum + 1);
  paintResult(chooseNum, randomNum);
  // console.log(chooseNum, rangeNum);
  // console.log(randomNum);
  // console.log(typeof chooseNum);
}
chooseForm.addEventListener("submit", handlerSubmit);

function paintResult(chooseNum, randomNum) {
  if (parseInt(chooseNum) > randomNum || parseInt(chooseNum) < randomNum) {
    paintRes.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\n You lost!`;
  } else if (parseInt(chooseNum) === randomNum) {
    paintRes.innerText = `You chose: ${chooseNum}, the machine chose: ${randomNum}\n You Win!`;
  }
}
