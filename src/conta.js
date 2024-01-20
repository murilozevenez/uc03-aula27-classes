class OperacaoBancaria {
    // tipoOperacao -> (E)ntrada ou (S)aída 
    constructor(tipoOperacao, valor, descricao) {
      this.operacao = tipoOperacao.toUpperCase();
      this.valor = valor;
      this.descricao = descricao;
      this.data_hora = new Date();
    }
  }
  
  class Conta {
    constructor(agencia, numeroConta, nomeCliente, saldoInicial) {
      this.agencia = agencia;
      this.numeroConta = numeroConta;
      this.nomeCliente = nomeCliente;
      this.saldoAtual = saldoInicial;
      this.operacoes = [new OperacaoBancaria('E', saldoInicial, 'Depósito Inicial')]
    }
  
    deposito(valorDeposito) {
      const operacao = new OperacaoBancaria('E', valorDeposito, 'Depósito em dinheiro');
      this.operacoes.push(operacao);
      this.saldoAtual = this.saldo();
    }
  
    saque(valorSaque) {
      const saldo = this.saldo();
      if (valorSaque <= saldo) {
        const operacao = new OperacaoBancaria('S', valorSaque, 'Saque em espécie');
        this.operacoes.push(operacao);
      }
      this.saldoAtual = this.saldo();
    }
  
    saldo() {
      let valorSaldo = 0;
      for (let i = 0; i < this.operacoes.length; i++) {
        const { operacao, valor } = this.operacoes[i]
        if (operacao === 'E') {
          valorSaldo += valor;
        } else if (operacao === 'S') {
          valorSaldo -= valor;
        } else {
          console.log('Operação Inválida');
        }
      }
      return valorSaldo;
    }
  
  
  }
  
  
  
  
  
  const conta = new Conta(123, "1234-5", "Fulano de Tal", 100);
  console.log(conta);
  
  conta.deposito(1000);
  console.log(conta);
  
  conta.saque(1000);
  console.log(conta);