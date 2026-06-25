import { currentYear, myBackground } from "./modules/dom.js";
import { GlobalHeader } from "./components/header.js";
import { initBurgerMenu } from "./components/burgerMenu.js";
import { initCal } from "./components/cal.js";
import { GlobalFooter } from "./components/footer.js";

// currentYear()
initBurgerMenu();
myBackground();
initCal("catch-up");
initCal("private-coaching-clients");
initCal("exec-coaching-clients");

const faq = () => {
  const btns = document.querySelectorAll(".faq button");

  const activateBtn = (e) => {
    const btn = e.currentTarget;
    const bControls = btn.getAttribute("aria-controls");
    const myDD = document.getElementById(bControls);
    myDD.classList.toggle("active");
    const isActive = myDD.classList.contains("active");
    btn.setAttribute("aria-expanded", isActive);
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", activateBtn);
  });
};

faq();
