//宣言
var audio =new Audio("bgm.mp3");
//var audio =new Audio("clear.mp3");
//var audio =new Audio("gameover.mp3");


const DEBUG = true;
let GAMEOVER =false;
let GAMECLEAR = false;
let END =false;
let score = 0;
let time =0;
const GAME_SPEED = 1000/144;


const SCREEN_W = 180;
const SCREEN_H = 320;

const CANVAS_W = SCREEN_W *2;
const CANVAS_H = SCREEN_H *2;

const FIELD_W = SCREEN_W *2;
const FIELD_H = SCREEN_H *2;

const STAR_MAX=300;

let can = document.getElementById("can");
let con = can.getContext("2d");
can.width  = CANVAS_W;
can.height = CANVAS_H;


let vcan = document.createElement("canvas");
let vcon = vcan.getContext("2d");
vcan.width  = CANVAS_W;
vcan.height = CANVAS_H;
//キーボード関数
let key = [];
document.onkeydown = function(e)
{
    key[e.keyCode]=true;
    if(GAMEOVER ==true && key[82])
    {
        delete jiki;
        delete teki;
        delete teki2;
        delete teki3;
        delete teki4;
        score = 0;
        time = 0;
        jiki = new Jiki();
        GAMEOVER = false;
        END =false;
     
        
      
    }


    if(GAMECLEAR ==true && key[82])
    {
        delete jiki;
        delete teki2;
        delete teki3;
        delete teki4;
        score = 0;
        time = 0;
        jiki = new Jiki();
        GAMECLEAR = false;
        END = false;
    
      
    }
}
document.onkeyup = function(e)
{
    key[e.keyCode]=false;
}



//敵クラス
class Teki
{
    constructor(x,y,vx,vy)
    {   
        this.sn =2;
        this.x=x;
        this.y=y;
        this.vx=vx;
        this.vy=vy;
        this.kill =false;
        this.w=22;
        this.h=15;
        }
    
    update()
    {
      this.x +=this.vx;
      this.y +=this.vy;

      if(this.x<0 || this.x>FIELD_W<<8 || this.y < 0 || this.y>FIELD_H<<8)
      this.kill =true;

      for(let i =0;i<teki.length;i++)
      {
              if(checkHit(jiki.x,jiki.y,jiki.w,jiki.h,teki[i].x,teki[i].y,teki[i].w,teki[i].h) && GAMECLEAR!=true)
              {
               
             
               
                 GAMEOVER = true ;
               
                 

              
              }
      }
    }
    draw()
    {
      drawSprite(this.sn,this.x,this.y);
    }

}

let teki=[];

class Teki2
{
    constructor(x,y,vx,vy)
    {   
        this.sn =3;
        this.x=x;
        this.y=y;
        this.vx=vx;
        this.vy=vy;
        this.kill =false;
        this.w=16;
        this.h=6;
        }
    
    update()
    {
      this.x +=this.vx;
      this.y +=this.vy;

      if(this.x<0 || this.x>FIELD_W<<8 || this.y < 0 || this.y>FIELD_H<<8)
      this.kill =true;

      for(let i =0;i<teki2.length;i++)
      {
              if(checkHit(jiki.x,jiki.y,jiki.w,jiki.h,teki2[i].x,teki2[i].y,teki2[i].w,teki2[i].h)&& GAMECLEAR!=true)
              {
               
               
               
                 GAMEOVER = true ;
              
              }
      }
    }
    draw()
    {
      drawSprite(this.sn,this.x,this.y);
    }

}

let teki2=[];


class Teki3
{
    constructor(x,y,vx,vy)
    {   
        this.sn =5;
        this.x=x;
        this.y=y;
        this.vx=vx;
        this.vy=vy;
        this.kill =false;
        this.w=22;
        this.h=15;
        }
    
    update()
    {
      this.x +=this.vx;
      this.y +=this.vy;

      if(this.x<0 || this.x>FIELD_W<<8 || this.y < 0 || this.y>FIELD_H<<8)
      this.kill =true;

      for(let i =0;i<teki3.length;i++)
      {
              if(checkHit(jiki.x,jiki.y,jiki.w,jiki.h,teki3[i].x,teki3[i].y,teki3[i].w,teki3[i].h)&& GAMECLEAR!=true)
              {
               
               
               
                 GAMEOVER = true ;
              
              }
      }
    }
    draw()
    {
      drawSprite(this.sn,this.x,this.y);
    }

}

let teki3=[];


class Teki4
{
    constructor(x,y,vx,vy)
    {   
        this.sn =4;
        this.x=x;
        this.y=y;
        this.vx=vx;
        this.vy=vy;
        this.kill =false;
        this.w=11;
        this.h=3;
        }
    
