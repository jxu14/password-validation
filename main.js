let myInput = document.getElementById("psw");

let number = document.getElementById("number");
let length = document.getElementById("length");

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";

}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {

  let numbers = /\d/g;
  console.log(numbers);
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


}