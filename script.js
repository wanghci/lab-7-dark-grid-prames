const os_df = document.getElementById('os-default');
const dk_md = document.getElementById('dark-mode');
const lt_md = document.getElementById('light-mode');

// os_df.addEventListener("click", () => document.querySelector("body").className = "dark");
dk_md.addEventListener("click", () => document.querySelector("body").className = "dark");
lt_md.addEventListener("click", () => document.querySelector("body").className = "");