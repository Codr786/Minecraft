var canvas = new fabric.Canvas("canvas");

block_image_width = 30;
block_image_height = 30;

player_x = 8;
player_y = 8;

var player_object = "";

function player_add()
{
    fabric.Image.fromURL("player.png" , function(Img){
    player_object = Img;

    player_object.scaleToWidth(180);
    player_object.scaleToHeight(150);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image , function(Img){
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);
    });  
}
window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
keyPressed = e.KeyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == "80")
{
    console.log("P and shift key is pressed");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}
if(e.shiftKey && keyPressed == "77")
{
    console.log(" M and shift key is pressed");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
} 

    if (keyPressed == "38") 
    {
        up();
        console.log("up");
    }
    if (keyPressed == "40") 
    {
        down();
        console.log("down");
    }
    if (keyPressed == "37") 
    {
        left();
        console.log("left");
    }
    if (keyPressed == "39") 
    {
        right();
        console.log("right");
    }
    if (keyPressed == "87") 
    {
        new_image("wall.jpg");
        console.log("W");
    }
    if (keyPressed == "71") 
    {
        new_image("ground.png");
        console.log("G");
    }
    if (keyPressed == "76") 
    {
        new_image("light_green.png");
        console.log("L");
    }
    if (keyPressed == "68") 
    {
        new_image("dark_green.png");
        console.log("D_G");
    }
    if (keyPressed == "89") 
    {
        new_image("yellow_wall.png");
        console.log("Y");
    }
    if (keyPressed == "84") 
    {
        new_image("trunk.jpg");
        console.log("T");
    }
    if (keyPressed == "67") 
    {
        new_image("cloud.jpg");
        console.log("C");
    }
    if (keyPressed == "82") 
    {
        new_image("roof.jpg");
        console.log("R");
    }
    if (keyPressed == "85") 
    {
        new_image("unique.png");
        console.log("U");
    }
}
function up()
{
    if (player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("height = " + block_image_height);
        console.log("When up Arrow is pressed , X = " + player_x + ", Y =  "+ player_y);
        canvas.remove(player_object);
        player_add();
    }
}

function down()
{
    if (player_y <=580)
    {
        player_y = player_y + block_image_height;
        console.log("height = " + block_image_height);
        console.log("When down Arrow is pressed , X = " + player_x + ", Y =  "+ player_y);
        canvas.remove(player_object);
        player_add();
    }
}

function left()
{
    if (player_x >=0)
    {
        player_x = player_x - block_image_width;
        console.log("width = " + block_image_width);
        console.log("When left Arrow is pressed , X = " + player_x + ", Y =  "+ player_y);
        canvas.remove(player_object);
        player_add();
    }
}

function right()
{
    if (player_x <=800)
    {
        player_x = player_x - block_image_width;
        console.log("width = " + block_image_width);
        console.log("When right Arrow is pressed , X = " + player_x + ", Y =  "+ player_y);
        canvas.remove(player_object);
        player_add();
    }
}


