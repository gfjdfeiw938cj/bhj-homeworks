



// Найдите все подменю, которые должны открываться и закрываться.
// Перебирайте найденые подменю и у каждого подменю находите рядом ссылки ((1)с
// помощью closest найдите внешний элемент списка и (2) внутри элемента списка найдите ссылку).
// Для полученных ссылок, при переборе добавляйте обработчик события…То есть обработчик 
//события будет добавлен только для ссылок у которых есть подменю.
// Внутри обработчика события клика по подменю у вас должна быть ссылка
// (по которой произошёл клик) и подменю (которое находится рядом).
// Попробуйте найти уже открытое подменю в навигаторе (с помощью селектора).
// Если открытое подменю существует, то его необходимо закрыть.
// Далее, необходимо проверить: а какое подменю вы закрыли? Является ли это подменю
// тем же самым, что и то, которое находится рядом со ссылкой (у которой было событие
// (из шагов 1 и 4)).
// Если это разные элементы, то необходимо открыть подменю, возле которого 
//был клик (из шагов 1 и 4)
// И последним вариантом остаётся то, что открытое ранее подменю (из 5 шага) 
//совпадает с подменю возле ссылки (из шагов 1 и 4)…В таком случае, следовало 
//просто закрывать ранее открытое подменю, что и должно было выполниться на 6-ом шаге…Вам
// останется только вернуть false, чтобы не срабатывало обновление страницы.










let element = document.querySelector('.menu_main');
let elementAll = document.querySelectorAll('.menu__link');
console.log(elementAll)
console.log(element)
element.addEventListener("click", function(event){
    let target = event.target;
    target.nextElementSibling.classList.toggle('menu_active');

    // event.preventDefault();
 });


 element.addEventListener("click", function(event){
  let target = event.target.innerHTML;
  let menu = element.querySelector('.menu_sub').getAttribute('class'); 
  let menu1 = element.querySelector('.menu_sub').getAttribute('class');
  if(menu == menu1){
      if(target == "О компании"){        
        element.querySelector('.menu__item').nextElementSibling.nextElementSibling.querySelector('.menu_sub').classList.remove('menu_active');
      }else if(target == "Услуги"){
        element.querySelector('.menu__item').nextElementSibling.querySelector('.menu_sub').classList.remove('menu_active');
      }
  }
})

