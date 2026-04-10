const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const inc10Button = document.getElementById("increase10");
const dec10Button = document.getElementById("decrease10");

let count = 0;
number.textContent = count;

// 1씩 증가
function increaseCount() {
  count++;
  number.textContent = count;
}

// 1씩 감소
function decreaseCount() {
  count--;
  number.textContent = count;
}

function resetCount() {
  count = 0;
  number.textContent = count;
}

function tencrease() {
  count += 10;
  number.textContent = count;
}

function detencrease() {
  count -= 10;
  number.textContent = count;
}

incButton.addEventListener("click", increaseCount);
decButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);
inc10Button.addEventListener("click", tencrease);
dec10Button.addEventListener("click", detencrease);
