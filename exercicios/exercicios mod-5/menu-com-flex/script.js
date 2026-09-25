let navContainer = document.querySelector(".nav-container")

function mudouTamanho() {
    if (window.innerWidth >= 650) {
        navContainer.style.display = 'block'
    } else {
        navContainer.style.display = 'none'
    }
}

function clickMenu() {
    if (navContainer.style.display == 'block') {
        navContainer.style.display = 'none'
    } else {
        navContainer.style.display = 'block'
    }
}