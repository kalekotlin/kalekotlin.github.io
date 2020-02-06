function changeButtonState(button, isButtonEnabled)
{
    if (isButtonEnabled)
    {
        button.style.boxShadow = "3px 4px 0px 0px #DB5C3D";
        button.style.backgroundColor = "#F06543";
        button.style.border = "1px solid #DB5C3D";
        button.style.cursor = "pointer";
        button.style.color = "#313638";
        button.style.padding = "1em";
        button.style.margin = "1em";
        button.style.maxWidth = "40%";
        button.disabled = false;
    }
    else
    {
        button.style.boxShadow = "3px 4px 0px 0px #333832";
        button.style.backgroundColor = "#484948";
        button.style.border = "1px solid #545c52";
        button.style.cursor = "default";
        button.style.color = "#545c52";
        button.style.padding = "1em";
        button.style.margin = "1em";
        button.style.maxWidth = "40%";
        button.disabled = true;
    }
}

function validateInput()
{
    const nameInput = document.getElementById("contactInputName");
    const emailInput  = document.getElementById("contactInputEmail");
    const messageInput = document.getElementById("contactInputMessage");
    const button = document.getElementById("contactSubmit");
    
    let timer = setInterval(function () {
        if (nameInput.value != "" && emailInput.value != "" && messageInput.value != "")
        {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(emailInput.value).toLowerCase())) 
            {
                changeButtonState(button, true);
            }
            else
            {
                changeButtonState(button, false);
            }
        }  
        else if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "")
        {
            changeButtonState(button, false);
        }
    }, 200);
}

validateInput();