
let elem1 = document.getElementById('modal_success');

let elems = document.querySelectorAll('.modal');
let modalClose = document.querySelectorAll('.modal__close_times');

setTimeout(() => elem1.classList.add('modal_active') ,1000);

Array.from(elems).forEach((el, ind) => el.onclick = (ind) => removes(ind)) 

Array.from(modalClose).forEach((el,ind) => el.onclick = (ind) => removes(ind)) 

function moduleClose(){
    let elements = document.querySelectorAll('.modal');
    for(let el of elements){
        if(el.getAttribute('class') == 'modal modal_active'){ 
            el.classList.toggle('modal_active');
        }else{  
            el.classList.toggle('modal_active');
        }    
    } 
    return false
}

function removes(i){
    console.log(i)
   i.target.classList.remove('modal__close_times')      
}


