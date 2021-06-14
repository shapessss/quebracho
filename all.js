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
const animatedTags = document.querySelectorAll("figcaption")

// fade out on load
animatedTags.forEach(tag => {
    tag.style.opacity = 0
  })
  
  const fadeIn = function () {
    // look trhough all the animated tags and see
    // with the getBoundingClientRect if it's in the window
    let delay = 0.25
    
    animatedTags.forEach(tag => {
      const tagTop = tag.getBoundingClientRect().top
      const tagBottom = tag.getBoundingClientRect().bottom
         
      if (tagTop < window.innerHeight && tagBottom > 0) {
        tag.style.animation = `fadein 1s ${delay}s both`
        delay = delay + 0.25
      } else {
        tag.style.opacity = 0
        tag.style.animation = ""
      }
    })
  }
  
  // on load, run fadeIn
  fadeIn()
  
  // on scroll, run fadeIn
  document.addEventListener("scroll", function () {
    fadeIn()
  })
  
  // on browser resize, run fadeIn
  window.addEventListener("resize", function () {
    fadeIn()
  })
