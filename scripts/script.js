const menuIcon = document.querySelector('.menu-icon')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-list a')
const htmlSections = document.querySelectorAll('section')

const sections = [ ...htmlSections ].map(section => ({ [section.getAttribute('id')]: section.offsetTop }))

const linksArray = [ ...navLinks ]

linksArray.forEach((link, index)=> {
  link.addEventListener('click', event => {
    event.preventDefault()

    const elementId = event.target.getAttribute('href').substring(1)
    scrollTo({
      top: sections[index][elementId] - 20,
      behavior: 'smooth'
    })
  })
})

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active')
})
