function myFun() {
    result = confirm("Окошко с OK_cancel");
    alert(result);
    result = prompt("Введите что-либо.", "");
    if (result) {
        document.getElementById("p1").innerHTML = result;
    }
}

function getRandomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);;
}

function changeColor() {
    document.getElementById("z2").style.color = getRandomColor();
    document.getElementById("z2").style.backgroundColor = getRandomColor();
}

function setNewColor(elem) {
    document.getElementById("z2").style.backgroundColor = elem.value;
}

function setCanvasColor(elem) {
    var c = document.getElementById("canId");
    var ctx = c.getContext("2d");
    ctx.fillStyle = elem.value;
    ctx.fillRect(0, 0, c.width, c.height);
}

function figurki() {
    var c = document.getElementById("canId");
    var ctx = c.getContext("2d");

    // Квадрат с инверсией цвета
    var imgData = ctx.getImageData(0, 0, 1, 1);
    color = "rgb(0,0,0)";
    color_standart = "rgb(255,255,255)";
    if (imgData.data[0]) {
        color = "rgb(" + (255 - imgData.data[0]) + "," + (255 - imgData.data[1]) + "," + (255 - imgData.data[2]) + ")";
        color_standart = "rgb(" + imgData.data[0] + "," + imgData.data[1] + "," + imgData.data[2] + ")";
    }
    ctx.fillStyle = color;
    ctx.fillRect(2, 2, 40, 40);

    // Круг 
    ctx.beginPath();
    ctx.arc(70, 22, 20, 0, 2 * Math.PI);
    ctx.fill();

    // Треугольник с градиентом
    ctx.beginPath();
    ctx.moveTo(10, 100);
    ctx.lineTo(10, 190);
    ctx.lineTo(190, 190);
    ctx.closePath();

    var grd = ctx.createRadialGradient(100, 150, 5, 100, 150, 100);
    grd.addColorStop(0, color);
    grd.addColorStop(1, color_standart);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();
}