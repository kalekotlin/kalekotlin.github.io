function validateInput()
{
    var nameInput = document.getElementById("contactInputName");
    var emailInput  = document.getElementById("contactInputEmail");
    var messageInput = document.getElementById("contactInputMessage");
    var button = document.getElementById("contactSubmit");
    
    var timer = setInterval(function () {
        if (nameInput.value != "" && emailInput.value != "" && messageInput.value != "")
        {
            button.style.boxShadow = "3px 4px 0px 0px #DB5C3D";
            button.style.backgroundColor = "#F06543";
            button.style.border = "1px solid #DB5C3D";
            button.style.cursor = "pointer";
            button.style.color = "#313638";
            button.style.padding = "1em";
            button.style.margin = "1em";
            button.style.minWidth = "8em";
            button.disabled = false;
        }  
        else if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "")
        {
            button.style.boxShadow = "3px 4px 0px 0px #333832";
            button.style.backgroundColor = "#484948";
            button.style.border = "1px solid #545c52";
            button.style.cursor = "default";
            button.style.color = "#545c52";
            button.style.padding = "1em";
            button.style.margin = "1em";
            button.style.minWidth = "8em";
            button.disabled = true;
        }
    }, 200);
}

validateInput();