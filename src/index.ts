import { listaContas } from './database';
import { Conta } from './types';


// console.log(listaContas);

// 1. Filtrar todas as operações de entrada maior ou igual a R$500.00 de cada conta do banco virtual
// 2. Cadastrar uma nova conta bancária - SEM USAR O PUSH
// 3. Adicionar uma nova transação de SAIDA bancária para a conta de número 112233 e Mostrar o saldo atual da conta 112233



// 4. Deletar uma conta 

listaContas.forEach((conta) => {
    let pesquisa =  conta.transacoes.filter((transacao) => (
        transacao.valor >= 500.0 && transacao.operacao === 'Entrada'
    )).map((item) => item.id)

    console.log(pesquisa)
}) // aqui vai retornar uma lista do mesmo tamanho da original = 3

const novaConta: Conta = {
    titular: {
        cpf: '2222222',
        nome: 'Odete',
        dataNascimento: new Date('1990-02-07'),
        endereco: 'Rua tal, 90',
        telefone: '51999999',
    },
    agencia: 89,
    numero: 11122777,
    ativa: true,
    saldo: 1500.0,
    transacoes: []
}

const novalistaConta = [...listaContas, novaConta]; // copia todos os valores da listaContas e adiciona novaConta na novaListaConta
