const os_df = document.getElementById('os-default');
const dk_md = document.getElementById('dark-mode');
const lt_md = document.getElementById('light-mode');

const mql = window.matchMedia("(prefers-color-scheme: dark)");

let defColSch;
mql.addEventListener("change", (getColSch = getDefaultColorScheme))

os_df.addEventListener("click", () => document.querySelector("body").className = getColSch);
dk_md.addEventListener("click", () => document.querySelector("body").className = "dark");
lt_md.addEventListener("click", () => document.querySelector("body").className = "");

function getDefaultColorScheme(mql) {
    if (mql.matches) {
        document.querySelector("main").className = "dark"
        return "dark"
    }
    return ""
}