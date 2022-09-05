function validate(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if(username=="admin"&& password =="admin"){
        alert("Login Successful");
        window.location.href = "FrontEnd.html";
        return true;
        exit();
    }
    else{
        alert("Login Failed");
    }
}