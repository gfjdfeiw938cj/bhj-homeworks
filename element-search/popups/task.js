
let elem1 = document.getElementById('modal_success');
let elems = document.querySelectorAll('[href="#"]');
let modalClose = document.querySelectorAll('.modal__close.modal__close_times');

setTimeout(() => elem1.classList.add('modal_active') ,1000);

Array.from(elems).forEach(el => el.closest("a").onclick = () => moduleClose()) 

Array.from(modalClose).forEach(el => el.addEventListener("click", function(){

    this.closest('.modal').classList.remove('modal_active')
}))

function moduleClose(){
    let elements = document.querySelectorAll('.modal');
    for(let el of elements){
        if(el.getAttribute('class') == 'modal modal_active'){ 
            el.classList.toggle('modal_active');
        }else{  
            el.classList.toggle('modal_active');
        }    
    } 
}



//----------------------------------------------------------------------------------
// let elem1 = document.getElementById('modal_success');
// let elem2 = document.getElementById('modal_main');

// setTimeout(() => elem1.classList.add('modal_active') ,1000);

// console.log(elem1.firstElementChild.lastElementChild)
// elem1.firstElementChild.lastElementChild.addEventListener("click", function() {
//     let elements = document.querySelectorAll('.modal');

//     for(let el of elements){
//         if(el.getAttribute('class') == 'modal modal_active') {
//             el.classList.toggle('modal_active')
//         }else{
//             el.classList.toggle('modal_active')
//         }
//     }

// });

// elem2.firstElementChild.lastElementChild.addEventListener("click", function() {
//     let elements = document.querySelectorAll('.modal');

//     for(let el of elements){
//         if(el.getAttribute('class') == 'modal modal_active'){  
//             el.classList.toggle('modal_active')
//         }else{  
//             el.classList.toggle('modal_active')
//         }    
//     }

// })

// elem1.firstElementChild.firstElementChild.addEventListener("click" , function(event){
//     elem1.classList.remove('modal_active')
//     console.log(elem1)
// })

// elem2.firstElementChild.firstElementChild.addEventListener("click" , function(event){
//     elem2.classList.remove('modal_active')
// })
//---------------------------------------------------------------------------------------------
// По клику на крестик добавляется обработчик события на каждый элемент крестика.
//  Решение хоть и рабочее, но совсем не гибкое. При большем количестве модальных окон
//   количество кода так же увеличивалось бы. Прошу вас сделать универсальный обработчик
//    кликов по крестику. Вы можете с помощью цикла перебирать все элементы крестиков и
//     на них добавлять обработчик события, а внутри обработчика события с помощью контекста
//      вызова (this) в котором находится объект на котором произошло событие с помощью 
//      closest находить то модальное окно к которому принадлежит крестик и его закрывать.
//---------------------------------------------------------------------------------------------