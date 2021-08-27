const nav = document.querySelector('#nav');
const toggleMenu = document.querySelector('.nav__toggle');
const closeMenu= document.querySelector('.nav__close');


/* show menu */
toggleMenu.addEventListener('click', ()=> {
  nav.classList.toggle('show');
  console.log('show')
})

/* hide menu */
closeMenu.addEventListener('click', ()=> {
  nav.classList.remove('show');
  console.log('show')

})