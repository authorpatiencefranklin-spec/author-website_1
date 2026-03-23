console.log("JS geladen");

const elements = document.querySelectorAll(".cookie-reveal");

const revealOnScroll = () => {
  elements.forEach((el, index) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 200);
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);