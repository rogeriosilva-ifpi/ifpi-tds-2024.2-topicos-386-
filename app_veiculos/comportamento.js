let proxima_ordem = 4

let veiculos = []

function main(){
  // Buscar os dados na API
  atualizar_tabela()
  const btn_cadastrar = document.getElementById('btn-cadastrar')
  btn_cadastrar.addEventListener('click', handlerCadastrar)
}

async function atualizar_tabela(){
  try{
    const response = await fetch('http://localhost:3000/veiculos')
    veiculos = await response.json()
  }catch(error){
    alert('Sistemas Indisponível - Tente mais tarde!')
    return
  }
  
  // Atualizar a tabela HTML com os veículos da lista
  const tabela = document.getElementById('lista-veiculos')
  tabela.innerHTML = ''

  for (let veiculo of veiculos){
    // criar uma linha e adicionar na tabela
    const linha = criar_linha_tabela(veiculo)
    tabela.appendChild(linha)
  }
}

function criar_linha_tabela(veiculo){
  // criar um TR com seus TDs
    const linha = document.createElement('tr')

    const cell_ordem = criar_celula(veiculo.id)
    const cell_nome = criar_celula(veiculo.nome)
    const cell_ano = criar_celula(veiculo.ano)
    const cell_cor = criar_celula(veiculo.cor)
    const cell_km = criar_celula(veiculo.km)
    const cell_valor = criar_celula(veiculo.valor)

    // montar
    linha.appendChild(cell_ordem)
    linha.appendChild(cell_nome)
    linha.appendChild(cell_ano)
    linha.appendChild(cell_cor)
    linha.appendChild(cell_km)
    linha.appendChild(cell_valor)

    return linha
}

function criar_celula(valor){
  const celula = document.createElement('td')
  celula.innerHTML = valor
  return celula
}



async function handlerCadastrar(){
  
  // console.log('Clicou em cadastrar')
  const nome = get_value_from_input('nome')
  const ano = get_value_from_input('ano_modelo')
  const cor = get_value_from_input('cor')
  const km = get_value_from_input('km')
  const valor = get_value_from_input('valor')

  const veiculo = {nome, ano, cor, km, valor}

  // veiculos.push(veiculo) // append

  // Far POST para APIc
  const URL = 'http://localhost:3000/veiculos'
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(veiculo)
  }

  const response = await fetch(URL, config)
  
  if (response.status === 201){
    alert('Veículo cadastrado!')
    limpar_formulario()
  }else{
    alert('Não foi possível cadastrar!')
  }

  atualizar_tabela()
  
}

function get_value_from_input(input_id){
  const caixa = document.getElementById(input_id)
  const conteudo = caixa.value
  return conteudo
}

function limpar_formulario(){
  const form_veiculo = document.getElementById('form-veiculo')
  
  form_veiculo.reset() // apaga cada um dos inputs dentro do formulários
}

// Executando a função "main"
main()