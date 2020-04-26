const TopInput = document.getElementById('TopText');
const BottomInput = document.getElementById('BottomText')
const MemeTop = document.getElementById('MemeTop');
const MemeBottom = document.getElementById("MemeBottom");

const ImageButton = document.getElementById("ImageConvert");

const svg = document.querySelector('svg');
const img = document.querySelector('img');
const canvas = document.querySelector('canvas');
console.log(svg);

//get meme photos
let requestURL = 'https://api.imgflip.com/get_memes';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const MemePhotoData = request.response;
    console.log(MemePhotoData);
  }

//controls for the top meme text
TopInput.addEventListener("change",(e)=>{
    MemeTop.textContent=e.target.value;
});
document.getElementById('TopColorPicker').addEventListener("click",(e)=>{
    MemeTop.style.fill=e.target.id;
})
document.getElementById('TopSize').addEventListener("change",(e)=>{
    console.log(e.target.value+"px")
    MemeTop.style.fontSize = e.target.value+"px";
})

//controls for the bottom meme text
BottomInput.addEventListener("change",(e)=>{
    MemeBottom.textContent=e.target.value;
})
document.getElementById('BottomColorPicker').addEventListener("click",(e)=>{
    MemeBottom.style.fill=e.target.id;
});
document.getElementById('BottomSize').addEventListener("change",(e)=>{
    console.log(e.target.value+"px")
    MemeBottom.style.fontSize = e.target.value+"px";
})

const xml = (new XMLSerializer()).serializeToString(svg);
const svg64 = btoa(xml);
const b64Start = 'data:image/svg+xml;base64,';  
const image64 = b64Start + svg64;
console.log(image64);
  img.src = image64; 


ImageButton.addEventListener("click",()=>{
    console.log("image button")
  const xml = (new XMLSerializer()).serializeToString(svg);
const svg64 = btoa(xml);
const b64Start = 'data:image/svg+xml;base64,';  
const image64 = b64Start + svg64;
console.log(image64);
  img.src = image64;  
})


canvas.getContext('2d').drawImage(img,0,0);

const dlCanvas=()=>{
    console.log('download')
    var dt = canvas.toDataURL('image/png');
    dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
  this.href = dt;
}
document.getElementById('DownloadLink').addEventListener("click",dlCanvas,false);