const password = document.getElementById("password");
const messege = document.getElementById("messege");

password.addEventListener("input", () => {
  if (password.value.length >= 1 && password.value.length < 4) {
    messege.style.display = "block";
    messege.innerHTML = "Password is weak!";
    messege.style.color = "#ff5925";
    password.style.borderColor = "#ff5925";
  } else if (password.value.length >= 4 && password.value.length < 8) {
    messege.style.display = "block";
    messege.innerHTML = "Password is medium";
    messege.style.color = "yellow";
    password.style.borderColor = "yellow";
  } else if (password.value.length >= 8) {
    messege.style.display = "block";
    messege.innerHTML = "Password is strong";
    messege.style.color = "#26d730";
    password.style.borderColor = "#26d730";
  } else if (password.value.length < 1) {
    messege.style.display = "none";
    password.style.borderColor = "#ccc";
  }
});
