import { currentYear, faq } from "./modules/dom.js";
import { GlobalHeader } from "./components/header.js";
import { initBurgerMenu } from "./components/burgerMenu.js";
import { initCal } from "./components/cal.js";
import { GlobalFooter } from "./components/footer.js";

// currentYear()
faq();
initCal("catch-up");
initCal("private-coaching-clients");
initCal("exec-coaching-clients");
