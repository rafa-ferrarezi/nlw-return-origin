window.addEventListener('scroll', onScroll)
console.log('Navigation1', Navigation1)
console.log('Navigation1.classList', Navigation1.classList)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a secao passou da linha
  // quais dados vou precisar?

  // o top da secao
  const sectionTop = section.offsetTop

  // a altura da secao
  const sectionHeight = section.offsetHeight

  // o topo da secao chegou ou ultrapasso a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // informacoes dos dados e da logica
  //console.log('O topo da secao chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

  // verificar se a secao passou da linha
  // quais dados vou precisar?

  // a secao termina onde?
  const sectionEndAt = sectionTop + sectionHeight

  // o final da secao passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  //console.log('O fundo da secao passou da linha?',sectionEndPassedTargetLine)

  // limites da secao
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    //console.log('estou na secao HOME')
    menuElement.classList.add('active')
  }
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
