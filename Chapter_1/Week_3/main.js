function myFun() {
    result = confirm("Окошко с OK_cancel");
    alert(result);
    result = prompt("Введите что-либо.", "");
    if (result) {
        document.getElementById("p1").innerHTML = result;
    }
}

function getRandomColor() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);;
  }

function changeColor() {
    document.getElementById("z2").style.color = getRandomColor();
    document.getElementById("z2").style.backgroundColor = getRandomColor();
}

function setNewColor(elem) {
    document.getElementById("z2").style.backgroundColor = elem.value;
}