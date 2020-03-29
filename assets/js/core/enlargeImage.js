let images = document.getElementsByTagName("IMG");

function increaseImageSize(elem)
{
    for (let i=0; i<images.length; i++)
    {
        if (images[i] != elem) 
        {
            images[i].style.overflow = "hidden";
            if (window.matchMedia("(max-width: 768px)"))
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
        if (window.matchMedia("(max-width: 768px)"))
        {
            elem.style.width = "240px";
            elem.style.height = "360px";
        }
        else
        {
            elem.style.width = "120px";
            elem.style.height = "180px";
        }
        elem.style.boxShadow = null;
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