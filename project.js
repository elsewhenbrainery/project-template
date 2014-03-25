title('My Project');

// put variables here, just like kahn academy
var exampleVar = 100;

// put functions here, just like kahn academy
var exampleFunction = function() {
    
    // change color depending on key pressed
    if (keyIsPressed && keyCode === SPACE) {
        fill(255, 0, 0);
    } else {
        fill(0, 0, 255);
    }

    rect(300, 200, 55, 55);
};

// this code is executed once when the program is started
var setup = function() {

    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);

};

// override draw function, by default it will be called 60 times per second
var draw = function() {

    // clear the screen
    background(255, 255, 255);

    // some drawing commands; feel free to change these
    fill(255, 0, 0);

    // draw some text
    textSize(50);
    text("Hello, World!", exampleVar, exampleVar);

    textSize(20);
    text("Press the space bar...", 500, 500);

    // call a function (defined up above)
    exampleFunction();

};
