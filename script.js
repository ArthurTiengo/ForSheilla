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