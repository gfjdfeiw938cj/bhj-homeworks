
let elem1 = document.getElementById('modal_success');
let elem2 = document.getElementById('modal_main');

setTimeout(() => elem1.classList.add('modal_active') ,1000);

elem1.firstElementChild.lastElementChild.addEventListener("click", function() {
    let elements = document.querySelectorAll('.modal');

    for(let el of elements){
        if(el.getAttribute('class') == 'modal modal_active') el.classList.toggle('modal_active')
        else el.classList.toggle('modal_active')
    }

});

elem2.firstElementChild.lastElementChild.addEventListener("click", function() {
    let elements = document.querySelectorAll('.modal');

    for(let el of elements){
        if(el.getAttribute('class') == 'modal modal_active') el.classList.toggle('modal_active')
        else el.classList.toggle('modal_active')
    }

})

elem1.firstElementChild.firstElementChild.addEventListener("click" , function(event){
    elem1.classList.remove('modal_active')
})

elem2.firstElementChild.firstElementChild.addEventListener("click" , function(event){
    elem2.classList.remove('modal_active')
})


