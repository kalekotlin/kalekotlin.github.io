var navbar = document.getElementById("navigationElem");
var navWrap = document.getElementById("navWrapper");
var navElems = document.getElementsByClassName("navItem");
const mobile = window.matchMedia("(max-width: 768px)");

for (i=0; i < navElems.length; i++) {
    navElems[i].style.display = "none";
}

if (!mobile.matches)
{
    let op = 0;
    let timer = setInterval(function () {
        if (op >= 5) {
            clearInterval(timer);
        } 
    
        if (op > 1)
        {
            if (window.getComputedStyle(navbar).getPropertyValue("padding-top") < 1)
            {
                navbar.style.paddingTop += 0.25;
                navbar.style.paddingBottom += 0.25;
            }
    
            let navbarHeight = op - 2;
            navbar.style.height = `${navbarHeight}em`
        
            if (op >= 5) {
                navWrap.style.display = "flex";
                return;
            }
        }
    
        op += 0.2;
        if (op >= 5) {
            for (i=0; i < navElems.length; i++) {
                navElems[i].style.display = "flex";
            }
        }
    }, 10);

}
else
{
    navbar.style.height = "3em";
    navWrap.style.display = "flex";
    for (i=0; i < navElems.length; i++) {
        navElems[i].style.display = "flex";
    }    
}
