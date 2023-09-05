const menuIcon = document.querySelector('.menu-icon')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-list a')
const sections = document.querySelectorAll('section')

const sectionsArray = [ ...sections ]
const linksArray = [ ...navLinks ]

const sectionProps = {}
sectionsArray.forEach(section => {
  sectionProps[section.getAttribute('id')] = {
    top: section.offsetTop,
    height: section.offsetHeight
  }
})

linksArray.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    
    const href = event.target.getAttribute('href').substring(1)
    
    scrollTo({
      top: sectionProps[href].top - 20,
      behavior: 'smooth'
    })
  })
})

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active')
  navList.classList.toggle('active')
})

onresize = () => {
  if (innerWidth >= 992 && navList.classList.contains('active')) {
    menuIcon.classList.remove('active')
    navList.classList.remove('active')
  }
}
