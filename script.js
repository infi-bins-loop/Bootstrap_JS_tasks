function reverseString() {
    let string = prompt("Enter the number");
    if (string != null) {
      document.getElementById("demo").innerHTML =
      string.split('').reverse().join('');
    }
}

function alphaOrder(){
  let str = prompt("Enter the string");
  if(str!=null){
    document.getElementById("try").innerHTML =
    str.split('').sort().join('');
  }
}

function multiply(){
  document.getElementById("try").innerHTML =
  document.getElementById("1stno").value * document.getElementById("2ndno").value;
}

function divide(){
  document.getElementById("try").innerHTML =
  document.getElementById("1stno").value / document.getElementById("2ndno").value;
}

function date(){
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  const fullYear = `${date}/${month}/${year}`;
  document.getElementById("date").innerHTML =
  fullYear;
}

function time(){
  document.getElementById("time").innerHTML =
  new Date();
}

function togglePasswordVisibility() {
  const passwordField = document.getElementById('password');
  const passwordFieldType = passwordField.getAttribute('type');
  if (passwordFieldType === 'text') {
    passwordField.setAttribute('type', 'password');
  } else {
    passwordField.setAttribute('type', 'text');
  }
}
 
function required(){
  var x = document.getElementById("username").required;
  var y = document.getElementById("password").required;
}

function checkForm(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var website = document.getElementById("website").value;
  var message = document.getElementById("message").value;
  if (name == ""){
    document.getElementById("Name").innerHTML="This field is required";
    document.getElementById("name").style.borderColor = 'red';
  }
  if (email == ""){
    document.getElementById("Email").innerHTML="A valid email address is required";
    document.getElementById("email").style.borderColor = 'red';
  }
  if (website == ""){
    document.getElementById("Website").innerHTML="A valid url is required";
    document.getElementById("website").style.borderColor = 'red';
  }
  if (message == ""){
    document.getElementById("Message").innerHTML="This field is required";
    document.getElementById("message").style.borderColor = 'red';
  }
  return false;
}
