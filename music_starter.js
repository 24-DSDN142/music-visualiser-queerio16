
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  

  eye = map(drum,0,100,2,20)
  scale(2)  
  bezier(35,54,20,20,80,20,65,54) //head
  fill(255)
  circle(41,38,eye,eye)
  circle(59,38,eye,eye)
  bezier(50,150,-10,85,25,50,50,50) //left body left
  bezier(50,150,110,85,75,50,50,50) //left body right
  fill(79, 121, 66)
  bezier(71,122,87,128,77,152,60,138) //flipper right
  bezier(29,122,13,128,23,152,40,138) //flipper left

  bezier(50,300-10-150,-10+10,235-10-150,25+10,200+7-150,50,200+7-150) //left body left
  bezier(50,300-10-150,110-10,235-10-150,75-10,200+7-150,50,200+7-150) //left body right

  bezier(28,59,5,52,-5,70,18,78)
  bezier(71,59,94,52,104,70,82,78)
  
   

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