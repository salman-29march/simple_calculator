
(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      if (value === "=") {
        try {
          screen.value = eval(screen.value);
        } catch (error) {
          screen.value = "Error";
        }
      } else if (value === "C") {
        screen.value = "";
      } else {
        screen.value += value;
      }
    });
  });
})();
