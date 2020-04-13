function myFun() {
    result = confirm("Окошко с OK_cancel");
    alert(result);
    result = prompt("Введите что-либо.", "");
    if (result) {
        document.getElementById("p1").innerHTML = result;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function changeColor() {
    document.getElementById("z2").style.color = getRandomColor();
    document.getElementById("z2").style.backgroundColor = getRandomColor();
}