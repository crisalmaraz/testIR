const socket = io();
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var cont=0;


socket.on('data', function (dataSerial) {
    console.log(dataSerial);
    var pixels=dataSerial.pixels;
    
    //ctx.fillStyle = "#FF0000";
    var n=0;
    for(var y = 0; y <8; y++){
        for (var x = 0; x <8; x++) {
            ctx.fillStyle = (pixels[n]); 
            ctx.fillRect(100*x, 100*y, 100, 100);
            n=n+1;
        }
    }

    
    
});
var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };
var fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
  };