    update()
    {
      this.x +=this.vx;
      this.y +=this.vy;

      if(this.x<0 || this.x>FIELD_W<<8 || this.y < 0 || this.y>FIELD_H<<8)
      this.kill =true;

      for(let i =0;i<teki4.length;i++)
      {
              if(checkHit(jiki.x,jiki.y,jiki.w,jiki.h,teki4[i].x,teki4[i].y,teki4[i].w,teki4[i].h) && GAMECLEAR!=true )
              {
               
                teki4[i].kill=true;
                 
               
                 GAMECLEAR = true ;
              
              }

              if(GAMEOVER==true){ teki4[i].kill=true;}
      }
    }
    draw()
    {
      drawSprite(this.sn,this.x,this.y);
    }

}

let teki4=[];



//弾クラス
class Tama
{
    constructor(x,y,vx,vy)
    {   
        this.sn =1;
        this.x=x;
        this.y=y;
        this.vx=vx;
        this.vy=vy;
        this.kill =false;
        this.w=4;
        this.h=12;
        }
    
    update()
    {
      this.x +=this.vx;
      this.y +=this.vy;

      if(this.x<0 || this.x>FIELD_W<<8 || this.y < 0 || this.y>FIELD_H<<8)
      this.kill =true;

      for(let i =0;i<teki.length;i++)
      {
          if(!teki[i].kill)
          {
              if(checkHit(this.x,this.y,this.w,this.h,teki[i].x,teki[i].y,teki[i].w,teki[i].h))
              {
                  teki[i].kill=true;
                  this.kill=true;
                  score =score +100;
                  break;
              }
          }
      }


       for(let i =0;i<teki3.length;i++)
      {
          if(!teki3[i].kill)
          {
              if(checkHit(this.x,this.y,this.w,this.h,teki3[i].x,teki3[i].y,teki3[i].w,teki3[i].h))
              {
                  teki3[i].kill=true;
                  this.kill=true;
                  score =score +500;
                  break;
              }
          }
      }



      for(let i =0;i<teki2.length;i++)
      {
          if(!teki2[i].kill)
          {
              if(checkHit(this.x,this.y,this.w,this.h,teki2[i].x,teki2[i].y,teki2[i].w,teki2[i].h))
              {
                  teki2[i].kill=true;
                  this.kill=true;
                  score =score +1000;
                  break;
                }
         }
    }
}
    draw()
    {
      drawSprite(this.sn,this.x+2300,this.y-2000);
    }

}

let tama=[];

//自機クラス
class Jiki
{
    constructor()
    {
       this.x = 80<<8;
       this.y = 300<<8; 
       this.speed = 512;
       this.reload =0;
       this.reload2=0;
       this.w=21;
    　 this.h=15;
    }
    update()
    { 
      if(key[13]&&this.reload==0)
      {
          tama.push(new Tama(this.x,this.y,0,-2000));
          this.reload=4;
          if(++this.reload2==4)
          {
              this.reload=20;
              this.reload2=0;
          }
      }
      if(!key[13])this.reload=this.reload2=0;
      if(this.reload > 0)this.reload--;
      if(key[65]&&this.x>this.speed)this.x-=this.speed;
      if(key[68]&&this.x<39000)this.x+=this.speed;
      if(key[87]&&this.y>this.speed)this.y-=this.speed;
      if(key[83]&&this.y<76800)this.y+=this.speed;
   
  
   
    }
    draw()
    {
      drawSprite(0,this.x,this.y);
     
    }

}
let jiki = new Jiki();

//画像ファイル読込み
let spriteImage = new Image();
spriteImage.src="sprite.png";


//画像クラス
class Sprite
{
    
constructor(x,y,w,h)
{
this.x=x;
this.y=y;
this.w=w;
this.h=h;
}
}
let sprite=[ new Sprite(0,0,22,16),//自機 0
             new Sprite(22,0,5,12),//弾　1
             new Sprite(27,0,22,15),//敵青 2
             new Sprite(49,0,16,6),//UFO 3
             new Sprite(65,0,11,12),//ゴールフラグ 4
             new Sprite(76,0,22,15)];//敵赤 5

function drawSprite(snum,x,y)
 {
     let sx =sprite[snum].x;
     let sy =sprite[snum].y;
     let sw =sprite[snum].w;
     let sh =sprite[snum].h;

     let px =x>>8;
     let py =y>>8;

     vcon.drawImage(spriteImage,sx,sy,sw,sh,px,py,sw,sh);
 }
//乱数生成
function rand(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}


//当たり判定
function checkHit(x1,y1,w1,h1,  x2,y2,w2,h2)
{
   let left1=x1>>8;
   let right1=left1+w1;
   let top1=y1>>8;
   let bottom1=top1+h1;

   let left2=x2>>8;
   let right2=left2+w2;
   let top2=y2>>8;
   let bottom2=top2+h2;

   return (left1<=right2 &&
           right1>=left2 &&
           top1<=bottom2 &&
           bottom1>=top2
          );
}


