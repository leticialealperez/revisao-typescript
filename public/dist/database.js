"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaContas = void 0;
const listaContas = [
    {
        titular: {
            nome: 'Maria da Silva',
            cpf: '000.111.222-33',
            dataNascimento: new Date('1990/10/02'),
            endereco: 'Rua dos bobos, 0',
            telefone: '(51) 9999-9999',
        },
        numero: 554433,
        agencia: 55,
        ativa: true,
        saldo: 0.0,
        transacoes: [
            {
                id: '8974',
                data: new Date(),
                valor: 500.0,
                tipo: 'TED',
                operacao: 'Saída',
            },
        ],
    },
    {
        titular: {
            nome: 'João da Silva',
            cpf: '111.222.333-44',
            dataNascimento: new Date('1990/10/10'),
            endereco: 'Rua dos bobos, 0',
            telefone: '(51) 9999-9999',
        },
        numero: 112233,
        agencia: 55,
        ativa: true,
        saldo: 1000,
        transacoes: [
            {
                id: '1234',
                data: new Date(),
                valor: 1000,
                tipo: 'Boleto',
                operacao: 'Entrada',
            },
            {
                id: '5678',
                data: new Date(),
                valor: 1000,
                tipo: 'Boleto',
                operacao: 'Entrada',
            },
        ],
    },
    {
        titular: {
            nome: 'José da Silva',
            cpf: '222.333.444-55',
            dataNascimento: new Date('1990/10/02'),
            endereco: 'Rua dos bobos, 0',
            telefone: '(51) 9999-9999',
        },
        numero: 667788,
        agencia: 55,
        ativa: true,
        saldo: 2000.0,
        transacoes: [
            {
                id: '6325',
                data: new Date(),
                valor: 2000.0,
                tipo: 'Pix',
                operacao: 'Entrada',
            },
        ],
    },
];
exports.listaContas = listaContas;
