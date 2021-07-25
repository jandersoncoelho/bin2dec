const formulario = document.querySelector('#formulario')
const txtBinario = document.querySelector('#txtBinario')

formulario.addEventListener('submit', function (e) {
  
  let decimal = parseInt(txtBinario.value, 2)
  txtNumConvertido.innerHTML = 'O número binário informado convertido para decimal é: ' + decimal

  // impede o envio do form
  e.preventDefault()
})
