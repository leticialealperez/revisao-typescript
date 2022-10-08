/*
DADOS PARA UMA CONTA
titular
numero
agencia
saldo
ativa
transacoes


DADOS PARA O TITULAR
cpf ou cnpj
nome ou razão social
data de nascimento ou data de abertura
telefone
endereço

DADOS PARA UMA TRANSAÇÃO
id
valor
operacao 'entrada' ou 'saida'
tipo (pix, ted, deposito, boleto) // tipo: pix  // tipo: Pix // tipo: PIX
data 

*/

export interface Conta {
  titular: Titular;
  numero: number;
  agencia: number;
  saldo: number;
  ativa: boolean;
  transacoes: Transacoes;
}

interface Titular {
    cpf: string;
    nome: string;
    dataNascimento: Date;
    telefone: string;
    endereco: string;
}

interface Transacao {
  id: string;
  valor: number;
  operacao: Operacao;
  tipo: Tipo;
  data: Date;
}

type Operacao = 'Entrada' | 'Saída'
type Tipo = 'Pix' | 'TED' | 'Boleto' | 'Depósito'
type Transacoes = Transacao[];
export type Contas = Conta[];
