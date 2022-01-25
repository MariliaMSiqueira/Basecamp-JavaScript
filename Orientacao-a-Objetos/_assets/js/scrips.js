class CONTABANCARIA {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0
  }

  get saldo() {
    return this._saldo
  }

  set saldo(value) {
    this._saldo = value
  }

  sacar(value) {
    if (value > this._saldo) {
      return `Não é possível efetuar o saque de R$${value}. Saldo insuficiente!`
    } else {
      this._saldo = this._saldo - value
    }
    return this._saldo
  }

  depositar(value) {
    this._saldo = this._saldo + value
    return this._saldo
  }
}

class CONTACORRENTE extends CONTABANCARIA {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero, cartaoCredito)
    this.tipo = 'Conta Corrente'
    this._cartaoCredito = cartaoCredito
  }
  get cartaoCredito() {
    return this.cartaoCredito
  }

  set cartaoCredito(value) {
    this.cartaoCredito = value
  }
}

class CONTAPOUPANCA extends CONTABANCARIA {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'Conta Poupança'
  }
}

class CONTAUNIVERSITARIA extends CONTABANCARIA {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'Conta Universitária'
  }

  sacar(value) {
    if (value > 500 || value > this._saldo) {
      return `Operação negada. Entre em contato com seu banco para maiores informações.`
    } else {
      this._saldo = this._saldo - value
      return this._saldo
    }
  }
}
