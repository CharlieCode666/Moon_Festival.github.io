window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
/*===========================================*/
  
  var dir = 0;
  var score = 1;
  
  var x = 194;
  var y = 110;
/*==============*/
  var x1 = 191;
  var y1 = 110;
  
  var speed_1 = 3;
  
  var m1 = 128;
  var n1 = 60;
/*==============*/
  var x2 = 286;
  var y2 = 110;
  
  var speed_2 = 10;
  
  var m2 = 200;
  var n2 = 60;
  
/*===========================================*/
  
  let plus = document.getElementById('plus');
plus.ontouchstart = function() {
  dir = 1;
}
plus.ontouchend = function() {
  dir = 0;
}
  
/*===========================================*/
  
  function draw(){
  
  context.clearRect(0, 0, 388, 220)
  
  context.beginPath();
    
    context.font = '20px Montserrat';
    context.fillStyle = '#00ffff';
    if(score <= 10){
    context.fillText("初 " + score, 330, 210);
    }
    else{
    context.fillText(score, 330, 210);
    }
    
    if(score == 15){
    context.font = '30px Montserrat';
    context.fillStyle = '#ff6600';
    context.fillText("🎊中秋節快樂🎊", 80, 210);
    }
  
  context.arc(x, y, 40, 0, 2*Math.PI);
  context.fillStyle = "yellow";
  context.fill();
  
  context.lineWidth = 2
  context.strokeStyle = "#ffffff";
  context.stroke();
  
  if(score == 15){
    context.arc(x, y, 40, 0, 2*Math.PI);
  context.fillStyle = "yellow";
  context.fill();
  
  context.lineWidth = 2
  context.strokeStyle = "#ffffff";
  context.stroke();
  }
  
/*===========================================*/
  
  context.beginPath();
  
  context.arc(x1, y1, 50, 0, 2*Math.PI);
  context.fillStyle = "black";
  context.fill();
 
/*===========================================*/
  
  context.beginPath();
  
  context.rect(m1, n1, 60, 120,);
  context.fillStyle = "black";
  context.fill();
  
/*===========================================*/

  context.beginPath();
  
  context.arc(x2, y2, 50, 0, 2*Math.PI);
  context.fillStyle = "black";
  context.fill();

/*===========================================*/

  context.beginPath();
  
  if(score >= 21){
  context.rect(m2, n2, 60, 120,);
  context.fillStyle = "black";
  context.fill();
  }

/*===========================================*/

  
/*====== +1 ======*/
  if(dir == 1 && score < 30){
   if(x1 > 50 && score >= 1 && score < 30){
     score += 1;
    if(score >= 2 && score < 30){
      speed_1 = 5;
     }
     dir = 0;
     x1 -= speed_1;
     if(score > 8 && m1 >= 20 && score < 30){
       m1 -= speed_1;
       x1 = 51;
   }
 }
  if(x2 >= 153 && score >= 18){
   x2 -= speed_2;
   m2 -= 2;
    if(score >= 21){
     speed_2 = 6.5;
   }
}
  }

/*===========================================*/
  
  window.requestAnimationFrame(draw);
  }
    draw();

}
