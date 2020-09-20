const btnHamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
	if (header.classList.contains('open')) {
		body.classList.remove('noscroll');
		header.classList.remove('open');
		fadeElems.forEach((e) => {
			e.classList.remove('fade-in');
			e.classList.add('fade-out');
		});
	} else {
		body.classList.add('noscroll');
		header.classList.add('open');
		fadeElems.forEach((e) => {
			e.classList.remove('fade-out');
			e.classList.add('fade-in');
		});
	}
});
