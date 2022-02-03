function changeMode() {
  changeClasses()
  changeText()
}
function changeClasses() {
  h1.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  btn.classList.toggle(darkModeClass)
  listFront.classList.toggle(darkModeClass)
  listBack.classList.toggle(darkModeClass)
  listFrame.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
  a.classList.toggle(darkModeClass)
}

function changeText() {
  const lightMode = 'Light Mode'
  const darkMode = 'Dark Mode'
  if (body.classList.contains('dark-mode')) {
    btn.innerHTML = lightMode
    h1.innerHTML = darkMode + ' ON'
    return
  }
  btn.innerHTML = darkMode
  h1.innerHTML = lightMode + ' ON'
}

const darkModeClass = 'dark-mode'
const btn = document.getElementById('btn-change')
const h1 = document.getElementsByClassName('light-mode')[0]
const body = document.getElementsByTagName('body')[0]
const listFront = document.getElementsByClassName('tech-list-front')[0]
const listBack = document.getElementsByClassName('tech-list-back')[0]
const listFrame = document.getElementsByClassName('tech-list-frame')[0]
const footer = document.getElementsByTagName('footer')[0]
const a = document.getElementsByClassName('social-medias')[0]
// if (body.contains(darkModeClass)) {
//   for (let i = 0; i < list.length; i++) {
//     list[i].style.border = '1px solid #fff'
//   }
// }
btn.addEventListener('click', changeMode)
