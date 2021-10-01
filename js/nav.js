const topBar = document.getElementById("navTopBar")
const bottomBar = document.getElementById("navBottomBar")
const middleBar = document.getElementById("navMiddleBar")

const nav = document.getElementById("nav")
const navAbout = document.getElementById("navAbout")
const navWebsites = document.getElementById("navWebsites")
const navPhotos = document.getElementById("navPhotos")

var navOpen = true

function toggleNav() {
    if (navOpen === false) {
    topBar.classList.remove("top-rotate")
    bottomBar.classList.remove("bottom-rotate")
    middleBar.classList.remove("middle-leave")

    nav.classList.remove("show")
    nav.classList.add("hide")
    navAbout.classList.remove("shift")
    navWebsites.classList.remove("shift")
    navPhotos.classList.remove("shift")
    navOpen = true

    } else {
    topBar.classList.add("top-rotate")
    bottomBar.classList.add("bottom-rotate")
    middleBar.classList.add("middle-leave")

    nav.classList.remove("hidden")
    nav.classList.remove("hide")
    nav.classList.add("show")
    navAbout.classList.add("shift")
    navWebsites.classList.add("shift")
    navPhotos.classList.add("shift")
    navOpen = false
    }
}

const about = document.getElementById("about")
const websites = document.getElementById("websites")
const photos = document.getElementById("photos")

function scrollToAbout() {
    about.scrollIntoView({ behavior: "smooth" });
    
    topBar.classList.remove("top-rotate")
    bottomBar.classList.remove("bottom-rotate")
    middleBar.classList.remove("middle-leave")
    
    nav.classList.remove("show")
    nav.classList.add("hide")
    navAbout.classList.remove("shift")
    navWebsites.classList.remove("shift")
    navPhotos.classList.remove("shift")
    navOpen = true
}

function scrollToWebsites() {
    websites.scrollIntoView({ behavior: "smooth" });
    
    topBar.classList.remove("top-rotate")
    bottomBar.classList.remove("bottom-rotate")
    middleBar.classList.remove("middle-leave")
    
    nav.classList.remove("show")
    nav.classList.add("hide")
    navAbout.classList.remove("shift")
    navWebsites.classList.remove("shift")
    navPhotos.classList.remove("shift")
    navOpen = true
}

function scrollToPhotos() {
    photos.scrollIntoView({ behavior: "smooth" });
    
    topBar.classList.remove("top-rotate")
    bottomBar.classList.remove("bottom-rotate")
    middleBar.classList.remove("middle-leave")
    
    nav.classList.remove("show")
    nav.classList.add("hide")
    navAbout.classList.remove("shift")
    navWebsites.classList.remove("shift")
    navPhotos.classList.remove("shift")
    navOpen = true
}