//4. Filtre os itens já comprados de uma lista de mercado e retorne a lista atualizada


const listaDeMercado = [
  {
    nome: 'Maçã',
    comprado: true
  },
  {
    nome: 'Chamyto',
    comprado: false
  },
  {
    nome: 'Nutella',
    comprado: false
  },
  {
    nome: 'Sorvete',
    comprado: true
  },
  {
    nome: 'Suco',
    comprado: false
  }
]


const novaLista = []

for(i = 0; i < listaDeMercado.length; i++){
  const lista = listaDeMercado[i].comprado
  if (lista === true){
    //console.log(listaDeMercado[i])
    novaLista.push(listaDeMercado[i])
  } 
}

console.log(novaLista)