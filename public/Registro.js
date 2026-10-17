class Registro {

    tipo;
    descricao;
    valor;
    dataCompetencia;
    dataVencimento;
    setDataReal;
    forma;
    conta;

    setTipo (t) {
        this.tipo = t
    }

    setDescricao (d) {
        this.descricao = d
    }

    setValor (v) {
        this.valor = v
    }

    setDataComp (dc) {
        this.dataCompetencia = dc
    }

    setDataVenc (dv) {
        this.dataVencimento = dv
    }

    setDataReal (dr) {
        this.dataReal = dr
    }

    setForma (f) {
        this.forma = f
    }

    setConta (c) {
        this.conta = c
    }

    constructor(tipo, descricao, valor, dataComp, dataVenc, dataReal, categoria, forma, conta) {
        
    }

    salvarRegistro (descricao, valor, dataCompetencia, dataVencimento, dataReal, forma, conta) {

        localStorage.setItem("descricao", descricao)
        localStorage.setItem("valor", valor)
        localStorage.setItem("dataCompetencia", dataCompetencia)
        localStorage.setItem("dataVencimento", dataVencimento)
        localStorage.setItem("dataReal", dataReal)
        localStorage.setItem("forma", forma)
        localStorage.setItem("conta", conta)

    }

}