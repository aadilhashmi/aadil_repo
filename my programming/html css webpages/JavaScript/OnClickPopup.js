function warning() {
  if (document.getElementById("email").value == "")
    document.getElementById("pass").value == "";
  document.getElementById("email").style.borderColor = "red";
  document.getElementById("pass").style.borderColor = "red";

  {
    alert("PLEASE FILL THE FORM");
    return false;
  }
}
function image() {
  document.getElementById("form").style.backgroundImage = "url('logo.png')";
}
