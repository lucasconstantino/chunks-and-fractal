
const button = document.createElement('button')
button.innerHTML = 'carregar modulo 1'

document.body.appendChild(button)

button.addEventListener('click', () => {
  require.ensure([], require => {
    require('./module').default
  })
})

const button2 = document.createElement('button')
button2.innerHTML = 'carregar modulo 2'

document.body.appendChild(button2)

button2.addEventListener('click', () => {
  require.ensure([], require => {
    require('./module-2').default
  })
})
