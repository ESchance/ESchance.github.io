document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("两次密码不相同！请重新输入！");
      return;
    }

    console.log(
      "Registering with username:",
      username,
      "email:",
      email,
      "password:",
      password
    );

    alert("注册成功，欢迎进入嘎宇宙百科！");

    window.location.href = "login.html";
  });
