canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_img = "mars.jpg";
rover_img = "rover.png";

function add() {

background_imgTag = new Image();
background_imgTag.onload = upload_background;
background_imgTag.src = background_img;

rover_imgTag = new Image();
rover_imgTag.onload = upload_rover;
rover_imgTag.src = rover_img;

}

function upload_background() {
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
    
}
function upload_rover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
} 




window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
     console.log(keyPressed);

     if(keyPressed == '38')
      { 
          up(); 
          console.log("up");
        }

        if(keyPressed == '40')
        { 
            down(); 
            console.log("down");
          }
  
          if(keyPressed == '37')
          { 
              left(); 
              console.log("left");
            }

            if(keyPressed == '39')
            { 
                right(); 
                console.log("right");
              }
      
    


    
}

function up() {

    if (rover_y >= 0){

        rover_y = rover_y - 10;
        console.log("When Up Arrow pressed, X = " + rover_x + " Y = " + rover_y);
        upload_background();
        upload_rover();
 
    }
}

function down() {

    if (rover_y <= 600) {

        rover_y = rover_y + 10;
        console.log("When Down Arrow pressed, X = " + rover_x + " Y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

function right() {

    if (rover_x <= 800) {

        rover_x = rover_x + 10;
        console.log("When Right Arrow pressed, X = " + rover_x + " Y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

function left() {

    if (rover_x >= 0) {

        rover_x = rover_x - 10;
        console.log("When Left Arrow pressed, X = " + rover_x + " Y = " + rover_y);
        upload_background();
        upload_rover();
    }
}

