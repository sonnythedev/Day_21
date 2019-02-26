let myCanvas=document.getElementById('myCanvas');
let ctx=myCanvas.getContext('2d');

myCanvas.width=window.innerWidth-50;
myCanvas.height=window.innerHeight-50;

window.addEventListener('resize',
    function(event){
       //If you want to resize your canvas, make sure you redraw your elements in canvas
    }
);

myCanvas.addEventListener('mousemove',
   function(event){
       //console.log(event.clientX);
       //console.log(event.clientY);
       let x=event.clientX-myCanvas.offsetLeft;
       let y=event.clientY-myCanvas.offsetTop
       document.getElementById('xyPos').innerHTML='x: '+x+' | '+'y: '+y;
   }
);

//We want to draw a Rectangle at 50,50 position(x, y coordinate). And the Rectangle needs to be 100 px wide and 50 px high. We want to change the lining of the Rectangle to be blue(#0000ff). We want to make the lining thicker.
//ctx.globalCompositeOperation='destination-over';
ctx.beginPath();
ctx.rect(50,50,100,50);
ctx.lineWidth='5';
ctx.strokeStyle='#0000ff';
ctx.stroke();
ctx.closePath();

//Fill a red(#ff0000) Rectangle which is 200px wide and 100px high. And you need to put the Rectangle exactly on  100,100 coordinate(x,y).
ctx.beginPath();
ctx.rect(100,100,200,100);
ctx.fillStyle='#ff0000';
ctx.fill();
//ctx.globalCompositeOperation='destination-over';
ctx.closePath();

//Draw a Triangle. The three points of the Triangle would be:

 //x1,y1: 250,50
 //x2,y2: 50,250
 //x3,y3: 375,250

 //The color of the triangle should be green. And the thickness should be 5px
 ctx.beginPath();
 ctx.moveTo(250,50);
 ctx.lineTo(50,250);
 ctx.lineTo(375,250);
 //ctx.globalCompositeOperation='destination-over';
 ctx.closePath();
 //ctx.lineTo(250,50);
 ctx.strokeStyle='#00ff00';
 ctx.lineWidth=10;
 ctx.lineJoin='round';
 ctx.stroke();

 ////LETS DRAW A CIRCLE! The radius should be 50px. And the x and y coordinate of the Circle should be 250,250. The lining of the circle should be 10px and color should be orange.
/*
 ctx.beginPath();
 ctx.arc(250,250,50,0,Math.PI*2,true);
 //ctx.strokeStyle='orange';
 ctx.fillStyle='orange';
 ctx.lineWidth=10;
 //ctx.stroke();
 ctx.fill();
 ctx.closePath();
*/

 let x=0;
 let y=320;
 let dx=10;
 
 function drawBall(){
    ctx.beginPath();
    x +=dx;
    ctx.arc(x,y,50,0,Math.PI*2,true);
    ctx.fillStyle='red';
    ctx.lineWidth=10;
    //ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    ctx.fill();
    ctx.closePath();
}

//setInterval(drawBall,500); //every half a second


