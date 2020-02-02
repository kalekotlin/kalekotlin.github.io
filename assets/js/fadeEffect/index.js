function fadeIn() {
    var op = 0;
    var element = document.getElementById("mainContent");

    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        } 
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.1;
        if (window.getComputedStyle(element).getPropertyValue("opacity") > 1) {
            return;
        }
    }, 25);
}

fadeIn();
