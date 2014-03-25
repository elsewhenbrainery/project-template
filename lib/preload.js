// set up empty hooks
var draw = function() {
    console.log("did you define a draw() function?");
    draw = function() {};
};

var setup = function() {
    console.log("did you define a setup() function?");
};

var mouseClicked = function() {
    console.log("did you define a mouseClicked() function?");
};

var mousePressed = function() {
    console.log("did you define a mousePressed() function?");
};

var keyPressed = function() {
    console.log("did you define a keyPressed() function?");
    keyPressed = function() {};
};

var mouseReleased = function() {
    console.log("did you define a mouseReleased() function?");
};

var mouseMoved = function() {
    console.log("did you define a mouseMoved() function?");
    mouseMoved = function() {};
};

var mouseDragged = function() {
    console.log("did you define a mouseDragged() function?");
    mouseDragged = function() {};
};

var mouseOver = function() {
    console.log("did you define a mouseOver() function?");
    mouseOver = function() {};
};

var mouseOut = function() {
    console.log("did you define a mouseOut() function?");
    mouseOut = function() {};
};

// allow project.js to override title
var title = function(t) {
    document.getElementById('proj-title').innerText = t;
};

