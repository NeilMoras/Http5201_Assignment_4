import "./style.scss";

document.querySelector("#app").innerHTML = `
  <h1>Welcome To My Main Page</h1>
  <p>Here are the links to the three pages describing the Quality Assurance, Security Features and tools used in process of building these web pages as well a Bad example page demonstrating as to what is a NOT TO to example that will expose your webpage to security vulnerability </p>
  <a href="security/index.html" target="_blank">Security</a>
  <a href="quality/index.html" target="_blank">Quality</a>
  <a href="badexample/index.html" target="_blank">Bad Example</a>
`;


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
