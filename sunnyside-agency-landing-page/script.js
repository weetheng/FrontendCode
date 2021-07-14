

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("hamburger");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	  modal.style.display = "block";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	}
	
});

function closeModal(){
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
}