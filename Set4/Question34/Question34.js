const ball = document.getElementById("ball");

const button = document.getElementById("start");
button.addEventListener("click", ballMoves);

let pos = 0;
let counter = 0;
let id = null;

function ballMoves() {
  id = setInterval(frame, 5);

  function frame() {
    if (pos <= 349) {
      let forwardPos = pos + counter;
      pos++;
      ball.style.top = forwardPos + "px";
      if (pos == 349) {
        console.log("stop");
        clearInterval(id);
      }
    }
    if (pos == 349) {
      console.log(pos);
      clearInterval(id);
      counter += 40;
      id = setInterval(() => {
        pos--;
        ball.style.top = pos + "px";
        if (pos == counter) {
          clearInterval(id);
          ballMoves();
        }
      }, 5);
    }
  }
}

// function bouncingBall(initialHeight) {
//   for (let i = initialHeight; i > 0; i--) {
//     console.log(i);
//   }
// }

// bouncingBall(10);
