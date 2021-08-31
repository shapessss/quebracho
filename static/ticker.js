const clientButton = document.querySelector("a.section__btn")

clientButton.classList.add("hide")

setTimeout(function() {
  clientButton.classList.remove("hide")
}, 40000);

clientButton.addEventListener("click", (y) => {
  y.preventDefault()
  clientForm.classList.toggle("open")
});

$(window).scroll(function() {
  var fixedBottom = $("#N_fixedBottom");
  if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
      fixedBottom.css("opacity", 0 );
  } else {
      fixedBottom.css("opacity", 1 );
  }
});