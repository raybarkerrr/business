const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".navbar-links")

navbarLinks.addEventListener("click", () => {
    toggleButton.classList.toggle("active")
})