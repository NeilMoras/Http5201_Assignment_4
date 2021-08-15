import "./style.scss";

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `


document.querySelectorAll(".header").innerHTML = `
<div class="text-wrapper">
<div class="nav-flex">
<div class="logo">
  <a href="index.html"><img id="web-logo" src="images/fake-logo.png" alt="Logo of the website" /></a>
</div>
<nav id="menu">
  <h2 class="hidden">Header Navigation Menu</h2>
  <ul>
    <li><a href="security/index.html" target="_blank">Security</a></li>
    <li><a href="quality/index.html" target="_blank">Quality</a></li>
    <li><a href="badexample/index.html" target="_blank">Bad Example</a></li>
  </ul>
</nav>
</div>

</div>
`;
