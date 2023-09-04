class Contador{
    constructor(nombre){
        this.nombre= nombre
        this.contador= 0
    }
    static contadorGlobal= 0

    getResponsable(){
        return this.nombre
    }
    contar(){
        this.contador++
        Contador.contadorGlobal++
    }
    getCuentaIndividual(){
        return `la cuenta individual de ${this.nombre}, es de ${this.contador}`
    }
    getCuentaGlobal(){
        return `la cuenta global es de ${Contador.contadorGlobal}`
    }
}