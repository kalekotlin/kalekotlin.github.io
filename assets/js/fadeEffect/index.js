function fadeIn() {
    var op = 0;
    var element = document.getElementsByClassName("mainContent");

    var timer = setInterval(function () {
        if (op > 1){
            clearInterval(timer);
        }
        element[0].style.opacity = op;
        element[0].style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.1;
    }, 75);

    var nav = document.getElementById("navigationElement");
    var timer = setInterval(function () {
        if (op > 1){
            clearInterval(timer);
        }
        nav.style.opacity = op;
        nav.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.1;
    }, 5);
}

fadeIn();
document.getElementById("navigationElement").style.display = "flex";
document.getElementById("navigationElement").style.justifyContent = "flex-end";
document.getElementById("navigationElement").style.flexDirection = "row";
document.getElementById("navigationElement").style.position = "fixed";
