let myCanvas=document.getElementById('myCanvas');
let ctx=myCanvas.getContext('2d');
myCanvas.width=window.innerWidth-50;
myCanvas.height=window.innerHeight-50;

myCanvas.addEventListener('mousemove',
   function(event){
       //console.log(event.clientX);
       //console.log(event.clientY);
       let x=event.clientX-myCanvas.offsetLeft;
       let y=event.clientY-myCanvas.offsetTop
       document.getElementById('xyPos').innerHTML='x: '+x+' | y: '+y;
   }
);


//let helicopterImg=document.getElementById('imgHelicopter');
//console.log(helicopterImg);

let helipcopterImg=new Image();
helipcopterImg.src='helicopter.png';

let mountainImg=new Image();
mountainImg.src='mountain.png';

function drawMountain(){
    ctx.beginPath();
    ctx.drawImage(mountainImg,0,myCanvas.height-mountainImg.height,myCanvas.width,myCanvas.height);
    ctx.closePath();
}
mountainImg.onload=function(){
    drawMountain();
}

//We have to wait till the image loads
helipcopterImg.onload=function(){
    ctx.beginPath();
    ctx.drawImage(helipcopterImg,50,50);
    ctx.closePath();
}


////Exercise Grab a PNG image of your choice from internet and put the image in canvas area in 100, 100 px


/////Exercise. Now we have our helicopter in the Canvas area. Lets move the helicopter across the screen and bounce back and forth. Similar to the ball bouncing from yesterday.


 let x=0;
 let y=100;
 let dx=30;
 let dy=30;

 function drawHelicopter(){
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
    
    //x +=dx;
    //y +=dy;

    ctx.clearRect(0,0,myCanvas.width,myCanvas.height); //This basically erases your canvas
    ctx.drawImage(helipcopterImg,x,y);
    drawMountain();
    ctx.closePath();
}

//setInterval(drawHelicopter,100); // 1/10 of a second periodically

////LETS TRY TO MANIPULATE THE HELICOPTER'S PATH ACCORDING TO ARROW KEYS( -> <- etc,). SO WE NEED TO HANDLE KEYPRESS/KEYUP EVENT HANDLER.

window.addEventListener('keydown',
   function(event){
       console.log(event);

       switch(event.keyCode){
           case 38:
             //keyCode 38 is arrow up
             y-=dy;
           break;

           case 40:
             //keyCode 40 is arrow down
             y+=dy;
           break;

           case 37:
             //keyCode 37 is arrow left
             x-=dx;
           break;

           case 39:
             //keyCode 39 is arrow right
             x+=dx;
           break;

           default:
            break;
       }

       drawHelicopter();
   }
);
