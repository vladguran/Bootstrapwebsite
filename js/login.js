function func() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "12345") {
        window.location.assign("tryout.html");
        alert("Login successful!");
    } else {
        alert("Login failed, wrong username or password!");
    }
}