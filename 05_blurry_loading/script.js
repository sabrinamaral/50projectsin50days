const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
const interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 15, 0)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
