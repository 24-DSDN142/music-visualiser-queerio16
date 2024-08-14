
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(225)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  

//grid
  strokeWeight(2)
  stroke(115)
  line(0,30,height,30)
  line(0,60,height,60)
  line(0,90,height,90)
  line(0,120,height,120)
  line(0,150,height,150)
  line(0,180,height,180)
  line(0,210,height,210)
  line(0,240,height,240)
  line(0,270,height,270)
  line(0,300,height,300)
  line(0,330,height,330)
  line(0,360,height,360)
  line(0,390,height,390)
  line(0,420,height,420)
  line(0,450,height,450)
  line(0,480,height,480)
  line(0,510,height,510)
  line(0,540,height,540)
  line(0,570,height,570)
  
  line(30,0,30,width)
  line(60,0,60,width)
  line(90,0,90,width)
  line(120,0,120,width)
  line(150,0,150,width)
  line(180,0,180,width)
  line(210,0,210,width)
  line(240,0,240,width)
  line(270,0,270,width)
  line(300,0,300,width)
  line(330,0,330,width)
  line(360,0,360,width)
  line(390,0,390,width)
  line(420,0,420,width)
  line(450,0,450,width)
  line(480,0,480,width)
  line(510,0,510,width)
  line(540,0,540,width)
  line(570,0,570,width)

//shapes
  noStroke()
  // triangle(40,50,90,70,70,20)
  // triangle(140,540,300,510,208,420)
  circle(66,352,50,50)
  circle(54,103,60,60)
  quad()
//lights
  // light beams
  stroke(0)
  fill(66, 227, 245)
  quad(30,30,width,450,width,height,220,height)
  fill(245, 66, 221)
  quad(570,30,360,height,0,height,0,500)

  // light boxes
  fill(100)
  strokeWeight(5)
  line(548,0,548,45)
  line(65,0,65,45)
  strokeWeight(2)
  quad(54,20,82,47,60,65,30,30)
  quad(555,17,570,30,540,55,530,42)
  quad(7+3,30,40+3,14,87+3,61,35+3,88)
  quad(590,30,563,14,518,59,565,85)
  fill(255,0,0)



}
  