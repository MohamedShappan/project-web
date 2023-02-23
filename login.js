function check(form) {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    let x=user+"~";
    if (localStorage.getItem(user)==pass) {
        window.open("index.html");
        if(user=="mohamed2002"){
            localStorage.setItem('my',x);
            localStorage.setItem(x,"admin");
            window.location.href="index.html"
        }
        else{
            localStorage.setItem(x,"general");
            localStorage.setItem('my',x);
            window.location.href="index.html"
        }
    }
    else {
        alert("Wrong password");
        location.replace("login.html");
    }
}