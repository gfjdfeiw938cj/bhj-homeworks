
let element = document.querySelector('.menu_main');

element.addEventListener("click", function(event){
    let target = event.target;
    target.nextElementSibling.classList.toggle('menu_active');

    element.addEventListener("click", function(event){
        let target = event.target.innerHTML;
        let menu = element.querySelector('.menu__item').nextElementSibling.querySelector('.menu_sub').getAttribute('class'); 
        let menu1 = element.querySelector('.menu__item').nextElementSibling.nextElementSibling.querySelector('.menu_sub').getAttribute('class');
        if(menu == menu1){
            if(target == "О компании"){        
              element.querySelector('.menu__item').nextElementSibling.nextElementSibling.querySelector('.menu_sub').classList.remove('menu_active');
            }else if(target == "Услуги"){
              element.querySelector('.menu__item').nextElementSibling.querySelector('.menu_sub').classList.remove('menu_active');
            }
        }
    })

    event.preventDefault();
 });




