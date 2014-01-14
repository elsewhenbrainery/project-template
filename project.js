function sketchProc(processing) {

    // this code is executed once when the program is started
    processing.setup = function() {
	processing.size(800, 600);
	processing.text("Hello, World!", 10, 10);
    }

    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {

    };
}

var canvas = document.getElementById("project-canvas");

// attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketchProc);