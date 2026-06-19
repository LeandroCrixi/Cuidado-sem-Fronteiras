class GlobalHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <nav>
        <div class="logo">
          <a href="/"><img src="../public/img/Logo3.svg" alt="" /></a>
        </div>
        <button class="burger" aria-label="Open menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        <ul class="nav-menu">
        <li><button class="close-menu" aria-label="Close menu">&times;</button></li>
          <li><a href="../../../my-story">My Story</a></li>
          <li><a href="../../../organisations">Organisations</a></li>
          <li><a href="../../../individual-performance">Individual Performance</a></li>
        </ul>
      </nav>
    </header>
        `;
  }
}
customElements.define("global-header", GlobalHeader);
export { GlobalHeader };

// <li><a href="">Home</a></li>
{/* <li class="media-menu">
            <a class="menu-a" href="">Media <img src="./public/icons/arrow-down.svg" alt=""/></a>
            <ul class="dropdown-menu">
              <li><a href="">Blog</a></li>
            </ul>
          </li>
          <li><a href="">Contact</a></li> */}
