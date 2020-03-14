const mobile = window.matchMedia("(max-width: 768px)");
let images = document.getElementsByTagName("IMG");
mobile.matches === true ? console.log("Mobile") : console.log("Desktop");
function increaseImageSize(elem)
{
    for (let i=0; i<images.length; i++)
    {
        if (images[i] != elem) 
        {
            images[i].style.overflow = "hidden";
            if (mobile.matches === true)
            {
                images[i].style.width = "240px";
                images[i].style.height = "360px";
            }
            else
            {
                images[i].style.width = "120px";
                images[i].style.height = "180px";
            }
            images[i].classList.remove("enlargedImageThumbnail");
            images[i].classList.add("imageThumbnail");
        }
    }

    if (elem.className === "enlargedImageThumbnail")
    {
        if (mobile.matches === true)
        {
            elem.style.width = "240px";
            elem.style.height = "360px";
        }
        else
        {
            elem.style.width = "120px";
            elem.style.height = "180px";
        }
        elem.classList.remove("enlargedImageThumbnail");
        elem.classList.add("imageThumbnail");
    }
    else
    {
        elem.style.boxShadow = "0 2px 2px #C6C8C8, 0 2px 3px #C6C8C8";
        elem.style.overflow = null;
        elem.style.width = "360px";
        elem.style.height = "620px"; 

        elem.classList.remove("imageThumbnail");
        elem.classList.add("enlargedImageThumbnail");
    }
}


for (let i=0; i<images.length; i++)
{
    images[i].classList.add("imageThumbnail");
    images[i].setAttribute("onclick", "increaseImageSize(this);");
}