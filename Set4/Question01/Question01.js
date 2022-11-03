function moveLeft() {
  const square = document.getElementById("square");
  square.addEventListener("click", () => {
    square.animate(movingLeftEffect, duration);
  });
}

const movingLeftEffect = [{ transform: "translateX(0px)" }, { transform: "translateX(-500px)" }];

const duration = { duration: 2000, easing: "ease-in" };

moveLeft();
