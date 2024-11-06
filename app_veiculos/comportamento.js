let proxima_ordem = 4

const veiculos = [
  {
    ordem: 1,
    nome: 'Gol Bola',
    cor: 'Prata',
    ano: 2006,
    km: 70.000,
    valor: 35.780
  },
  {
    ordem: 2,
    nome: 'Pálio',
    cor: 'Branco',
    ano: 2004,
    km: 50.000,
    valor: 25.780
  },
  {
    ordem: 3,
    nome: 'Creta',
    cor: 'Cor de BMW',
    ano: 2025,
    km: 0.000,
    valor: 125.780
  }
]

function main(){
  atualizar_tabela()

  const btn_cadastrar = document.getElementById('btn-cadastrar')

  btn_cadastrar.addEventListener('click', handlerCadastrar)
}

function atualizar_tabela(){
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

    const cell_ordem = criar_celula(veiculo.ordem)
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



function handlerCadastrar(){
  
  // console.log('Clicou em cadastrar')
  const nome = get_value_from_input('nome')
  const ano = get_value_from_input('ano_modelo')
  const cor = get_value_from_input('cor')
  const km = get_value_from_input('km')
  const valor = get_value_from_input('valor')

  const veiculo = {ordem: proxima_ordem++, nome, ano, cor, km, valor}

  veiculos.push(veiculo) // append

  alert('Veículo cadastrado!')
  
  limpar_formulario()
  
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

main()