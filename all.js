const toggleTag = document.querySelector("a#modal-activator")
const toggleCloser = document.querySelector("div#modal-closer")
const navTag = document.querySelector("div.about-modal")
const headTag = document.querySelector("header")
const bodyactiveTag = document.querySelector("body")

toggleTag.addEventListener("click", function () {
    navTag.classList.toggle("active") 
    headTag.classList.add("active_header")
    bodyactiveTag.classList.add("active_body")
    event.preventDefault()
})

toggleCloser.addEventListener("click", function () {
    navTag.classList.toggle("active")
    headTag.classList.remove("active_header")
    bodyactiveTag.classList.remove("active_body")
});

// text animation script
const animatedTags = document.querySelectorAll("h2, button, section.project__description figcaption")

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    
    
    if (tagTop < window.innerHeight) {
      tag.style.animation = "fadeIn 1s 0.5s both"
    }
  })
}

fadeIn()

document.addEventListener("scroll", function () {
  fadeIn()
})

window.addEventListener("wheel", function () {
  fadeIn()
})

window.addEventListener("resize", function () {
  fadeIn()
})

// image animation on scroll for individual project
const animatedImage =  document.querySelectorAll("section.project-container img")

animatedImage.forEach(img => {
  img.style.opacity = 0
})

const translated = function () {
  animatedImage.forEach(img => {
    const imgTop = img.getBoundingClientRect().top

    if (imgTop < window.innerHeight) {
      img.style.animation = "translated 1.2s 0.2s both"
    }
  })
}

translated()

document.addEventListener("scroll", function () {
  translated()
})

document.addEventListener("resize", function () {
  translated()
})

// call function
const telTag = document.getElementById("tel")

telTag.addEventListener("click", function (fork) {
  window.location.href="tel:+52 33 2937 1055"
  fork.preventDefault()
});

const mailTag = document.getElementById("email")
const secMail = document.getElementById("sec_email")

mailTag.addEventListener("click", function (tomato) {
  window.location.href="mailto:info@quebracho.mx?subject=I have a project"
  tomato.preventDefault()
})

secMail.addEventListener("click", function(onion) {
  window.location.href="mailto:info@quebracho.mx?subject=I have a project"
  onion.preventDefault()
})

// Header style on scroll
const headerTag = document.querySelector("header")
const logoTag = document.getElementById("logo-header")

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset

  if (pixels > 145) {
    headerTag.classList.add("scrolled")
    logoTag.classList.add("new_logo")
  } else {
    headerTag.classList.remove("scrolled")
    logoTag.classList.remove("new_logo")
  }
});

// Copyright date to current year
function currentYear() {
  const d = new Date()
  const n = d.getFullYear()
  document.getElementById('copyright').innerHTML = '&copy; Quebracho ' + n
}
currentYear()