let images = document.getElementsByTagName("IMG");

function increaseImageSize(elem)
{
    for (let i=0; i<images.length; i++)
    {
        if (images[i] != elem) 
        {
            images[i].style.overflow = "hidden";
            if (window.matchMedia("(max-Width: 1049px)").matches == true)
            {
                images[i].style.minWidth = "240px";
                images[i].style.maxWidth = "240px";
                images[i].style.height = "360px";
            }
            else
            {
                images[i].style.minWidth = "120px";
                images[i].style.maxWidth = "120px";
                images[i].style.height = "180px";
            }
            elem.style.boxShadow = null;
            images[i].classList.remove("enlargedImageThumbnail");
            images[i].classList.add("imageThumbnail");
        }
    }

    if (elem.classList.contains("enlargedImageThumbnail"))
    {
        if (window.matchMedia("(max-Width: 1049px)").matches == true)
        {
            elem.style.minWidth = "240px";
            elem.style.maxWidth = "240px";
            elem.style.height = "360px";
        }
        else
        {
            elem.style.minWidth = "120px";
            elem.style.maxWidth = "120px";
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
        elem.style.minWidth = "360px";
        elem.style.maxWidth = "360px";
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