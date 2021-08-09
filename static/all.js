const toggleTag = document.querySelector("a#toggle-activator")
const contentTag = document.querySelector("#toggle-menu")
const bodyOverflow = document.querySelector("body")
const pageTag = document.querySelector(".page")

toggleTag.addEventListener("click", function (delta) {
    contentTag.classList.toggle("active")
    bodyOverflow.classList.add("active-body")
    pageTag.classList.add("blured")
    delta.preventDefault()
})

contentTag.addEventListener("click", function() {
  contentTag.classList.toggle("active")
  bodyOverflow.classList.remove("active-body")
  pageTag.classList.remove("blured")
})

//fullCloser.addEventListener("click", function() {
//    navTag.classList.toggle("active")
//    headTag.classList.remove("active_header")
//    bodyactiveTag.classList.remove("active_body")
//    pageTag.classList.remove("blured")
//})

// text animation script
const animatedTags = document.querySelectorAll("h2, button, section.project__description figcaption, h1.animate_this, nav.about-nav, .small-two, .menu__sec, .join__us__contact")

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    
    
    if (tagTop < window.innerHeight) {
      tag.style.animation = "fadeIn 0.5s 0.5s both"
    }
  })
}

fadeIn()

document.addEventListener("scroll", function () {
  fadeIn()
})

document.addEventListener("wheel", function () {
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
})

// Copyright date to current year
function currentYear() {
  const d = new Date()
  const n = d.getFullYear()
  document.getElementById('copyright').innerHTML = '&copy; Quebracho ' + n
}
currentYear()

// call function
const telTag = document.getElementById("tel")
const telephoneTag = document.getElementById("telephone")

telTag.addEventListener("click", function (fork) {
  window.location.href="tel:+52 33 2937 1055"
  fork.preventDefault()
})

telephoneTag.addEventListener("click", function (knife) {
  window.location.href="tel:+52 33 2937 1055"
  knife.preventDefault()
})

const mailTag = document.getElementById("email")
const mailsecTag = document.getElementById("email_sec")

mailsecTag.addEventListener("click", function (pepper) {
  window.location.href="mailto:info@quebracho.mx?subject=I have a project"
  pepper.preventDefault()
})

mailTag.addEventListener("click", function (onion) {
  window.location.href="mailto:info@quebracho.mx?subject=I have a project"
  onion.preventDefault()
})


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener("resize", function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})