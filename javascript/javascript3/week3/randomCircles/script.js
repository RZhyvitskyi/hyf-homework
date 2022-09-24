const canvas = document.getElementById('canvas');
const randomCirclesBtn = document.getElementById('random-circles');
const aroundMouseCirclesBtn = document.getElementById('around-mouse-circles');
const clearAllBtn = document.getElementById('clear-all');

const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    ctx.fill();
  }
}

let interval;

// Create random circles on the page ---------------------------------------------------

const renderRandomCircle = () => {
  const randomX = Math.floor(Math.random() * width);
  const randomY = Math.floor(Math.random() * height);
  const randomR = Math.floor(Math.random() * 100); // I don't want to have many huge circles
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const circle = new Circle(
    randomX,
    randomY,
    randomR,
    0,
    2 * Math.PI,
    `#${randomColor}`
  );

  circle.draw(ctx);
};

const renderRandomCirclesWithInterval = () => {
  let cycleCounter = 0;

  aroundMouseCirclesBtn.classList.remove('active');
  randomCirclesBtn.classList.add('active');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clearInterval(interval);

  interval = setInterval(() => {
    if (cycleCounter > 1000) {
      clearInterval(interval);
    } else {
      renderRandomCircle();
      cycleCounter++;
    }
  }, 100);
};

randomCirclesBtn.addEventListener('click', renderRandomCirclesWithInterval);

// Create circles around the cursor ------------------------------------------------------

const renderCirclesAroundMouse = () => {
  let mouseX;
  let mouseY;
  let cycleCounter = 0;

  aroundMouseCirclesBtn.classList.add('active');
  randomCirclesBtn.classList.remove('active');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clearInterval(interval);

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  interval = setInterval(() => {
    const randomR = Math.floor(Math.random() * 100);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    if (cycleCounter > 1000) {
      clearInterval(interval);
    } else {
      const circle = new Circle(
        mouseX,
        mouseY,
        randomR,
        0,
        2 * Math.PI,
        `#${randomColor}`
      );

      circle.draw(ctx);
      cycleCounter++;
    }
  }, 200);
};

aroundMouseCirclesBtn.addEventListener('click', renderCirclesAroundMouse);

// Clear all functionality -----------------------------------------------------------

clearAllBtn.addEventListener('click', () => {
  randomCirclesBtn.classList.remove('active');
  aroundMouseCirclesBtn.classList.remove('active');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clearInterval(interval);
});
