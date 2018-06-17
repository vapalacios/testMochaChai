class Calculadora {
    constructor() {

    }
    suma(a, b) {
    	if(typeof(a)!= "number" || typeof(b)!= "number"){
    		throw new Error("Debes enviar solo numeros");
    	}
        return a + b;
    }
    resta(a, b) {
        return a - b;
    }
}

module.exports = Calculadora;