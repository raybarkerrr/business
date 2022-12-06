const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

let changeIcon = function(icon) {
    icon.classList.toggle('fa-times')
}

changeIcon = (icon) => icon.classList.toggle('fa-times')