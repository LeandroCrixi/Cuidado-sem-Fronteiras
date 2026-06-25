const currentYear = () => {
  const year = new Date().getFullYear();
  const current_year = document.getElementById("current-year");

  if (current_year) {
    current_year.textContent = year.toString();
  }
};

const myBackground = () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".my-background button");

  const activateButton = (e: MouseEvent) => {
    const button = e.currentTarget as HTMLButtonElement;
    const controls = button.getAttribute("aria-controls");
    const getDd = controls ? document.getElementById(controls) : null;

    if (!getDd) return;

    getDd.classList.toggle("active");
    const active = getDd.classList.contains("active");
    button.setAttribute("aria-expanded", String(active));
  };

  buttons.forEach((button) => {
    button.addEventListener("click", activateButton);
  });
};

export { currentYear, myBackground };
