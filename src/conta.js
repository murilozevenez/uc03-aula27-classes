class OperacaoBancaria {
    // tipoEvento -> (E)ntrada ou (S)aida
    constructor(tipoOperacao, valor){
        this.operacao=  tipoOperacao.toUpperCase();
        this.valor = valor;
        this.descriçao = descriçao;
        this.data_hora = new Date();
    }
}

class Conta {

    constructor(agencia, numeroConta, nomeCliente, saldoInicial){
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.nomeCliente = nomeCliente;
        this.saldoAtual = saldoInicial;
        this.operacoes = [new OperacaoBancaria('E', saldoInicial, 'Deposito Inicial')]
    }

    deposito(valorDeposito){
        const operacao = new OperacaoBancaria('E', valorDeposito, 'Deposito em dinheiro');
        this.operacoes.push(operacao);
        
    }

    saque(valorSaque){
        const saldo = this.saldo();
        if(valorSaque <= saldo){
            const operacao = new OperacaoBancaria('S', valorSaque, 'Saque em especie');
        this.operacoes.push(operacao);
        }
        this.saldoAtual = this.saldo()
    }

    saldo(){
        let valorSaldo = 0;
        for( let i = 0; i < this.operacoes.length; i++){
            const {operacao, valor} =  this.operacoes[i]
        }
        if(operacao ==='E'){
            valorSaldo +=valor;
        }
        else if ( operacao === 'S'){
            valorSaldo -= valor
        }
        else{
            console.log('Opereção Inválida');
        }
        return valorSaldo;
    }
}

const conta = new Conta(123, "1234-5", "Fulano de Tal", 100)

console.log(conta)
conta.deposito(1000);
console.log(conta)

conta.saque(1000)
