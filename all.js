const toggleTag = document.querySelector("a#modal-activator")
const toggleCloser = document.querySelector("div#modal-closer")
const navTag = document.querySelector("div.about-modal")

toggleTag.addEventListener("click", function () {
    navTag.classList.toggle("active")
    event.preventDefault()
})

toggleCloser.addEventListener("click", function () {
    navTag.classList.toggle("active")
});

// code taken from our tutorial
// https://www.youtube.com/watch?v=uprZMdVl-aQ

const cursorTag = document.createElement("div")
const balls = [
  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
//  document.createElement("div"),
]

cursorTag.classList.add("cursors")
document.body.append(cursorTag)

let aimX = -30
let aimY = -30



balls.forEach((ball, index) => {
  let currentX = -30
	let currentY = -30

  cursorTag.append(ball)

	let speed = 0.2 - index * 0.005
  
  const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate)
  }

  animate()
})

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
})


// to account for page scroll
let currentScroll = window.pageYOffset
let aimScroll = window.pageYOffset

window.addEventListener("scroll", function () {
  // where are we now we've scrolled
  currentScroll = window.pageYOffset
  
  // update aimY with the difference
  aimY += currentScroll - aimScroll
  
  // reset the aim scroll for next scroll event
  aimScroll = window.pageYOffset
});

// text animation script
const animatedTags = document.querySelectorAll("h2, button")

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
  fadeIn();
})

window.addEventListener("resize", function () {
  fadeIn();
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