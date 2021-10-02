var darkMode = localStorage.getItem('darkMode');
let defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')

function enableDarkMode() {
    document.body.classList.add('dark-mode')
    localStorage.setItem('darkMode', 'enabled')
    moon.classList.remove('enable-dark__moon')
    sun.classList.remove('enable-dark__sun')
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('darkMode', 'disabled')
    moon.classList.add('enable-dark__moon')
    sun.classList.add('enable-dark__sun')
}

if (darkMode === 'enabled') {
    enableDarkMode();
} else if (darkMode === 'disabled') {
    disableDarkMode()
} else if (defaultMode === true) {
    enableDarkMode();
}


function darkModeToggle() {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
}