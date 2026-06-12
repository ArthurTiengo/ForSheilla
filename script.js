let highestZ = 1;

document.querySelectorAll(".paper").forEach((paper) => {

  let isDragging = false;
  let startX = 0;
  let startY = 0;

  let currentX = 0;
  let currentY = 0;

  let rotation = Math.random() * 30 - 15;

  paper.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;

  paper.addEventListener("pointerdown", (e) => {

    isDragging = true;

    paper.style.zIndex = highestZ++;

    startX = e.clientX - currentX;
    startY = e.clientY - currentY;

    paper.setPointerCapture(e.pointerId);
  });

  paper.addEventListener("pointermove", (e) => {

    if (!isDragging) return;

    currentX = e.clientX - startX;
    currentY = e.clientY - startY;

    paper.style.transform =
      `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;
  });

  paper.addEventListener("pointerup", () => {
    isDragging = false;
  });

  paper.addEventListener("pointercancel", () => {
    isDragging = false;
  });

});

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

let playing = false;

music.addEventListener("loadedmetadata", () => {
    music.currentTime = 19; // 90 segundos = 1min30s
    music.volume = 0.4; // 50%
});


btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    btn.innerHTML = "🔇 Parar Música";
  } else {
    music.pause();
    btn.innerHTML = "🩵 Tocar Música";
  }

  playing = !playing;
});

document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");

  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.pointerEvents = "none";
  heart.style.fontSize = "20px";
  heart.style.zIndex = "9999";

  document.body.appendChild(heart);

  let pos = 0;

  const anim = setInterval(() => {
    pos++;

    heart.style.transform = `translateY(-${pos}px)`;
    heart.style.opacity = 1 - pos / 50;

    if (pos > 50) {
      clearInterval(anim);
      heart.remove();
    }
  }, 10);
});