// ==========================
// 🌌 FONDO CONSTELACIÓN
// ==========================
const bg = document.getElementById("bg");
const ctx = bg.getContext("2d");

let w, h;
let stars = [];

function resize() {
  w = bg.width = window.innerWidth;
  h = bg.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

for (let i = 0; i < 80; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  });
}

function animate() {
  ctx.clearRect(0, 0, w, h);

  stars.forEach(s => {
    s.x += s.dx;
    s.y += s.dy;

    if (s.x < 0 || s.x > w) s.dx *= -1;
    if (s.y < 0 || s.y > h) s.dy *= -1;

    ctx.beginPath();
    ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = "#00aaff";
    ctx.fill();
  });

  for (let i = 0; i < stars.length; i++) {
    for (let j = i; j < stars.length; j++) {
      let dx = stars[i].x - stars[j].x;
      let dy = stars[i].y - stars[j].y;
      let dist = Math.sqrt(dx*dx + dy*dy);

      if (dist < 100) {
        ctx.strokeStyle = `rgba(0,170,255,${1 - dist/100})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

animate();


// ==========================
// 🌹 ROSA
// ==========================
document.querySelectorAll(".rose-btn").forEach(btn => {
  const paths = btn.querySelectorAll(".rose-path");

  btn.addEventListener("mouseenter", () => {
    btn.classList.add("active");

    paths.forEach(p => {
      p.style.animation = "none";
      void p.offsetWidth;
      p.style.animation = null;
    });
  });

  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("active");

    paths.forEach(p => {
      p.style.strokeDashoffset = 600;
      p.style.opacity = 0;
    });
  });
});