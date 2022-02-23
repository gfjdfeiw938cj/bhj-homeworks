let sliderArrow = document.querySelectorAll('.slider__arrow');
let sliderItem = document.querySelectorAll('.slider__item');
let pointsArr = document.querySelectorAll('.slider__dot');

pointsArr[0].classList.add('slider__dot_active')
Array.from(sliderArrow).forEach(el => el.onclick = changeSlide); 

Array.from(pointsArr).forEach((el,ind) => el.onclick = () => dotSlide(ind));

function changeSlide(event) {
	let classSlideArrow = event.target.classList;
	let slide  = pointСhoice() 

	sliderItem[slide].classList.remove('slider__item_active');

	if(classSlideArrow.contains('slider__arrow_next')) {
		if (slide == sliderItem.length - 1) {
			slide = 0;
		} else {
			slide++;
		}
	}

	if(classSlideArrow.contains('slider__arrow_prev')) {
		if (slide == 0) {
			slide = sliderItem.length - 1;
		} else {
			slide--;
		}
	}
	sliderItem[slide].classList.add('slider__item_active');

    pointsArr[slide].classList.add('slider__dot_active')
    pointsArr[slide - 1].classList.remove('slider__dot_active')
	
		
}

Array.from(pointsArr).forEach(el => el.addEventListener("click" , function(event){
	pointСhoice()
	event.target.classList.add('slider__dot_active')
	let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == event.target.getAttribute("class")) 
    let slideInd = Array.from(sliderItem).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")
    sliderItem[slideInd].classList.remove('slider__item_active')
    sliderItem[pointInd].classList.add('slider__item_active')
}))

function pointСhoice(){
	let slide = Array.from(sliderItem).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")

	if(Array.from(pointsArr).some(el => el.getAttribute("class") == "slider__dot slider__dot_active")){
		pointsArr[slide].classList.toggle('slider__dot_active')
	}
	return slide
}




