let img = document.getElementById("imag");
let upload = document.getElementById("upload");
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hue_rotate = document.getElementById("hue-rotate");
let download = document.getElementById("download");
let reset = document.getElementById("reset");
let checkMood = document.getElementById("checkMood");
let body = document.body;
let canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
let imageBox = document.getElementById("imageBox");

// when loading page remove btn download and reset****
onload = function () {
    download.style.display = "none";
    reset.style.display = "none";
    imageBox.style.display = "none"
}

// Function rest all value ranges****

function resetValue() {

    ctx.filter = 'none';
    ctx.clearRect( 0 , 0 , canvas.width, canvas.height); 
    ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height);
    saturate.value = "100";
    contrast.value = "100"; 
    brightness.value = "100"; 
    sepia.value = "0"; 
    grayscale.value = "0"; 
    blur.value = "0"; 
    hue_rotate.value = "0";
}

// when choose image****

upload.onchange = function (){

    resetValue(); // this is turn on when change choose new image***

    download.style.display = "block";
    reset.style.display = "block";
    imageBox.style.display = "block";

    let file = new FileReader(); //Reading any images and files**
    file.readAsDataURL(upload.files[0]); // images is stored in js as array***

    file.onload = function(){ // this is meaning not get image without upload** 
        img.src = file.result;
    }

    img.onload = function (){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height);
        img.style.display = "none";
    }

}

//Function Downloud Image*****
function downloadImage(){
    download.href = canvas.toDataURL();
}

// Filters*******
let filters = document.querySelectorAll(".ranges input");
filters.forEach( (filter) =>{
    filter.addEventListener("input" , function (){
        
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
        `
        ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height);
    })
})
