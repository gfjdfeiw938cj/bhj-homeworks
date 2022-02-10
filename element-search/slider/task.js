const slides = document.querySelectorAll('.slider__item');
const pointsArr = document.querySelectorAll('.slider__dot')
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const points = document.querySelector('.slider__dots')

next.onclick = function(){
    
    let slide = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")
    
    if (slide >= slides.length - 1) {
        slides[slide].classList.remove('slider__item_active')
        slide = 0;
        slides[slide].classList.add('slider__item_active') 
    }else{
        slides[slide].classList.remove('slider__item_active')
        slides[slide+1].classList.add('slider__item_active')  
    } 
};

prev.onclick = function () {
   
    let slide = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")

    if (slide >= slides.length - 1) {
        slides[slide].classList.remove('slider__item_active')
        slide = 0;
        slides[slide].classList.add('slider__item_active') 
    }else{
        slides[slide].classList.remove('slider__item_active')
        slides[slide+1].classList.add('slider__item_active')  
    }
};

points.addEventListener("click" , function(event){
    let target = event.target
    if(target.getAttribute("class") != 'slider__dot'){
        return 
    } 
    targetElement(target)

})

 function targetElement(target){

    if( Array.from(pointsArr).some(el => el.getAttribute("class") == "slider__dot slider__dot_active")){
        let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == "slider__dot slider__dot_active") 
        pointsArr[pointInd].classList.remove('slider__dot_active')
    } 
    target.classList.add('slider__dot_active')
    let pointInd = Array.from(pointsArr).findIndex(el => el.getAttribute("class") == target.getAttribute("class")) 
    let slideInd = Array.from(slides).findIndex(el => el.getAttribute("class") == "slider__item slider__item_active")
    slides[slideInd].classList.remove('slider__item_active')
    slides[pointInd].classList.add('slider__item_active')
 }



//                                      Второй вариант 

// const slides = document.querySelectorAll('.slider__item');
// const prev = document.querySelector('.slider__arrow_prev');
// const next = document.querySelector('.slider__arrow_next');

// let slideNum = 0;

// console.log(Array.from(slides))

// next.onclick = function(){
//       slideNum++;
//     for (let slide of Array.from(slides)) {
//         slide.className = 'slider__item';
//     }

//     if (slideNum >= slides.length) {
//         slideNum = 0;
//     }
//     slides[slideNum].className = 'slider__item slider__item_active';
   
// };

// prev.onclick = function () {
//     slideNum--;
//     for (let slide of Array.from(slides)) {
//         slide.className = 'slider__item';
//     }
//     if (slideNum < 0) {
//         slideNum = slides.length - 1;
//     }
//     slides[slideNum].className = 'slider__item slider__item_active';
// };