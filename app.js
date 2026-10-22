
const intro = document.getElementById("intro");
const greeting = document.getElementById("greeting");
const messageSection = document.getElementById("messageSection");
const readMessage = document.getElementById("readMessage");

let greetingOpened = false;

function openGreeting() {
  if (greetingOpened) return;
  greetingOpened = true;

  intro.style.opacity = "0";
  intro.style.pointerEvents = "none";

  setTimeout(() => {
    intro.hidden = true;
    greeting.classList.add("visible");
    greeting.setAttribute("aria-hidden", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 450);
}

intro.addEventListener("click", openGreeting);

readMessage.addEventListener("click", () => {
  messageSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
