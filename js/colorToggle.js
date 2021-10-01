var darkMode = localStorage.getItem('darkMode');
let defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

function enableDarkMode() {
    document.body.classList.add('dark-mode')
    localStorage.setItem('darkMode', 'enabled')
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('darkMode', 'disabled')
}

if (darkMode === 'enabled') {
    enableDarkMode();
} else if (darkMode === 'disabled') {
    disableDarkMode()
} else if (defaultMode === true) {
    enableDarkMode();
}

console.log(darkMode)


function darkModeToggle() {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode()
        console.log(darkMode)
    } else {
        disableDarkMode()
        console.log(darkMode)
    }
}