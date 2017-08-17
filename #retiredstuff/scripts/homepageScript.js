function login() {
    var username = document.getElementById("username").value.toLowerCase();
    var password = document.getElementById("password").value;
    //    console.log(username);
    //    console.log(password);
    if (username == "bob") {
        if (password == "123456") {
            window.location = "profile.html"
        }
    }
}