
document.addEventListener("click", function(event){
   let target = event.target;
   target.nextElementSibling.classList.toggle('menu_active')
   event.preventDefault()
}) 




