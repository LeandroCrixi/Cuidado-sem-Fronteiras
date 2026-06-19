class GlobalFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="upper-footer">
        <div>
          <img class="logo" src="../public/img/logo.png" alt="" />
          <p>
            I’m a HR Expert with a background in IT, Retail and Aviation
            industry since 2013. Experienced in the different stages of a
            company from growing a start-up to market leaders.
          </p>
        </div>
        <div>
          <h3>Pages</h3>
          <div class="line"></div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="../../../my-story">My Story</a></li>
            <li><a href="../../../organisations">Organisations</a></li>
            <li><a href="../../../individual-performance">Individual Performance</a></li>
          </ul>
        </div>
        <div>
          <h3>Connect</h3>
          <div class="line"></div>
          <div class="connect">
            <a href=""><img src="../public/icons/instagram.svg" alt="" /></a>
            <a href=""><img src="../public/icons/facebook.svg" alt="" /></a>
            <a href=""><img src="../public/icons/linkedin.svg" alt="" /></a>
          </div>
        </div>
      </div>
      <div class="lower-footer">
        <div>
          <p>© 2026 All rights reserved.</p>
          <div class="star-wrapper">
            <span class="star-label">For Oisín</span>
            <img src="../public/icons/star.svg" alt="Star icon" />
          </div>
        </div>
        <span>Website designed and managed by <a href="https://leo-crixi.com/" target="_blank">Leo Crixi</a></span>
      </div>
    </footer>
        `;
  }
}
customElements.define("global-footer", GlobalFooter);
export { GlobalFooter };

{/* <li><a href="">Media</a></li>
            <li><a href="">Contact</a></li> */}