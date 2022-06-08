const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.login.value;
    const password = loginForm.password.value;

    if (username == "balaio" && password == "balaio") {
      window.location.href = "./map.html";
    } else {
      alert("Login errado, digite 'balaio' como login e senha");
    }
})
