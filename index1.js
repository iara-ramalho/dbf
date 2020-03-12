const produtos = [
    {nome: 'Coxinha', preco: 4.0},
    {nome: 'Pastel', preco: 3.0},
    {nome: 'Suco', preco: 2.0}
];

let exibirProduto = (p, i) => {
    console.log(i + '. ' + p.nome + ' R$ ' + p.preco.toFixed(2));

};
