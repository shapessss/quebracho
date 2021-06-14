const toggletag = document.querySelector("#modal-activator")
const navTag = document.querySelector("div.about-modal")

toggletag.addEventListener("click", function () {
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

$("nav.about-nav a, a").on("click", function (event) {
  
    event.preventDefault()
    
    const href = $(this).attr("href")
    
    window.history.pushState(null, null, href)
    
    $.ajax({
      url: href,
      success: function (data) {
        $("main").fadeOut(250, function () {
          const newPage = $(data).filter("main").html()
          
          $("main").html(newPage)
          
          $("main").fadeIn(250)
        })
      }
    })
    
})