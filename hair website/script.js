const star = document.getElementById('star');
let direction = -1;
let position = 0;
let velocity = 3;
let gravity = 0.1;

function jump() {
  position += velocity * direction;
  velocity -= gravity;

  if (position <= 0) {
    position = 0;
    velocity = 3;
  }

  star.style.bottom = `${position}px`;
  requestAnimationFrame(jump);
}

jump();
