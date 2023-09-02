const menuIcon = document.querySelector('.menu-icon')
const navList = document.querySelector('.nav-list')

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active')
})
