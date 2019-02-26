let myCanvas=document.getElementById('myCanvas');
let ctx=myCanvas.getContext('2d');

myCanvas.width=window.innerWidth-50;
myCanvas.height=window.innerHeight-50;

window.addEventListener('resize',
    function(event){
       
    }
);

myCanvas.addEventListener('mousemove',
   function(event){
       //console.log(event.clientX);
       //console.log(event.clientY);
       let x=event.clientX-myCanvas.offsetLeft;
       let y=event.clientY-myCanvas.offsetTop
       document.getElementById('xyPos').innerHTML=x+'|'+y;
   }
);

let theImg=document.getElementById('theImg_1');
theImg.onload=function(){
        ctx.drawImage(theImg,50,50,theImg.width,theImg.height);
};




 let x=0;
 let y=100;
 let dx=10;
 let dy=30;

 ////Modify this code so we will have a boundary for the ball. As the balls hits the right boundary, it will start going backward.

 ////Lets modify so the y will decrement once it's hit the boundary
 
 function drawBall(){
    ctx.beginPath();
    //This makes sure of right and left boundary(x)
    if(x+50>myCanvas.width ||x<0){ //adding 
        dx=-dx;
        y +=dy;
    }
    //This makes sure of top and bottom boundary(y)
    if(y+50>myCanvas.height ||y<0){
        console.log('hit top bottom boundary!');
        console.log(x,y);
        dy=-dy;
        y +=dy;
    }
    
    x +=dx;
    //y +=dy;
    
    ctx.arc(x,y,50,0,Math.PI*2,true);
    ctx.fillStyle='red';
    ctx.lineWidth=10;
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    ctx.fill();
    ctx.closePath();
}

setInterval(drawBall,100); // 1/10 of a second periodically


