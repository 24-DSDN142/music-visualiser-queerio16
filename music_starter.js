
// vocal, drum, bass, and other are volumes ranging from 0 to 100

// let img;
// let url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTn4EWFHuaWkF1D5uSSU7yrrfdakwOgkLpA&s'



function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(RGB)
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


// SHAPES AND COLOURS
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

// shapes avd coloursss
  noStroke()
  fill(250, 163, 0)
  push()
  scale(0.68)
  translate(154,54)
  triangle(192-50,128-50,249+17,92-62,247,157)
  pop()

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
  
  push()
  fill(244, 83, 138)
  translate(340,-170)
  circle(56,352,77)
  pop()

  push()
  scale(0.9)
  translate(120,10)
  arc(532,147,82,82,0-27,180-27)
  pop()

  push()
  scale(1.2)
  rotate(50)
  fill(0)
  translate(-50,-40)
  arc(532+5,147+4,82,82,0-27,180-27)
  fill(12, 178, 192)
  arc(532,147,82,82,0-27,180-27)
  pop()

  push()
  scale(0.72)
  rotate(50)
  translate(504,-14)
  fill(0)
  triangle(192-50,128-50,249+17,92-62,247,157)
  fill(250, 163, 0)
  triangle(192-50-10,128-50+10,249+17-10,92-62+10,247-10,157+10)
  pop()

  push()
  fill(0)
  scale(-1.2,1.2)
  translate(95,-12)
  rotate(130)
  quad(373+4+6,73-42,341+4+6,92-42,357+4+6,152-42,401+4+6,102-42)
  fill(12, 178, 192) 
  quad(373+4,73-42,341+4,92-42,357+4,152-42,401+4,102-42)
  pop()

push()
scale(1.6)
translate(-325,-182)
  fill(0)
  circle(562,377,43) // black
  fill(244, 83, 138)
  circle(558,373,43) //top
pop()

  push()
  fill(244, 83, 138) //strawberry sour
  translate(600/2 + 478.8, 600/2 + 132.3) // i used chatgpt to get this because i lost the arc into the void and couldn't find it at all
  translate(-100,-55)
  scale(1)
  rotate(185)

  arc(532,147,82,82,0-27,180-27)
  pop()

  scale(1)
  fill(255,0,0)
  stroke(0)

push()
  scale(0.85)
  noStroke()
  translate(-125,10)
  rotate(35)
  fill(0)
  rect(538+6,320+6,97,52)
  fill(244, 83, 138)
  rect(538,320,97,52)
pop()
 
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
translate(537, 502);
rotate(-10)
scale(-1,-1)
scale (0.4)
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


// light beams
if (other > 50) {
  fill(66, 227, 245);
} else {
  noFill();
}

noStroke();
 quad(30, 30, width, 450, width, height, 220, height);

if (bass < 55) {
  fill(245, 66, 221);
} else {
  noFill();
}
 quad(570, 30, 360, height, 0, height, 0, 500);


  // light boxes

  // map an on off sequence 
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

// maps!!

voc = map(vocal,0,100,0.5,1.5)
 
colorMode(RGB)
red = color(252, 45, 45)
purple = color(176, 48, 255)
green = color(86, 255, 48)


// i was having issues with this section of the code breaking or not doing what i wanted so i used chatgpt to help me with the errors,
let col;
if (drum < 50) {
  // Interpolate between purple and green
  col = lerpColor(red, green, map(drum, 20, 50, 0, 1));
} else {
  // Interpolate between green and red
  col = lerpColor(green, purple, map(drum, 50, 80, 0, 1));
}


  // WHAM!! BAM!!

// H
push()
translate(300,300)
// noStroke()
scale(voc)
fill(col)

  beginShape()
  vertex(224-7-300,280-26-300)
  vertex(254-7-300,279-26-300)
  vertex(250-7-300,313-26-300)
  vertex(264-7-300,312-26-300)
  vertex(265-7-300,295-26-300)
  vertex(294-7-300,294-26-300)
  vertex(284-7-300,371-26-300)
  vertex(250-7-300,372-26-300)
  vertex(252-7-300,352-26-300)
  vertex(237-7-300,354-26-300)
  vertex(235-7-300,370-26-300)
  vertex(208-7-300,374-26-300)
  vertex(224-7-300,280-26-300)
  endShape()


//W
  beginShape()
  vertex(128+6-7-300,373-26-300)
  vertex(110+6-7-300,296-26-300)
  vertex(146+6-7-300,288-26-300)
  vertex(150+6-7-300,307-26-300)
  vertex(167+6-7-300,288-26-300)
  vertex(173+6-7-300,318-26-300)
  vertex(187+6-7-300,299-26-300)
  vertex(222+6-7-300,301-26-300)
  vertex(171+6-7-300,380-26-300)
  vertex(157+6-7-300,348-26-300)
  vertex(128+6-7-300,373-26-300)
  endShape()


//M
  beginShape()
  vertex(367-7-300,288-26-300)
  vertex(386-7-300,317-26-300)
  vertex(421-7-300,284-26-300)
  vertex(424-7-300,363-26-300)
  vertex(398-7-300,364-26-300)
  vertex(396-7-300,343-26-300)
  vertex(378-7-300,367-26-300)
  vertex(369-7-300,342-26-300)
  vertex(362-7-300,366-26-300)
  vertex(340-7-300,365-26-300)
  vertex(367-7-300,288-26-300)
  endShape()


//A
  beginShape()
  vertex(264-7-300,385-26-300)
  vertex(327-7-300,274-26-300)
  vertex(345-7-300,376-26-300)
  vertex(321-7-300,382-26-300)
  vertex(319-7-300,370-26-300)
  vertex(298-7-300,371-26-300)
  vertex(291-7-300,381-26-300)
  vertex(264-7-300,384-26-300)
  vertex(307-7-300,352-26-300)
  vertex(321-7-300,352-26-300)
  vertex(317-7-300,332-26-300)
  vertex(307-7-300,352-26-300)
  endShape()

// !!!
  beginShape()
  vertex(461-7-300,268-26-300)
  vertex(498-7-300,267-26-300)
  vertex(464-7-300,327-26-300)
  vertex(454-7-300,328-26-300)
  vertex(461-7-300,268-26-300)
  endShape()

  beginShape()
  vertex(460-7-300,330-26-300)
  vertex(462-7-300,344-26-300)
  vertex(478-7-300,343-26-300)
  vertex(463-7-300,356-26-300)
  vertex(464-7-300,374-26-300)
  vertex(454-7-300,364-26-300)
  vertex(428-7-300,373-26-300)
  vertex(440-7-300,355-26-300)
  vertex(428-7-300,343-26-300)
  vertex(448-7-300,344-26-300)
  vertex(460-7-300,330-26-300)
  vertex(460-7-300,330-26-300)
  endShape()

  pop()

// I wanted to add lyrics as a final touch to the project but I discovered the words.txt file didn't generate so I can't :( )

}
  