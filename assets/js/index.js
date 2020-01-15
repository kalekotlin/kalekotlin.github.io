function detectMobileByResolution() {
    if(window.innerWidth <= 800 || window.innerHeight <= 600) 
    {
      return true;
    } 
    else 
    {
      return false;
    }
}

function detectMobileByAgent() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}

if (detectMobileByResolution() || detectMobileByAgent())
{
  document.getElementById("mainSect").style.fontSize = "3em";
  document.getElementById("mainSect").style.display = "flex";
  document.getElementById("mainSect").style.overflow = "auto";
}