
// vocal, drum, bass, and other are volumes ranging from 0 to 100

// let img;
// let url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTn4EWFHuaWkF1D5uSSU7yrrfdakwOgkLpA&s'



function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(225)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  angleMode(DEGREES)

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




// for(let i = 0; i < 50; i+=5){
    
//   quad(54,20+i,82,47-i,60,65+i,30,30-i);
//   scale(1.2)
// }

//  
// code taken from mhf273 on p5.js editor with some modifications      https://editor.p5js.org/mhf273/sketches/rJp90Psob
push()
stroke(0)
translate(533, 183);
rotate(60)
scale (0.18)
noFill()
strokeWeight(17)
	var y = 30;
	
	beginShape();
	for (var i =0; i<10; i++) {

		vertex(i*50, y);
		if(y == -50) {
			y = 50;
		} else {
			y = -50;
		}
	}
	
	endShape();
  pop()



// shapes amd coloursss
  noStroke()
  fill(250, 209, 65)   //yellow
  push()
  scale(0.68)
  translate(154,54)
  triangle(192-50,128-50,249+17,92-62,247,157)
  pop()



  //black colour drop shadows
  fill(0)
  quad(373+4,73-42,341+4,92-42,357+4,152-42,401+4,102-42)

  push()
  scale(0.9)
  translate(230,-117)
  rotate(112)
  quad(373+4,73-42,341+4,92-42,357+4,152-42,401+4,102-42)
  pop()

  push()
  scale(0.8)
  translate(82,20)
  rect(538+6,320+6,97,52)
  pop()

  circle(562,377,43)


  //colour top layers
  push()
  scale(0.8)
  translate(82,20)
  fill(250, 163, 0)   //orange
  rect(538,320,97,52)
  pop()

  push()
  fill(250, 163, 0) 
  scale(0.9)
  translate(224,-124)
  rotate(112)
  quad(373+4,73-42,341+4,92-42,357+4,152-42,401+4,102-42)
  pop()

  fill(192, 77, 249)  //purple
  quad(373,73-50,341,92-50,357,152-50,401,102-50)
  circle(558,373,43)

  circle(56,352,93)
  fill(12, 178, 192)  //dark teal blue 
  // arc(7,232,67,67,0+49,180+49)
  
  push()
  scale(0.9)
  translate(120,10)
  arc(532,147,82,82,0-27,180-27)
  pop()
  //circle(54,103,60,60)
  scale(1)
  fill(255,0,0)
  stroke(0)

  
 
// code taken from mhf273 on p5.js editor with some modifications      https://editor.p5js.org/mhf273/sketches/rJp90Psob
push()
translate(213, 32);
rotate(146)
scale (0.2)
noFill()
strokeWeight(13)
  var y = 30;
	
  beginShape();	
  for (var i =0; i<10; i++) {

		vertex(i*50, y);
		if(y == -50) {
			y = 50;
		} else {
			y = -50;
		}
	}
	
	endShape();
  pop()


  // code taken from mhf273 on p5.js editor with some modifications      https://editor.p5js.org/mhf273/sketches/rJp90Psob
push()
translate(53, 253);
rotate(20)
scale (0.25)
noFill()
strokeWeight(13)
	var y = 30;
	
	beginShape();
	for (var i =0; i<10; i++) {

		vertex(i*50, y);
		if(y == -50) {
			y = 50;
		} else {
			y = -50;
		}
	}
	
	endShape();
  pop()

//lights
  // /light beams
  
  noStroke()
  fill(66, 227, 245)
  quad(30,30,width,450,width,height,220,height)
  fill(245, 66, 221)
  quad(570,30,360,height,0,height,0,500)

  // light boxes
  stroke(2)
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



// WHAM!! BAM!!
  //line(227,200,220,219)
  // line(110,296,128,373)
  // line(110,296,146,288)
  // line(146,288,150,307)
  // line(150,307,167,288)
  // line(167,288,173,318)
  // line(173,318,187,299)
  // line(187,299,222,301)
  // line(222,301,171,380)
  // line(171,380,157,348)
  // line(157,348,128,373)


  beginShape()
  vertex(128,373)
  vertex(110,296)
  vertex(146,288)
  vertex(150,307)
  vertex(167,288)
  vertex(173,318)
  vertex(187,299)
  vertex(222,301)
  vertex(171,380)
  vertex(157,348)
  endShape()


}
  