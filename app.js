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

 document.addEventListener('DOMContentLoaded', (event) => {
            const storedToken = localStorage.getItem('accessGranted');
            if (storedToken) {
                showContent();
            } else {
                document.getElementById('passwordPrompt').style.display = 'flex';
            }
        });

        function checkPassword() {
            const passwordInput = document.getElementById('password').value;
            const correctPassword = '123456789'; // Change this to your actual password

            if (passwordInput === correctPassword) {
                localStorage.setItem('accessGranted', 'true');
                showContent();
            } else {
                alert('Incorrect Key');
                document.getElementById('password').value = ''; // Optional: Clear the input field after an incorrect attempt
            }
        }

        function showContent() {
            document.getElementById('protectedContent').style.display = 'block';
            document.getElementById('passwordPrompt').style.display = 'none';
        }
