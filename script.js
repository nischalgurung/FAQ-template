const buttons = document.querySelectorAll(".faq button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    button.parentNode.classList.toggle("active");
  });
});
