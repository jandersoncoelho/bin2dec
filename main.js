const formulario = document.querySelector('#formulario')
const txtBinario = document.querySelector('#txtBinario')

formulario.addEventListener('submit', function (e) {
  
  let decimal = parseInt(txtBinario.value, 2)
  txtNumConvertido.innerHTML = decimal

  // impede o envio do form
  e.preventDefault()
})
