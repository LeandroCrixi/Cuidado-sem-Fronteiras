const currentYear = () => {
  const year = new Date().getFullYear();
  const current_year = document.getElementById("current-year");
  current_year.textContent = year;
};

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

export { currentYear, faq };
