/*
  INVITACIÓN ELIZBHET VAHOS CORREA
  -------------------------------------------------
  El botón de confirmación abre directamente WhatsApp con un mensaje
  predeterminado. El número está configurado con el indicativo de Colombia.
*/

const WHATSAPP_NUMBER = "573188607476";
const EVENT_DATE = new Date("2026-07-11T19:30:00-05:00");

const loader = document.getElementById("loader");
const openInvitation = document.getElementById("openInvitation");
const details = document.getElementById("details");
const rsvpButton = document.getElementById("rsvpButton");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("is-hidden"), 500);
  createSparkles();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

openInvitation.addEventListener("click", () => {
  details.classList.remove("is-hidden");
  details.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => details.classList.add("is-open"));
  details.scrollIntoView({ behavior: "smooth", block: "start" });
  launchConfetti(110);
});

/* Va directamente al chat de WhatsApp, con el mensaje listo para enviar. */
rsvpButton.addEventListener("click", () => {
  const message = "Hola, confirmo mi asistencia a la celebración de Elizbhet Vahos Correa el sábado 11 de julio de 2026. ¡Gracias!";
  const destination = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(destination, "_blank", "noopener,noreferrer");
  launchConfetti(150);
});

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;
  const target = diff > 0 ? diff : 0;

  const days = Math.floor(target / (1000 * 60 * 60 * 24));
  const hours = Math.floor((target / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((target / (1000 * 60)) % 60);
  const seconds = Math.floor((target / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function createSparkles() {
  const holder = document.getElementById("sparkles");
  const symbols = ["✦", "·", "✧", "•"];

  for (let i = 0; i < 34; i += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.fontSize = `${8 + Math.random() * 14}px`;
    sparkle.style.setProperty("--duration", `${2.7 + Math.random() * 4.2}s`);
    sparkle.style.setProperty("--delay", `${Math.random() * -5}s`);
    holder.appendChild(sparkle);
  }
}

function launchConfetti(amount = 100) {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  ctx.scale(ratio, ratio);

  const colors = ["#f1b7c7", "#d888a3", "#f4e7c4", "#ffffff", "#bd708b"];
  const particles = Array.from({ length: amount }, () => ({
    x: window.innerWidth * (0.25 + Math.random() * 0.5),
    y: window.innerHeight * 0.22,
    vx: (Math.random() - 0.5) * 11,
    vy: -4 - Math.random() * 9,
    gravity: 0.2 + Math.random() * 0.13,
    size: 4 + Math.random() * 7,
    rotation: Math.random() * Math.PI,
    spin: (Math.random() - 0.5) * 0.28,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: 75 + Math.random() * 45
  }));

  let frame;
  const animate = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += particle.gravity;
      particle.rotation += particle.spin;
      particle.life -= 1;
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.globalAlpha = Math.max(0, particle.life / 85);
      ctx.fillStyle = particle.color;
      ctx.fillRect(-particle.size / 2, -particle.size / 3, particle.size, particle.size * 0.66);
      ctx.restore();
    });

    if (particles.some((particle) => particle.life > 0 && particle.y < window.innerHeight + 40)) {
      frame = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(frame);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  };
  animate();
}
