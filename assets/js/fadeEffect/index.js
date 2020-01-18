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
    }, 50);
}

fadeIn();