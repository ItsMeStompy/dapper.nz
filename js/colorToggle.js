var darkMode = false
const body = document.body
let defaultMode = window.matchMedia('(prefers-color-scheme: dark)').matches

if(defaultMode) {
    darkMode = false
    colorSet()
} else {
    darkMode = true
    colorSet()
}

function colorSet() {
    if (darkMode === true) {
        document.body.classList.add("dark-mode")
        document.body.classList.remove("light-mode")
    } else {
        document.body.classList.add("light-mode")
        document.body.classList.remove("dark-mode")
    }
}

function colorToggle() {
    if (darkMode === true) {
        darkMode = false
        colorSet()
    } else {
        darkMode = true
        colorSet()
    }
}