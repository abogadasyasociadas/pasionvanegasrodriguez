/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

const setMenuOpen = (isOpen) =>{
   if(!navMenu || !navToggle) return
   navMenu.classList.toggle('show-menu', isOpen)
   navToggle.setAttribute('aria-expanded', String(isOpen))
}

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      setMenuOpen(true)
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      setMenuOpen(false)
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   setMenuOpen(false)
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER STYLES ===============*/


/*=============== SWIPER CASES ===============*/


/*=============== QUESTIONS FAQS ===============*/


/*=============== SWIPER CLIENTS ===============*/


/*=============== CONTACT EMAIL JS ===============*/


/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ===============*/
