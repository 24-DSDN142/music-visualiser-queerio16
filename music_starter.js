
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(225)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  strokeWeight(2)
  line(0,40,height,40);
  line(0,80,height,80);
  line(0,120,height,120);
  line(0,160,height,160);
  line(0,200,height,200);
  line(0,240,height,240); 
  line(0,280,height,280);
  line(0,320,height,320);
  line(0,360,height,360);
  line(0,400,height,400);
  line(0,440,height,440);
  line(0,480,height,480);
  line(0,520,height,520)
  line(0,560,height,560)

  line(40,0,40,width)
  line(80,0,80,width)
  line(120,0,120,width)
  line(160,0,160,width)
  line(200,0,200,width)
  line(240,0,240,width)
  line(280,0,280,width)
  line(320,0,320,width)
  line(360,0,360,width)
  line(400,0,400,width)
  line(440,0,440,width)
  line(480,0,480,width)
  line(520,0,520,width)
  line(560,0,560,width)
   

}

  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;

// vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);