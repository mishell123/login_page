var email = document.getElementById('email');
var password = document.getElementById('password');

function validate() {
    let flag = 0;
    let emailRegex = /^[^\s@]+@[^\s@]+$/;
    let passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;

    if (!emailRegex.test(email.value)) {
        flag = 1;
    }
    if (!passwordRegex.test(password.value)) {
        flag = 1;
    }

    if (!flag && email.value === "admin@example.com" && password.value === "admin123_") {
        alert("Login Successful!");
        return true;
    }
    else {
        alert("Login Failed. Try again");
        return false;
    }

}