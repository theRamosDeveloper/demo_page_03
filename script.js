function image(){
    var image;
    image = document.getElementById("image");
    image.addEventListener("mouseover", change_one);
    image.addEventListener("mouseout", change_two)
}

function change_one(){
    var obj = event.target;
    obj.style.backgroundImage = "url('photo-main.jpg')";
}

function change_two(){
    var obj = event.target;
    obj.style.backgroundImage = "url('photo-two.jpg')"
}

window.addEventListener("load", image)

const text = document.querySelector(".sec-text");
var time;

function start(){
    time = setInterval(colorChange,1000)
}


function colorChange(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    text.style.color = "rgb("+r+","+g+","+b+")";
}    

start();
setInterval(start, 12000);