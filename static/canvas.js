const canvas = document.querySelector("canvas");
const sandbox = new GlslCanvas(canvas);

const sizer = function () {
  const dpi = window.devicePixelRatio
  const w = window.innerWidth
	const h = window.innerHeight
  
  const s = Math.max(w, h)

	canvas.width = s * dpi
	canvas.height = s * dpi
  canvas.style.width = s + "px"
  canvas.style.height = s + "px"
}

sizer()
window.addEventListener("resize", function() {
  sizer()
})

sandbox.load(frag);
sandbox.setUniform("seed", Math.random());
