const os_df = document.getElementById('os-default');
const dk_md = document.getElementById('dark-mode');
const lt_md = document.getElementById('light-mode');

var defColSch = "";

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector('body').classList.add('dark');
  defColSch = "dark";
}

os_df.addEventListener(
    'click', () => document.querySelector('body').className = defColSch);
dk_md.addEventListener(
    'click', () => document.querySelector('body').classList.add('dark'));
lt_md.addEventListener(
    'click', () => document.querySelector('body').classList.remove('dark'));

console.log(document.querySelector('body').classList);

