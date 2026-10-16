(() => {
  const terminal = document.getElementById("terminal");
  const navItems = [...document.querySelectorAll(".nav-item")];
  const sections = ["dashboard", "host", "utilities"].map(id => document.getElementById(id)).filter(Boolean);

  // Keep the sidebar's active state in sync with navigation.
  for (const item of navItems) {
    item.addEventListener("click", () => {
      navItems.forEach(link => link.classList.toggle("active", link === item));
    });
  }

  // A local UI check only. This deliberately does not execute or emulate an exploit.
  if (terminal) {
    const status = document.createElement("p");
    status.innerHTML = '<time>LOCAL</time> <b class="info">[UI]</b> Interactive dashboard ready; no exploit payload has been loaded.';
    terminal.append(status);
  }
})();
