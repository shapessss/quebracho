const canvas = document.querySelector("canvas");
const sandbox = new GlslCanvas(canvas);

const calcSize = function () {
    let s = Math.max(window.innerHeight, window.innerWidth + 600)
    let dpi = window.devicePixelRatio
  
    if (window.innerWidth < 640) {
      s = window.innerWidth
    }
    
    canvas.width = s * dpi
      canvas.height = s * dpi
    canvas.style.width = s + "px"
    canvas.style.height = s + "px"
  }
  
  calcSize()
  window.addEventListener("resize", function () {
    calcSize()
})

sandbox.load(frag);
sandbox.setUniform("seed", Math.random());