// set up empty hooks
var draw = function() {
    console.log("did you define a draw() function?");
    draw = function() {};
};

var setup = function() {
    console.log("did you define a setup() function?");
};

// allow project.js to override title
var title = function(t) {
    document.getElementById('proj-title').innerText = t;
}

