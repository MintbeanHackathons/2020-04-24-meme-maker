function changeBackgroundImage(){
    let url = document.getElementById("background-image-input").value;
    document.getElementById("image-in-meme").href = url;
    document.getElementById("background-image-input").value = "";
}

var svg = document.querySelector('#meme-svg');
var img = document.querySelector('#meme-img');
var canvas = document.querySelector('#meme-canvas');
// get svg data
var xml = new XMLSerializer().serializeToString(svg);

// make it base64
var svg64 = btoa(xml);
var b64Start = 'data:image/svg+xml;base64,';

// prepend a "header"
var image64 = b64Start + svg64;

function generateImage(){
    svg = document.getElementById("meme-svg");
    img = document.getElementById("meme-img");
    canvas = document.getElementById("meme-canvas");
    xml = new XMLSerializer().serializeToString(svg);
    svg64 = btoa(xml);
    // set it as the source of the img element
    img.src = image64;

    // draw the image onto the canvas
    canvas.getContext('2d').drawImage(img, 0, 0);
};




// set it as the source of the img element
img.src = image64;

// draw the image onto the canvas
canvas.getContext('2d').drawImage(img, 0, 0);

function dlCanvas() {
  var dt = canvas.toDataURL('image/png'); // << this fails in IE/Edge...
  dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
  dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
  this.href = dt;
};
document.getElementById('dl').addEventListener('click', dlCanvas, false);