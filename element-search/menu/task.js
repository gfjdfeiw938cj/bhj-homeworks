
let menuLink = document.querySelectorAll('.menu__link');

Array.from(menuLink).forEach((el,ind) => el.onclick = () => checkMenu(ind)) 

function checkMenu(ind) {
	let parent = menuLink[ind].parentElement.querySelector('ul');

	if (parent) {
		let parentActive = parent.className.includes('menu_active');
		change(menuLink[ind]);

		if (parentActive) {
			parent.classList.remove('menu_active');
		} else {
			parent.classList.add('menu_active');
		}
	}
	
	return false;
}

function change(element) {
	let elementActive = element.closest('.menu_main').querySelector('.menu_active');
   console.log(elementActive)
	if(elementActive) {
		elementActive.classList.remove('menu_active');
	}
}

