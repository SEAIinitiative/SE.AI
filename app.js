const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

menu.addEventListener('click', () => {
	menu.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#fff';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		menu.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Prompt user for password
var password = prompt("Initiate access protocol: Provide encrypted authentication key for system validation.");

// Check if password is correct

if (password === "123456789") {
	alert("Welcome Aboard!");

// Redirect to the protected content

	window.location.href = "https://seaiinitiative.github.io/SEAI-Initiative/";
  } else {

// Incorrect password

	alert("Incorrect");

// Redirect back to login page or display an error message
	window.location.href = "https://www.google.com/";
  }
