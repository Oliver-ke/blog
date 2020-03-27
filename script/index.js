// this is a simple script for clossing and opening the nav bar
const buggerBtn = document.querySelector('.menu-btn');
const wrapper = document.querySelector('.wrapper');

buggerBtn.addEventListener('click', () => {
	return wrapper.classList.toggle('open');
});

// control innitial page width
const pageWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
if (pageWidth <= 768) {
	// this must be a small screen, remove sidebar by default
	wrapper.classList.add('open');
}
