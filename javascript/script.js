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
