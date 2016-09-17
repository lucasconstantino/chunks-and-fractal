
const button = document.createElement('button')
button.innerHTML = 'carregar chunk'

document.body.appendChild(button)

button.addEventListener('click', () => {
  require.ensure([], require => {
    require('./module').default
  })
})
