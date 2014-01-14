var sketchProc = function(processing) {
	
    // put variables here, just like kahn academy
    var exampleVar = 10;

    // put functions here, just like kahn academy
    var exampleFunction = function() {
	processing.rect(30, 20, 55, 55);
    };

    // this code is executed once when the program is started
    processing.setup = function() {

	// set up the size of the canvas (you probably don't want to change this!)
	processing.size(800, 600);

	// some drawing commands; feel free to change these
	processing.fill(255, 0, 0);

	// draw some text
	processing.text("Hello, World!", exampleVar, exampleVar);

	// call a function (defined up above)
	exampleFunction();
    };

    // override draw function, by default it will be called 60 times per second
    processing.draw = function() {

    };
}


// boilerplate code --you probably want to ignore this
var canvas = document.getElementById("project-canvas");
var p = new Processing(canvas, sketchProc);
