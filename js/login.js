document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "shohanakhand@gmail.com" && password === "shohan") {
    window.location.href = "bank.html";
  } else {
    alert("Please enter the correct Email or Password");
  }
});
