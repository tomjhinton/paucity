import 'bulma'
import './style.scss'

import p5 from 'p5'

console.log(p5)
const s = (sk) => {
  let layers = []

  // sk.translate(window.innerWidth/2,window.innerHeight/2);
  sk.setup = () =>{
    const gfx = sk.createGraphics(window.innerWidth,window.innerHeight)
    let gfx2

    sk.createCanvas(window.innerWidth,window.innerHeight)
    sk.angleMode(sk.DEGREES)
    sk.imageMode(sk.CENTER)
    sk.translate(window.innerWidth/2,window.innerHeight/2)
    sk.background(40)
    gfx.stroke(100)
    gfx.strokeWeight(13)
    gfx.line(0,0,window.innerWidth,0)
    for(let i=0;i<1000;i++){
      gfx.point(Math.random()*window.innerWidth, Math.random()*window.innerHeight)
    }

    gfx2 = {...gfx}
    sk.image(gfx,0,0)
    sk.rotate(1)
    sk.image(gfx2,0,0)
  }

}
const P5 = new p5(s)
