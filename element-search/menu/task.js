let menu = document.querySelectorAll('.menu_sub')

let menuLink = document.querySelectorAll('.menu__link');


console.log(menuLink)

Array.from(menuLink).forEach((el,ind) => el.onclick = () => checkMenu(ind)) 

function checkMenu(ind) {
	let parent = menuLink[ind].parentElement.querySelector('.menu_sub');

	console.log(parent)

	if (parent){
		change(menuLink[ind]);

		if (parent.className.includes('menu_active')){
			parent.classList.remove('menu_active');
		} else {
			parent.classList.add('menu_active');
		}
	}
	
	return false;
}

function change(element) {
	console.log(element)
	let elementActive = element.closest('.menu_main').querySelector('.menu_active');
	if(elementActive) {
		elementActive.classList.remove('menu_active');
	}
	return false;
}

