// LOGIN SYSTEM
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // USERNAME AND PASSWORD
    const correctUsername = "student";
    const correctPassword = "12345";

    if (username === correctUsername && password === correctPassword) {
      alert("Login Successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Incorrect Username or Password");
    }
  });
}

