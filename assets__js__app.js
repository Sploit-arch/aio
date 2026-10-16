
(() => {
  const terminal = document.getElementById("terminal");
  const navItems = [...document.querySelectorAll(".nav-item")];

  const sections = ["dashboard", "host", "utilities"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  // Keep the sidebar's active state in sync with navigation.
  for (const item of navItems) {
    item.addEventListener("click", () => {
      navItems.forEach(link => {
        link.classList.toggle("active", link === item);
      });
    });
  }

  // Report only what this web page can actually verify.
  if (terminal) {
    const status = document.createElement("p");
    status.innerHTML =
      '<time>LOCAL</time> ' +
      '<b class="info">[STATUS]</b> ' +
      'Dashboard ready; engine status unverified by this page.';
    terminal.append(status);
  }
})();
