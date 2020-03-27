// this is a simple script for clossing and opening the nav bar
const buggerBtn = document.querySelector('.menu-btn');
const wrapper = document.querySelector('.wrapper');

let isBarOpen = false;
buggerBtn.addEventListener('click', () => {
	if (isBarOpen) {
		isBarOpen = false;
		return wrapper.classList.remove('open');
	}
	isBarOpen = true;
	return wrapper.classList.add('open');
});
