window.addEventListener('scroll', onScroll)
console.log('Navigation1', Navigation1)
console.log('Navigation1.classList', Navigation1.classList)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    Navigation1.classList.add('scroll')
  } else {
    Navigation1.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
about header,
#about .content,
#contact,
#contact header, 
#contact .content,
footer a,
footer p,
footer ul li`)
