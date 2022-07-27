tintColor=""
function preload(){

}
function setup(){
  canvas=createCanvas(500,350)
  canvas.position(50,200)
  video=createCapture(VIDEO)
  video.hide()
}
function draw(){
    image(video,0,0,500,350)
    tint(tintColor)
}
function take_snapshot(){
    save("MyPic.png")
}
function applyFilter(){
   tintColor=document.getElementById("tint_color").value
}