const menuMobile = document.getElementById("menu");

function openMenu() {
        menuMobile.classList.remove("-translate-y-full")
        menuMobile.classList.add("shadow-xl")
}

function closeMenu() {
        menuMobile.classList.add("-translate-y-full")
}

