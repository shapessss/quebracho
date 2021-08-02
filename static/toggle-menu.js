const toggletag = document.querySelector("#modal-activator")
const navTag = document.querySelector("div.about-modal")

toggletag.addEventListener("click", function () {
    navTag.classList.toggle("active")
})