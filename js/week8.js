function drawSquare(){
    const canvas = document.getElementById("demoCanvas");
    const context = canvas.getContext("2d");

    context.strokeStyle = "#88a0a8";
    context.fillStyle = "#d7f9f1";

    context.fillRect(50, 50, 100, 100); //10px from top and left, 100px square
    context.strokeRect(50, 50, 100, 100);
}

function drawPattern(){
    const canvas = document.getElementById("demoCanvas2");
    const context = canvas.getContext("2d");
    context.strokeStyle = "#88a0a8";

    const img = new Image();
    img.src = "./images/cloud-flat-lineart.png";
    img.onload = function() {
        const pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(0, 0, 200, 200);
        context.strokeRect(0, 0, 200, 200);
    };
}

function drawGradient() {
    const canvas = document.getElementById("demoCanvas3");
    const context = canvas.getContext("2d");
    context.strokeStyle = "#88a0a8";

    const gradient = context.createLinearGradient(0,0,0,200);
    gradient.addColorStop(0, "#88a0a8");
    gradient.addColorStop(1, "#d7f9f1");

    context.fillStyle = gradient;
    context.fillRect(50, 50, 100, 100);
    context.strokeRect(50, 50, 100, 100);
}

drawSquare();
drawPattern(); 
drawGradient();