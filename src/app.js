import 'bulma'
import './style.scss'

import p5 from 'p5'

console.log(p5)
const s = (sk) => {
  sk.setup = () =>{
    sk.createCanvas(window.innerWidth, window.innerHeight,  sk.WEBGL)
    sk.background(220)
    sk.rotateY(1)
    sk.frameRate(30)



  }

  sk.draw = () =>{
    sk.background(220)
    sk.ambientLight(50)
    sk.pointLight(250, 250, 250, 100, 100, 30)
    sk.translate(0, 0, 0)
    sk.specularMaterial('#'+((1<<24)*Math.random()|0).toString(16))
    for(let i =1;i<10 ; i++){
      sk.rotateZ(sk.frameCount * (i/1000))
      sk.rotateX(sk.frameCount * (i/1000))
      sk.rotateY(sk.frameCount * (i/1000))
      sk.box(200)
    }

  }


}
const P5 = new p5(s)
console.log(P5)
