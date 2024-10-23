function main(){
  console.log('Hello!')
  console.log('IFPI 2024!')

  // const elemento = document.getElementById('titulo')

  // alert(elemento.innerText)

  // elemento.innerText = 'Tá na hora de dar tchau!!!'

  const botao = document.getElementById('btn-adicionar')

  // Arrow Function: () => {}

  botao.addEventListener('click', () => { 
    const caixa_texto = document.getElementById('input-nome')
    const valor_digitado = caixa_texto.value.trim()

    if (valor_digitado.length === 0){
      alert('Favor digite o nome do carro')
      return
    }

    const lista_veiculos = document.getElementById('lista-veiculos')
    const item = document.createElement('li')
    item.innerText = valor_digitado
    lista_veiculos.appendChild(item)
    caixa_texto.value = ''
  })
}

/*
function handler_click(){

  // alert('Clicou')
  // Pegar o conteúdo da caixa de texto
  const caixa_texto = document.getElementById('input-nome')
  const valor_digitado = caixa_texto.value.trim()

  if (valor_digitado.length === 0){
    alert('Favor digite o nome do carro')
    return
  }

  // caixa_texto.value = 'Você foi Hackeado!!!'

  // alert(valor_digitado)

  // 1. Identificar a Lista (UL) -OK
  
  // 2. Pegar a lista do DOM (document)
  const lista_veiculos = document.getElementById('lista-veiculos')
  
  // 3. Criar um Item <li> novinho 
  const item = document.createElement('li')

  // 4. Preencher Item seu valor
  item.innerText = valor_digitado
  
  // 4. Adicionar o LI como filho da UL
  lista_veiculos.appendChild(item)

  caixa_texto.value = ''
} **/

main()