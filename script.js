function data() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var dob=document.getElementById("dob").value;
    var mobileNumber=document.getElementById("mobileNumber").value;
    var nationality =document.getElementById("nationality").value;
    var idType=document.getElementById("idType").value;
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirmPassword").value;

    if (name == ""||email == ""||dob == ""||mobileNumber == ""||nationality == "select"||idType == "select"||password == ""||confirmPassword == "")
    {
        alert("All fields are mandatory.");
        return false;
    }
    else if (number.length < 10||number.length > 10)
    {
        alert("Mobile number must be of 10 digits.Please enter valid Number");
        return false;
    }
    else if (isNaN (number))
    {
        alert("Mobile number must contain digits only.Please enter valid Mobile number");
        return false;
    }
    else if (password != confirmPassword)
    {
        alert("Confirm password does not match.Plese enter valid Password");
        return false;
    }
    else
    {
        return true;
    }

}
function resetpage(){
    window.location.reload();
}
