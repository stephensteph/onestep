function openNav() {
	var elem = document.getElementById('elements');
	elem.style.width = '420px';
	elem.style.height = '21px';
	var toggle = document.getElementById('toggle');
	toggle.style.display = 'none';
	var toggle_remove = document.getElementById('toggle_remove');
	toggle_remove.style.display = 'block';
}

function removeNav() {
	var elem = document.getElementById('elements');
	elem.style.width = '0px';
	elem.style.height = '0px';
	var toggle_remove = document.getElementById('toggle_remove');
	toggle_remove.style.display = 'none';
	var toggle = document.getElementById('toggle');
	toggle.style.display = 'block'
}

var slideIndex = 0;
showSlides();

function showSlides() {
	var slides = document.getElementsByClassName('my_slides');
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	slides[slideIndex - 1].style.display = 'block';
	setTimeout(showSlides, 6000); // change image every 6 seconds
}
