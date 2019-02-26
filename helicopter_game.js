let myCanvas=document.getElementById('myCanvas');
let ctx=myCanvas.getContext('2d');
myCanvas.width=window.innerWidth-50;
myCanvas.height=window.innerHeight-50;

//ctx.globalCompositeOperation='destination-over';

let bar1Y=null;
let bar2Y=null;
let bar3Y=null;
let bar4Y=null;
let bar5Y=null;

let gameFinished=false;

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

function drawObstacles(){
    //Draw Obstacles method will basically draw obstacles on screen
    //Lets draw 5 random height bars on the screen
    ctx.beginPath();
    let barX=0;
    let minBarHeight=myCanvas.height*.3;
    let barWidth=50;
    for(let i=0; i<5; i++){
        barX +=(myCanvas.width/5);
        let barHeight=minBarHeight+Math.round((myCanvas.height-minBarHeight)*Math.random()) - helipcopterImg.height;
        console.log('barX:',barX,'barY:',myCanvas.height,'barWidth:',barWidth,'barHeight:',barHeight);
        let barY=myCanvas.height-barHeight; 
        ctx.fillStyle='red';
        ctx.rect(barX,barY,barWidth,barHeight);
        ctx.fill();
        //ctx.rect(x,y,width,height);
        
        switch(i){
            case 0:
               bar1Y=barY;
             break;

             case 1:
               bar2Y=barY;
             break;

             case 2:
               bar3Y=barY;
             break;

             case 3:
               bar4Y=barY;
             break;

             case 4:
               bar5Y=barY;
             break;

             default:
               break;
            
        }
    }
    /*
    ctx.drawImage(mountainImg,0,myCanvas.height-mountainImg.height,myCanvas.width,myCanvas.height);
    */
    ctx.closePath();
}

//We have to wait till the image loads
helipcopterImg.onload=function(){
    ctx.beginPath();
    ctx.drawImage(helipcopterImg,50,50);
    ctx.closePath();
}

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
    

    ctx.clearRect(0,0,myCanvas.width,myCanvas.height); //This basically erases your canvas
    ctx.drawImage(helipcopterImg,x,y);
    ctx.closePath();
    drawObstacles();

    //We can add logic for COLLISION below
    console.log(bar1Y,bar2Y,bar3Y,bar4Y,bar5Y)
    if(bar1Y<y || bar2Y<y || bar3Y<y || bar4Y<y || bar5Y<y){ //We have collison
       console.log('COLLISON!');
       //If we have collison then just stop timer and score
       gameFinished=true;
    }
    else{
        console.log('NO COLLISON!');
    }
}

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

/*
  let d1=Date();
  d1.getMinutes();
  d1.getSeconds();
  d1.getMillisecods();
*/
let theScore=0;
let secs=0;
let mins=0;
setInterval(
   function(){
    if(gameFinished==false){
    secs++;
    theScore+=10;
    if(secs%60==0){
        secs=0;
        mins++;
    }
    document.getElementById('theTimer').innerHTML=`Time: ${mins} : ${secs}`;
    document.getElementById('theScore').innerHTML=`Score: ${theScore}`;
   }
},
   1000
);

/**
 * YOUR TASKS!
 * So now you have to implement the following. On Game start, you have to auto move the helicopter at certain speed(setInterval). And also to make it better, you can make the helicopter going down diagonally. 
 * 
 * ALSO FIX THE BUG ON UP DOWN ARRAY
 * 
 */
 //This is being called as your page loads.
 setInterval(
     function(){
        x+=dx; //this will move helicopter horizontally
        //y+=dy;
        drawHelicopter();
     },
     300);

/***NEXT TO DOS
 * 
 * Now we have our helicopter moving automatically. And we also have control with the arrow keys.
 * 
 * Now we need to handle COLLISON! If Helicopter touches any of the bar, it will crash or GAME OVER. And the score and watch also needs to stop
 */
