function fadeIn() {
    let op = 0;
    const element = document.getElementById("mainContent");

    let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        } 
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.1;
        if (window.getComputedStyle(element).getPropertyValue("opacity") > 1) {
            return;
        }
    }, 50);
}

fadeIn();