//星クラス
class Star
{
constructor()
{
    this.x  =rand(0,FIELD_W)<<8;
    this.y  =rand(0,FIELD_H)<<8;
    this.vx = 0;
    this.vy =rand(30,200);
    this.sz =rand(1,2);
}
draw()
{
 vcon.fillStyle=rand(0,2)!=0 ?"#66f":"#aef";
 vcon.fillRect(this.x>>8,this.y>>8,this.sz,this.sz);
}
update()
{
    this.x +=this.vx;
    this.y +=this.vy;
    if(this.y>FIELD_H<<8)
    {
        this.y=0;
        this.x=rand(0,FIELD_W)<<8;
    }
}
}
let star=[];
for(let i=0;i<STAR_MAX;i++)star[i]=new Star();
con.fillStyle="Black";
con.fillRect(0,0,SCREEN_W,SCREEN_H);
for(let i=0;i<STAR_MAX;i++)star[i].draw();

setInterval(gameLoop,GAME_SPEED);



//メインループ
function gameLoop()
{

     audio.play();

    if(GAMEOVER==true || GAMECLEAR==true){audio.pause();audio.currentTime = 0;}
    if(GAMEOVER==false&& GAMECLEAR!=true)  {time++;}

    if(rand(0,10)==1 && GAMEOVER==false && GAMECLEAR!=true){
 teki.push(new Teki(rand(0,120000),0,0,300));}

   if(rand(0,1000)==1 && GAMEOVER==false && GAMECLEAR!=true){
    teki2.push(new Teki2(0,12000,100,0));}

    if(rand(0,20)==1 && GAMEOVER==false && time > 2160 && GAMECLEAR!=true){
        teki3.push(new Teki3(rand(0,120000),0,0,600));}

        if( GAMEOVER==false && time > 4320 &&  END == false && GAMECLEAR!=true){
            teki4.push(new Teki4(23000,10000,0,0));
            END =true;
        }

    for(let i=0;i<STAR_MAX;i++)star[i].update();
    for(let i=tama.length-1;i>=0;i--)
    {
        tama[i].update();
      if(tama[i].kill)tama.splice(i,1);
    }
 
    for(let i=teki.length-1;i>=0;i--)
    {
         teki[i].update();
         if(teki[i].kill)teki.splice(i,1);
    }
 
    for(let i=teki2.length-1;i>=0;i--)
    {
         teki2[i].update();
         if(teki2[i].kill)teki2.splice(i,1);
    }


    for(let i=teki3.length-1;i>=0;i--)
    {
         teki3[i].update();
         if(teki3[i].kill)teki3.splice(i,1);
    }

    for(let i=teki4.length-1;i>=0;i--)
    {
         teki4[i].update();
         if(teki4[i].kill)teki4.splice(i,1);
    }






    if(GAMEOVER!=true && GAMECLEAR!=true) jiki.update();


vcon.fillStyle="Black";
vcon.fillRect(0,0,SCREEN_W,SCREEN_H);
for(let i=0;i<STAR_MAX;i++)star[i].draw();
for(let i=0;i<tama.length;i++)tama[i].draw();

for(let i=0;i<teki.length;i++)teki[i].draw();

for(let i=0;i<teki2.length;i++)teki2[i].draw();


for(let i=0;i<teki3.length;i++)teki3[i].draw();

if(GAMEOVER!=true)for(let i=0;i<teki4.length;i++)teki4[i].draw();




if(GAMEOVER!=true && GAMECLEAR!=true)jiki.draw();



con.drawImage(vcan,0,0,SCREEN_W,SCREEN_H,0,0,CANVAS_W,CANVAS_H);

if(DEBUG)
{
    con.font="30px'Impact'";
    con.fillStyle="white";
   // con.fillText("弾:"+tama.length,5,40);
   // con.fillText("敵:"+teki.length,5,80);
    con.fillText("SCORE:"+score,5,40);
    con.fillText("TIME:"+Math.floor(time/144),5,80);

}
if(GAMEOVER == true)
{
  con.fillStyle="red";
  let s = "GAME OVER";
  let w = con.measureText(s).whdth;
  let x = 120;
  let y = 300;
  con.fillText(s,x,y);

  con.font="20px'Impact'";
  let a = "Rキーでコンティニュー";
  let b = con.measureText(s).whdth;
  let c = 90;
  let d = 350;
  con.fillText(a,c,d);


 
}

if(GAMECLEAR == true)
{ con.fillStyle="yellow";
  let s = "CLEAR!";
  let w = con.measureText(s).whdth;
  let x = 140;
  let y = 300;
  con.fillText(s,x,y);

  con.font="20px'Impact'";
  let a = "Rキーでもう一度";
  let b = con.measureText(s).whdth;
  let c = 110;
  let d = 350;
  con.fillText(a,c,d);



 
}
}
      