function myFun() {
    result = confirm("Окошко с OK_cancel");
    alert(result);
    result = prompt("Введите что-либо.", "");
    if (result) {
        document.getElementById("p1").innerHTML = result;
    }
}