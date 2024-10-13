const validation = function() {   document.addEventListener("DOMContentLoaded", (event)=>{

    const form = document.getElementById("registration-form");
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        const feedbackDiv = document.getElementById("form-feedback");
        let regex = /[\w-]+@([\w-])+\.+[\w-]{2,4}/;
        let isValid = true;
        let messages = [];

        if(username.length < 3){
            isValid = false;
            messages[0] = "Username is too short!";
        }
        if(!regex.test(email)){
            isValid = false;
            messages[1] = "Your email address is not valid!";
        }
        if(password.length < 8){
            isValid = false;
            messages[2] = "PassWord is too short!";
        }
        if(isValid === true){
            feedbackDiv.style.display = "block";
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        }
        else{
            feedbackDiv.style.display = "block";
            feedbackDiv.innerHTML = messages.join("<br/>");
            feedbackDiv.style.color = "#dc3545";
        }


    });


});
}
validation();
