// 1
// let time = 0;
// const interval = setInterval(() => {
//   time++;
//   alert(time);
//   if (time === 5) {
//     clearInterval(interval);
//   }
// }, 1000);

// 2
const btnColor = document.querySelector('#btnColor');

setInterval(() => {
  const green = Math.round(Math.random() * (255 - 0) + 0);
  const yellow = Math.round(Math.random() * (255 - 0) + 0);
  const red = Math.round(Math.random() * (255 - 0) + 0);
  const randomColor = `rgb(${green}, ${yellow}, ${red})`;
  btnColor.style.backgroundColor = randomColor;

  btnColor.style.color = `rgb(${Math.round(
    Math.random() * (255 - 0) + 0
  )}, ${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(
    Math.random() * (255 - 0) + 0
  )})`;
}, 1000);

const size = document.querySelector('#textSize');
const minSize = 10;
const maxSize = 40;

setInterval(() => {
  const randomSize = Math.round(Math.random() * (maxSize - minSize) + 1);
  size.style.fontSize = `${randomSize}px`;
}, 1000);

// 3

const scoreElem = document.querySelector('#score');
const buttonElem = document.querySelector('#btnType');

let score = 0;
let time = 10;

const clicks = setInterval(() => {
  time--

  if (time === 0) {
    alert(`Час вийшов! Ваш рахунок: ${score}`);
    clearInterval(clicks);
  }
}, 1000);

buttonElem.addEventListener('click', () => {
  score++;
  scoreElem.textContent = score;
});

// 4

const input = document.querySelector("#inputTime");
const btnStart = document.querySelector("#btnStart");

btnStart.addEventListener("click", () => {
  const seconds = Number(input.value)
  if(seconds > 0) {
    setTimeout(() => {
      alert(`Ваш час пройшов`)
    }, seconds * 1000)
  }
})
