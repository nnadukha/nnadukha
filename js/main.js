// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get modal element
var modal1 = document.getElementById('simpleModal1');
// Get open modal button
var modalBtn1 = document.getElementById('modalBtn1');
var signupBtn = document.getElementById('signup-link');


// Listen for open click
modalBtn.addEventListener('click', openModal);
signupBtn.addEventListener('click', changeModal);
// Listen for close click
window.addEventListener('click', outsideClick);
// Listen for open click
modalBtn1.addEventListener('click', openModal1);
// Listen for close click1
window.addEventListener('click', outsideClick1);

// Function to open modal
function openModal1(){
  modal1.style.display = 'block';
}
// Function to change modal
function changeModal(){
        modal.style.display = 'none';
        modal1.style.display = 'block';
      }
// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
function outsideClick1(e){
        if(e.target == modal1){
          modal1.style.display = 'none';
        }
      }


