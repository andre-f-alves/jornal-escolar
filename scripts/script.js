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
      top: sectionProps[href].top - 25,
      behavior: 'smooth'
    })
  })
})

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active')
  navList.classList.toggle('active')
})

onscroll = () => {
  const offsetY = scrollY

  Object.entries(sectionProps).forEach(section => {
    let { top, height } = section[1]
    top -= 25
    
    if (offsetY >= top && offsetY < height + top) {
      linksArray.forEach(link => {
        link.classList.remove('active')
        document.querySelector(`.nav-list a[href$=${section[0]}]`).classList.add('active')
      })
    }
  })
}

onresize = () => {
  if (innerWidth >= 992 && navList.classList.contains('active')) {
    menuIcon.classList.remove('active')
    navList.classList.remove('active')
  }
}

if (innerWidth <= 992) {
  onclick = event => {
    const navChildrens = [ ...document.querySelector('nav').childNodes ]
    if (!navChildrens.includes(event.target) && navList.classList.contains('active')) {
      menuIcon.classList.remove('active')
      navList.classList.remove('active')
    }
  }
}
