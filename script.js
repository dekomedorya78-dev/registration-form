document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirmEmail").value;

    let userId = document.getElementById("userId").value;
    let confirmUserId = document.getElementById("confirmUserId").value;

    let message = document.getElementById("message");

    if(email !== confirmEmail){
        message.innerHTML = "Email addresses do not match!";
        message.style.color = "red";
        return;
    }

    if(userId !== confirmUserId){
        message.innerHTML = "User ID does not match!";
        message.style.color = "red";
        return;
    }

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

});
