import 'bulma'
import './style.scss'

import p5 from "p5";

console.log(p5)
const s = (sk) => {
  let layers = []
  //let polySynth = new p5moduleSound.PolySynth();
  // sk.translate(window.innerWidth/2,window.innerHeight/2);
  sk.setup = () =>{
    sk.createCanvas(window.innerWidth, window.innerHeight,  sk.WEBGL)
    sk.background(220);
    sk.rotateY(1);


      sk.sphere(300)


 setInterval(function () {
   if (sk.mouseIsPressed) {
    sk.fill( "#"+((1<<24)*Math.random()|0).toString(16));

    sk.sphere(200)

  } else {

  }
  sk.fill( "#"+((1<<24)*Math.random()|0).toString(16));


  sk.rotateX(1);
  sk.rotateY(1);

}, 500);

  }


}
const P5 = new p5(s)
console.log(P5)
