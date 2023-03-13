const circles = document.querySelectorAll(".progress-steps");
const line = document.getElementById("progress-line");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentStep = 1;
next.addEventListener("click", () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const active = document.querySelectorAll(".active");
  line.style.width = `${((active.length - 1) / (circles.length - 1)) * 100}%`;
  if (currentStep <= 1) {
    prev.disabled = true;
  } else if (currentStep > circles.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
