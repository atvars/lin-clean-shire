

// header bg reveal

const headerBg = () => {
 const header = document.querySelector(".js-header");

 window.addEventListener("scroll", function() {
    if(this.scrollY > 0) {
        header.classList.add("bg-reveal");
    }
    else {
        header.classList.remove("bg-reveal");
    }
 });
};

headerBg();

// service 1
// Get the modal
var modal = document.getElementById("service1");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtnService1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// service 2
// Get the modal
var modal2 = document.getElementById("service2");

// Get the button that opens the modal
var btn2 = document.getElementById("openModalBtnService2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// service 3
// Get the modal
var modal3 = document.getElementById("service3");

// Get the button that opens the modal
var btn3 = document.getElementById("openModalBtnService3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}