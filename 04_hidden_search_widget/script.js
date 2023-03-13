const btn = document.querySelector(".btn");
const searchContainer = document.querySelector(".search");
btn.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
  input.focus();
});
