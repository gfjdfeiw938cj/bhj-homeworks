let sliderArrow = document.querySelectorAll('.slider__arrow');
let sliderItem = document.querySelectorAll('.slider__item');
let sliderDot = document.querySelectorAll('.slider__dot');
const pointsArr = document.querySelectorAll('.slider__dot');
const slides = document.querySelectorAll('.slider__item');
pointsArr[0].classList.add('slider__dot_active')
Array.from(sliderArrow).forEach(el => el.onclick = changeSlide); 

Array.from(sliderDot).forEach((el,ind) => el.onclick = () => {dotSlide(ind)});

function changeSlide(event) {
	let classSlideArrow = event.target.classList;
	let slide = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")

	if(Array.from(pointsArr).some(el => el.getAttribute("class") == "slider__dot slider__dot_active")){
		pointsArr[slide].classList.toggle('slider__dot_active')
	} else {
		pointsArr[slide].classList.toggle('slider__dot_active')
	}

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

// function dotSlide(key) {
// 	sliderItem[index].classList.remove('slider__item_active');
// 	sliderItem[key].classList.add('slider__item_active')
// 	index = key;
// }

Array.from(pointsArr).forEach(el => el.addEventListener("click" , function(event){
	if(Array.from(pointsArr).some(el => el.getAttribute("class") == "slider__dot slider__dot_active")){
        let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == "slider__dot slider__dot_active") 
        pointsArr[pointInd].classList.remove('slider__dot_active')
	}
	event.target.classList.add('slider__dot_active')
	let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == event.target.getAttribute("class")) 
    let slideInd = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")
    slides[slideInd].classList.remove('slider__item_active')
    slides[pointInd].classList.add('slider__item_active')
}))





//--------------------------------------------------------------------------
// const slides = document.querySelectorAll('.slider__item'); 
// console.log(slides)
// const pointsArr = document.querySelectorAll('.slider__dot')
// console.log(pointsArr)
// const prev = document.querySelector('.slider__arrow_prev');
// console.log(prev)
// const next = document.querySelector('.slider__arrow_next');
// console.log(next)
// const points = document.querySelector('.slider__dots')
// console.log(points)


// next.onclick = function(){
    
//     let slide = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")
    
//     if (slide >= slides.length - 1) {
//         slides[slide].classList.remove('slider__item_active')
//         slide = 0;
//         slides[slide].classList.add('slider__item_active') 
//     }else{
//         slides[slide].classList.remove('slider__item_active')
//         slides[slide+1].classList.add('slider__item_active')  
//     } 
// };

// prev.onclick = function () {
   
//     let slide = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")

//     if (slide >= slides.length - 1) {
//         slides[slide].classList.remove('slider__item_active')
//         slide = 0;
//         slides[slide].classList.add('slider__item_active') 
//     }else{
//         slides[slide].classList.remove('slider__item_active')
//         slides[slide+1].classList.add('slider__item_active')  
//     }
// };

// points.addEventListener("click" , function(event){
//     let target = event.target
//     if(target.getAttribute("class") != 'slider__dot'){
//         return 
//     } 
//     targetElement(target)

// })

//  function targetElement(target){

//     if( Array.from(pointsArr).some(el => el.getAttribute("class") == "slider__dot slider__dot_active")){
//         let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == "slider__dot slider__dot_active") 
//         pointsArr[pointInd].classList.remove('slider__dot_active')
//     } 
//     target.classList.add('slider__dot_active')
//     let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == target.getAttribute("class")) 
//     let slideInd = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")
//     slides[slideInd].classList.remove('slider__item_active')
//     slides[pointInd].classList.add('slider__item_active')
//  }

//---------------------------------------------------------------------------------

// const prevNextArr = document.querySelectorAll('.slider__arrow');
// console.log(prevNextArr);
// const slides = document.querySelectorAll('.slider__item');
// console.log(slides);
// const pointsArr = document.querySelectorAll('.slider__dot');
// console.log(pointsArr);


// Array.from(prevNextArr).forEach( el => el.addEventListener("click" , function(){
// 	let slide = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")
//     console.log(slide)
// 	    if (slide >= slides.length - 1) {
// 	        slides[slide].classList.remove('slider__item_active')
// 	        slide = 0;
// 	        slides[slide].classList.add('slider__item_active') 
// 	    }else{
// 	        slides[slide].classList.remove('slider__item_active')
// 	        slides[slide+1].classList.add('slider__item_active')  
// 	    } 

		// if(Array.from(pointsArr).some(el => el.getAttribute("class") == "slider__dot slider__dot_active")){
		// 	// let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == "slider__dot slider__dot_active") 
		// 	if(pointsArr[slide - 1].classList.contains("slider__dot_active")){
		// 		pointsArr[slide - 1].classList.remove('slider__dot_active');  
		// 		pointsArr[slide].classList.add('slider__dot_active');
				
		// 	}else if(pointsArr[slide + 1].classList.contains("slider__dot_active") ){
		// 		pointsArr[slide + 1].classList.remove('slider__dot_active');  
		// 		pointsArr[slide].classList.add('slider__dot_active');
		// 	}
		// }
		
		// pointsArr[slide].classList.add('slider__dot_active'); 
	
// }))

// points.addEventListener("click" , function(event){
//     let target = event.target
//     if(target.getAttribute("class") != 'slider__dot'){
//         return 
//     } 
//     targetElement(target)

// })

//  function targetElement(target){

//     if(Array.from(pointsArr).some(el => el.getAttribute("class") == "slider__dot slider__dot_active")){
//         let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == "slider__dot slider__dot_active") 
//         pointsArr[pointInd].classList.remove('slider__dot_active')
//     } 
//     target.classList.add('slider__dot_active')
//     let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == target.getAttribute("class")) 
//     let slideInd = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")
//     slides[slideInd].classList.remove('slider__item_active')
//     slides[pointInd].classList.add('slider__item_active')
//  }


// Array.from(pointsArr).forEach(el => el.addEventListener("click" , function(event){
// 	if(Array.from(pointsArr).some(el => el.getAttribute("class") == "slider__dot slider__dot_active")){
//         let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == "slider__dot slider__dot_active") 
//         pointsArr[pointInd].classList.remove('slider__dot_active')
// 	}
//     console.log(event.target)
// 	event.target.classList.add('slider__dot_active')
// 	let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == event.target.getAttribute("class")) 
//     let slideInd = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")
//     slides[slideInd].classList.remove('slider__item_active')
//     slides[pointInd].classList.add('slider__item_active')
// }))


