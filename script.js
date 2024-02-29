const os_df = document.getElementById('os-default');
const dk_md = document.getElementById('dark-mode');
const lt_md = document.getElementById('light-mode');

let defColSch = "";
const mql = window.matchMedia('(prefers-color-scheme: dark)');

mql.addEventListener('change', getDefaultColorScheme)

os_df.addEventListener(
    'click', () => document.querySelector('body').className = defColSch);
dk_md.addEventListener(
    'click', () => document.querySelector('body').classList.add('dark'));
lt_md.addEventListener(
    'click', () => document.querySelector('body').classList.remove('dark'));

function getDefaultColorScheme(mql) {
  if (mql.matches) {
    document.querySelector('main').classList.add('dark');
    defColSch = "dark";
  }
}