// define setup/draw hooks
var sketchProc = function(processing) {

    window.processing = processing;
    window.keyIsPressed = false;
    window.mouseIsPressed = false;
    window.keyCode = -1;
    window.mouseX = -1;
    window.mouseY = -1;
    window.SPACE = 32;

    processing.keyPressed = function() {
        window.keyIsPressed = true;
        window.keyCode = processing.keyCode;
    }

    processing.keyReleased = function() {
        window.keyIsPressed = false;
        window.keyCode = processing.keyCode;
    }

    processing.mouseMoved = function() {
        window.mouseX = processing.mouseX;
        window.mouseY = processing.mouseY;
        mouseMoved();
    }

    processing.mouseClicked = function() {
        mouseClicked();
    }

    processing.mousePressed = function() {
        mouseIsPressed = true;
        mousePressed();
    };

    processing.mouseReleased = function() {
        mouseIsPressed = false;
        mouseReleased();
    };

    processing.mouseDragged = function() {
        mouseDragged();
    };

    processing.mouseOver = function() {
        mouseOver();
    };

    processing.mouseOut = function() {
        mouseOut();
    };

    processing.setup = function() {

        processing.size(800, 600);
        
        // make processing functions available globally
        var blacklist = [ 'PVector' ];
        var pFn = [];

        for (var key in processing) {
            if (typeof(processing[key]) === "function"
                && !(key.indexOf("_") === 0)
                && (blacklist.indexOf(key) === -1)) {
                //console.log("adding processing function: " + key);
                pFn[pFn.length] = key;
            }

            if (key.match(/\b([A-Z]{2,})\b/g)) {
                pFn[pFn.length] = key;
            }
        }

        //console.log("registering processing functions in window");

        pFn.forEach(function(f) {
            if (typeof(window[f]) === "undefined") {
                window[f] = processing[f];
            } else {
                //console.log("skipped " + f + " because it was already defined");
            }
        });

        setup();
    };

    processing.draw = function() {
        draw();
    };
};

// initialize processing.js
var canvas = document.getElementById("project-canvas");
var p = new Processing(canvas, sketchProc);
canvas.focus();
