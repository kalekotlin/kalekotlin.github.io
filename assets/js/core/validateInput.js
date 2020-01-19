function validateInput()
{
    var nameInput = document.getElementById("contactInputName");
    var emailInput  = document.getElementById("contactInputEmail");
    var messageInput = document.getElementById("contactInputMessage");
    var button = document.getElementById("contactSubmit");
    
    var timer = setInterval(function () {
        if (nameInput.value != "" && emailInput.value != "" && messageInput.value != "")
        {
            button.style.boxShadow = "3px 4px 0px 0px rgb(117, 173, 152)";
            button.style.backgroundColor = "#98E2C6";
            button.style.border = "1px solid rgb(134, 202, 176)";
            button.style.textShadow = "0px 1px 0px rgb(138, 206, 180)";
            button.style.cursor = "pointer";
            button.style.color = "#545c52";
            button.disabled = false;
        }  
        else if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "")
        {
            button.style.boxShadow = "3px 4px 0px 0px #333832";
            button.style.backgroundColor = "#484948";
            button.style.border = "1px solid #545c52";
            button.style.textShadow = "0px 1px 0px #545c52";
            button.style.cursor = "default";
            button.style.color = "#545c52";
            button.disabled = true;
        }
    }, 200);
}

validateInput();