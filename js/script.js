const open = document.querySelector('.hamburger');
const modal=document.querySelector('.modal-container');
console.log(modal)

open.addEventListener('click', _ => {
  modal.classList.toggle('show');
  if(!open.classList.contains('close')){
    open.classList.add('close');
    open.src='../images/icon-close.svg';
  }else{
    open.classList.remove('close');
    open.src='../images/icon-hamburger.svg';
  }
})