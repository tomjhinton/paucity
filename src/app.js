import 'bulma'
import './style.scss'

import p5 from "p5";
let spin =1
console.log(p5)
const s = (sk) => {
  let layers = []
  let yPos = 0;
  //let polySynth = new p5moduleSound.PolySynth();
  // sk.translate(window.innerWidth/2,window.innerHeight/2);
  sk.setup = () =>{
    sk.createCanvas(window.innerWidth, window.innerHeight,  sk.WEBGL)
    sk.background(220);
    sk.rotateY(1);
  sk.frameRate(30);




//  setInterval(function () {
//    if (sk.mouseIsPressed) {
//     sk.fill( "#"+((1<<24)*Math.random()|0).toString(16));
//
//     sk.sphere(200)
//
//   } else {
//
//   }
//   sk.fill( "#"+((1<<24)*Math.random()|0).toString(16));
//
//
//   sk.rotateX(1);
//
//
// }, 500);

  }

  sk.draw = () =>{
  sk.translate(0, 0, 0);
  sk.push();
  sk.rotateZ(sk.frameCount * 0.01);
  sk.rotateX(sk.frameCount * 0.01);
  sk.rotateY(sk.frameCount * 0.01);
  sk.box(70, 70, 70);
  sk.pop();


  }


}
const P5 = new p5(s)
console.log(P5)
