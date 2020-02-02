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
    if
    (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i))
    {
        return true;
    }
    else 
    {
        return false;
    }
}

/*
var displayMobileNav = false;

var element = document.getElementsByClassName("mainContent");
var general = document.getElementById("generalInfo");
var intro = document.getElementById("intro");
var skills = document.getElementById("skills");
var images = document.getElementsByClassName("projectImgs");
var projectList = document.getElementById("projectList");
var nav = document.getElementsByClassName("navbar");
var navWrapper = document.getElementById("navigationElement");
var navItems = document.getElementsByClassName("navItem");

function enableMobileNav() {
    displayMobileNav = !displayMobileNav;
    if (displayMobileNav) {
        navWrapper.style.display = "block";

    } else {
        navWrapper.style.display = "none";
    }
}

if (detectMobileByResolution() || detectMobileByAgent())
{
    // Set width and height for mobile
    element[0].style.maxWidth = "100%";
    element[0].style.fontSize = "2.75em";

    // Resize main section
    intro.style.maxWidth = "90%";
    skills.style.maxWidth = "90%";

    projectList.style.flexDirection = "column";
    projectList.style.maxWidth = "100%";

    var navContainer = document.createElement("div");
    navContainer.style.maxHeight = "1%";
    navContainer.style.maxWidth = "100%";

    // Alter navigation elements
    var navIcon = document.createElement("i");
    var divider = document.createElement("div");

    // Hide normal nav
    nav[0].style.display = "none";

    // Set nav functionality
    navIcon.setAttribute("onclick", "enableMobileNav()");

    // Set up parent / child relationships and assign element info
    navContainer.appendChild(navIcon);
    navIcon.setAttribute("class", "fas fa-bars");

    divider.setAttribute("id", "divider");
    navWrapper.appendChild(divider);
    navWrapper.insertBefore(divider, navWrapper.childNodes[0]);

    general.appendChild(navContainer);
    general.insertBefore(navContainer, general.childNodes[0]);
    navIcon.appendChild(navWrapper);

    // Styling
    element[0].style.marginTop = "0%"
    navContainer.style.backgroundColor = "#f2f2f2";
    navWrapper.style.margin = "1em";
    navWrapper.style.maxWidth = "100%";
    navIcon.style.width = "99%";
    navIcon.style.margin = "0.5em";
    navItems[0].style.marginLeft = "1em";

    // Hide until user presses nav hamburger icon
    navWrapper.style.display = "none";
}
else
{
        element[0].style.maxWidth = "60%";

        // Set width and height for desktop
        element[0].style.fontSize = "1.25vw";
    
        // Resize main section
        intro.style.maxWidth = "75%";
        skills.style.maxWidth = "75%";
    
        projectList.style.flexDirection = "column";
        projectList.style.maxWidth = "90%";
    
        var navContainer = document.createElement("div");
        navContainer.style.maxHeight = "1%";
        navContainer.style.maxWidth = "100%";
    
        // Hide mobile nav stuff and display the normal stuff
        nav[0].style.display = "block";
        nav[0].appendChild(navWrapper);
}*/