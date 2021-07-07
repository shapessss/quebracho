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
const animatedTags = document.querySelectorAll("h2, button, section.project__description figcaption, h1.animate_this, nav.about-nav")

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

telTag.addEventListener("click", function (fork) {
  window.location.href="tel:+52 33 2937 1055"
  fork.preventDefault()
})

const mailTag = document.getElementById("email")
const mailsecTag = document.getElementById("email_sec")

mailTag.addEventListener("click", function (tomato) {
  window.location.href="mailto:info@quebracho.mx?subject=I have a project"
  tomato.preventDefault()
})

mailsecTag.addEventListener("click", function (pepper) {
  window.location.href="mailto:info@quebracho.mx?subject=I have a project"
  pepper.preventDefault()
})


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener("resize", function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Pages slider
let pageNumber = 0

const pages = [
  { copy: "Compartamos el talento; construyamos juntos el objetivo de nuestro trabajo: la realización de tu proyecto." },
  { copy: "Queremos construir desde cero el proyecto de tus sueños, superar tus expectativas, romper las reglas al momento de idear las herramientas que puedan ayudarte, humanizando tu marca y acercando clientes que busquen vivir una experiencia." },
  { copy: "Que el talento de nuestro equipo sea reconocido a nivel nacional, ideando nuevas maneras de hacer publicidad, formando pioneros del branding mexicano y construyendo uno de los mejores estudios creativos del país." },
  { copy: "Responsabilidad, integración y empatía como principios de trabajo, con la firme creencia en el talento humano, en los nuevos talentos y en la adaptación constante." },
  { copy: "Utilizamos la creatividad como una herramienta. Dejamos volar la mente, pensamos dentro y fuera del proyecto, buscamos nuevas perspectivas, experimentamos con las ideas, sentimos, tratamos de vivir cada proyecto como el propio, buscando las vías no encontradas en el pasado, abriendo los muros que bloquean la mirada." },
  { copy: "Encontramos inspiración en los detalles, en el silencioso lenguaje de las cosas, en los espacios vacíos, en las verdades no dichas del producto; también en el trabajo del otro, en tendencias que pueden mejorarse, materiales que poseen lo necesario para crecer y en ese ánimo colaborativo de quienes conformamos este grupo." },
  { copy: "Comunicamos alternativas. Buscamos transmitir, llegar, hacer sentir lo que percibimos en los trabajos. Comenzamos a planear cuando conocemos; concluimos nuestra labor cuando llegamos al cliente y le decimos, con algo más que palabras, lo que nuestra pasión representa." },
  { copy: "Moverse es vivir, y vivimos para mover, para hacer llegar, para dar, para formar. De nuestro impulso se construyen las metas. De nuestro actuar, se definen las rutas. Debemos ser la fuerza que llegue a las personas, buscarlas, ir a por ellas, pues son estas las que darán vida, propósito y esencia a lo que hagamos." }
]

const headers = [
  { head: "Soluciones integrales" },
  { head: "" },
  { head: "" },
  { head: "" },
  { head: "Hacemos de la vía B nuestra ruta central" },
  { head: "Fuerza central de nuestra inercia" },
  { head: "La vía sobre la que transitamos" },
  { head: "La culminación de nuestro esmero" }
]

const titles = [
  { title: "Estudio Creativo" },
  { title: "Misión" },
  { title: "Visión" },
  { title: "Filosofía" },
  { title: "Creatividad" },
  { title: "Inspiración" },
  { title: "Comunicación" },
  { title: "Ímpetu" },
]

const nextTag = document.querySelector("div.next_quote img.next")
const prevTag = document.querySelector("div.next_quote img.prev")
const outputTag = document.querySelector("section.quotes p")
const headersTag = document.querySelector("section.quotes h3")
const titlesTag = document.querySelector("section.quotes h1")

const next = function () {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
  updateHeaders()
  updateTitles()
}

const previous = function () {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
  updateHeaders()
  updateTitles()
}

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy
}

const updateHeaders = function () {
  headersTag.innerHTML = headers[pageNumber].head
}

const updateTitles = function () {
  titlesTag.innerHTML = titles[pageNumber].title
}

nextTag.addEventListener("click", function() {
  next()
})

prevTag.addEventListener("click", function () {
  previous()
})

document.addEventListener("keyup", function (key) {

  if (key.key == "ArrowRight") {
    next()
  }

  if (key.key == "ArrowLeft") {
    previous()
  }
})