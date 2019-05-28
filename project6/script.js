var ball_x = 0;
var ball_y = 0;
var mouse_x = 0;
var mouse_y = 0;
var vel_x = 0;
var vel_y = 0;

const docStyle = document.documentElement.style;
const strength = 0.15;
const drag = 0.15;
// 常數項設定不加雙引號

document.addEventListener("mousemove", (event)=>{
  mouse_x=event.clientX;
  mouse_y=event.clientY;
})
// 取得滑鼠座標

function delayMotion(){
  var distance_x;
  var distance_y;

  distance_x=mouse_x-ball_x;
  distance_x*=strength;
  vel_x*=drag;
  vel_x+=distance_x;
  ball_x=ball_x+vel_x ;
  //
  distance_y=(mouse_y-ball_y);
  distance_y*=strength;
  vel_y*=drag;
  vel_y+=distance_y;
  ball_y=ball_y+vel_y;

  docStyle.setProperty("--mouseX", ball_x);
  docStyle.setProperty("--mouseY", ball_y);

  docStyle.setProperty("--scale", (vel_x+vel_y)*strength);

  requestAnimationFrame(delayMotion);
}
// 透過css將滑鼠座標賦予ball

delayMotion();
// 調用function
