function validate(){
    var username_element= document.getElementById('user');
    var pass_element= document.getElementById('password').required;
    var username = username_element.value;
    var pass = pass_element.value;
    if (username == "" || username == null){
        alert("Fill in Username and Password");
        console.log("Fill in Username and Password");
        return false;
    } else if( username !== String && username.length <= 3) {
        alert("Incorrect Username");
        console.log("Incorrect Username");
    }else{
        alert("Welcome " + username + "!");
        //console.log("Welcome " + username + "!");
        console.log("Username: "+ username + ", Password: "+ pass);  
    }
}
document.getElementById('submit').onclick(validate());