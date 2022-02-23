let a = document.querySelectorAll('.menu__item')
const links = Array.from(document.querySelectorAll('.menu__link'));

console.log(links)

const lin = Array.from(a).filter(el => el.closest('.menu_sub') != null )
console.log(lin)

for (let link of lin) {
	console.log(link)
	link.onclick = function () {
		const parent = link.parentElement;
		if (parent.querySelector('.menu_sub').className == 'menu menu_sub') {
			parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
		} else {
			parent.querySelector('.menu_sub').className = 'menu menu_sub'
		}

		if (link.closest('.menu_main')) {
			return false
		}
	}
}