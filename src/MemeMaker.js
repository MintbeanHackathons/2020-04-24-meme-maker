import React from 'react';
//import logo from './logo.svg';
import './MemeMaker.css';
import $ from 'jquery';


function MemeMaker() {

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Meme Maker</h1>
          </div>
          <div className="col">
            <svg>
              <defs>
                <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
                  <image href="wall.jpg" x="0" y="0" width="100" height="100" />
                 </pattern>
              </defs>
              <text y="2em">Hello world</text>
            </svg>
            {/*<svg width="200" height="200">
              <image id="mImg" href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" height="200" width="200" />
              <text y="2em">Hello world</text>
  </svg>*/}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input type="file" id="upImg" name="img" accept="image/*" />
          </div>
          <div className="col">
            <button id="btnUpImg" onClick="load()">Upload Image</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Meme Preview</h1>
          </div>
          <div className="col">
            <img></img>
          </div>
        </div>
        <div className="row">
          <a id="dl" download="Meme.png" href="#">
            <button>Save Image</button>
          </a>

        </div>
      </div>
    </div>
  );
}

/*const svg = document.querySelector('svg');
const img = document.querySelector('img');
const upload = document.querySelector('#upImg');
const btnUpImg = document.querySelector('#btnUpImg');
const patternImage = document.querySelector('#mImg');
const currentBlobData = null;*/



/*function load(){
var upload = document.getElementById('upload');
var patternImage = document.querySelector('#img1 image');
var currentBlobData = null;

upload.addEventListener('change', function (e) {
  var file = this.files[0];
  if (currentBlobData) {
    URL.revokeObjectURL(currentBlobData);
  }
  currentBlobData = URL.createObjectURL(file);
  patternImage.setAttribute('href', currentBlobData);
});
}*/

/*function load() {
  upload.addEventListener('click', function (e) {
    let file = this.files[0];
    if (currentBlobData) {
      URL.revokeObjectURL(currentBlobData);
    }
    currentBlobData = URL.createObjectURL(file);
    patternImage.setAttribute('href', currentBlobData);
  });
}
*/

/*function uploadImg(event){
  document.querySelector('#upImg').on('change', function()
  {
    let filepath = document.querySelector(this).val();
    document.querySelector("svg > image").fedeIn("fast").attr('href',URL.createObjectURL(event.target.files[0]))
  }); 
};*/

/*function uploadImg(event){
  document.querySelector("svg > image").fadeIn("fast").attr('href',URL.createObjectURL(event.target.files[0]));
};*/


/*function uploadImg(input){
  console.log("hi1");
  if(input.files && input.files[0])
  {
    const reader = new FileReader();
    reader.onload = function(e){
      $('#mImg').fadeIn("fast").attr('href',e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
    console.log(input.files[0]);
  }

}

$('#btnUpImg').click(function(){
  uploadImg(this);
  console.log("hi2");
});
*/
/*function dlCanvas() {
  var dt = img.toDataURL('image/png'); 
  dt = dt.replace(/^data:image\/[^;]*/ /*, 'data:application/octet-stream');
dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
this.href = dt;
};
document.getElementById('dl').addEventListener('click', dlCanvas, false);*/

//btnUpImg.addEventListener('click', uploadImg);



export default MemeMaker;
