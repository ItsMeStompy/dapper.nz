// var darkMode = localStorage.getItem('darkMode');
var darkMode
let defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

function enableDarkMode() {
    document.body.classList.add('dark-mode')
    // localStorage.setItem('darkmode', true)
    darkMode = true
}

function disableDarkMode () {
    document.body.classList.remove('dark-mode')
    // localStorage.setItem('darkmode', null)
    darkMode = null
}

if (defaultMode === true) {
    enableDarkMode();
}

function darkModeToggle() {
    // darkMode = localStorage.getItem('darkMode');

    if (darkMode !== true) {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
}