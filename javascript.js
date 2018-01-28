var canvas = document.getElementsByTagName('canvas')[0]
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d')



// while(i!=100){
// beginPath()
// moveTo()
// r = Math.round(Math.random()*254);
// g = Math.round(Math.random()*254);
// b = Math.round(Math.random()*254);
// x = Math.random()*window.innerWidth;
//   y = Math.random()*window.innerHeight;
//   var s = "rgb("+r+","+g+","+b+")"
//   console.log(s);
//   c.beginPath()
//   c.strokeStyle = s
//   c.arc(x,y,20,0,Math.PI*2,false)
//   c.stroke()
//   i++
// }

function Circle(x,y,r,v,s){
  this.x = x;
  this.y = y;
  this.r = r;
  this.dx = v;
  this.dy = v;
  this.color = s;
  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    c.arc(this.x,this.y,this.r+1,0,Math.PI*2,false);
    c.arc(this.x,this.y,this.r+2,0,Math.PI*2,false);
    c.strokeStyle = this.color;
    c.stroke();
  }
  this.update = function(){
    if(this.x+this.r+5>=window.innerWidth || this.x-this.r-5<0){
      r = Math.round(Math.random()*254);
      g = Math.round(Math.random()*254);
      b = Math.round(Math.random()*254);
      var s = "rgb("+r+","+g+","+b+")";
      this.color = s;
      this.dx = -this.dx;
    }
    if(this.y+this.r+5>=window.innerHeight || this.y-this.r-5 <0){
      r = Math.round(Math.random()*254);
      g = Math.round(Math.random()*254);
      b = Math.round(Math.random()*254);
      var s = "rgb("+r+","+g+","+b+")";
      this.color = s;
      this.dy = -this.dy
    }
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
  }
}



var circleArray = [];
for(var i=0;i<50;i++){
  r = Math.round(Math.random()*254);
  g = Math.round(Math.random()*254);
  b = Math.round(Math.random()*254);
  var s = "rgb("+r+","+g+","+b+")";
  var r = 20;
  var x = Math.random()*(window.innerWidth-r*2)+20;
  var y = Math.random()*(window.innerHeight-r*2)+20;

  var v = 4;
  circleArray.push(new Circle(x,y,r,v,s));
}
function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,window.innerWidth,window.innerHeight)
  for(var i=0;i<circleArray.length;i++){
    circleArray[i].update()
  }
}

animate();

// function animate(){
//   c.clearRect(0,0,innerWidth,innerHeight)
//   requestAnimationFrame(animate);
//   c1.update()
// }
// animate()

// function animate(){
//
//   requestAnimationFrame(animate)
//   c.clearRect(0,0,innerWidth,innerHeight)
//   c.stroke()
//   if(x+20>=innerWidth || x-20<0){
//     r = Math.round(Math.random()*254);
//     g = Math.round(Math.random()*254);
//     b = Math.round(Math.random()*254);
//     var s = "rgb("+r+","+g+","+b+")";
//     dx = -dx;
//     c.strokeStyle = s;
//     r = Math.round(Math.random()*254);
//     g = Math.round(Math.random()*254);
//     b = Math.round(Math.random()*254);
//     var s = "rgb("+r+","+g+","+b+")";
//     canvas.style.backgroundColor = s;
//   }
//   if(y+20>=innerHeight || y-20 <0){
//     r = Math.round(Math.random()*254);
//     g = Math.round(Math.random()*254);
//     b = Math.round(Math.random()*254);
//     var s = "rgb("+r+","+g+","+b+")"
//     c.strokeStyle = s;
//     r = Math.round(Math.random()*254);
//     g = Math.round(Math.random()*254);
//     b = Math.round(Math.random()*254);
//     var s = "rgb("+r+","+g+","+b+")";
//     canvas.style.backgroundColor = s;
//     dy = -dy
//   }
//     x += dx;
//   y += dy;
// }
// animate()
// }
