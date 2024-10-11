function validate(){
    var name = document.getElementById("names")
    var email = document.getElementById("emails")
    var message=document.getElementById("message")

    if (name.Value== "" || email.value== ""||message.value== "") {
        alert("No blank value allowed");
        return false;

    }else {
        true;
    }
}
function validate() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.textContent = "Message send successfully";
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "black";
    return true;
}