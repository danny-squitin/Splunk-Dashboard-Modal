// Get the modals.
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

// Get the button that opens the modals.
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

// Get the <span> element that closes the modals.
var cls1 = document.getElementsByClassName("close")[0];
var cls2 = document.getElementsByClassName("close")[1];
var cls3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modals. 
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modals.
cls1.onclick = function() {
  modal1.style.display = "none";
}

cls2.onclick = function() {
  modal2.style.display = "none";
}

cls3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modals, close it.
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    }
  if (event.target == modal2) {
        modal2.style.display = "none";
    }
  if (event.target == modal3) {
    modal3.style.display = "none";
    }
}