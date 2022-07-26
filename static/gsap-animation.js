const carousels = document.querySelector('.gsap-text a')

const fadesIn = gsap.timeline()

fadesIn
    .set(carousels, { opacity: 0 })
    .to(carousels, { opacity: 1, stagger: 0.25, delay: 1 })

const span = carousels.querySelector('span')

for (let i = 0; i < 20; i++) {
    carousels.appendChild(
        span.cloneNode(true)
    )
}

const timeline = gsap.timeline({
    repeat: -1
})

timeline.to(carousels, {
    x: (-1 * span.clientWidth),
    duration: 6,
    ease: 'linear'
})