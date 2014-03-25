// define setup/draw hooks
var sketchProc = function(processing) {

    window.processing = processing;

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
