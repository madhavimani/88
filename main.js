
// Create canvas variable
var canvas=new fabric.canvas('my canvas');
//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.image.fromUrl("golf-h1.png", function(img){
		hole_obj= img;
		hole_obj.scaletowidth(50);
		hole_obj.scaletoheight(50);
		hole_obj.set({
top:ball_x,
left:ball_y
		});
		canvas.add(hole_obj)
	)};

	new_image();


function new_image()
{
	// write code to Upload ball image on canvas
	fabric.image.fromUrl("golf-h1.png", function(img){
		ball_obj= img;
		ball_obj.scaletowidth(50);
		ball_obj.scaletoheight(50);
		ball_obj.set({
top:ball_x,
left:ball_y
		});
		canvas.add(ball_obj)
	)};

	
	

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="YOU HAVE HIT A GOAL!!!!!";
		document.getElementById("mycanvas").style.bordercolour="red";
	}
	
	else{
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
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y <=450){
			ball_y=ball_y+block_image_height;
			console.log("block_image_height  ="  +block_image_height)
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y <=450){
			ball_y=ball_y+block_image_height;
			console.log("block_image_height  ="  +block_image_height)
		 }
	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x=ball_x+block_image_width;
			console.log("block_image_width  ="  +block_image_width)
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x=ball_x+block_image_width;
			console.log("block_image_width  ="  +block_image_width)
		}
	}
	
}

