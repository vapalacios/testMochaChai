var assert = require("chai").assert;
var cal = require("../app/calculadora");

describe("Conjunto de Tests de la calculadora ", function(){
        //describe("Check addTested Function: ", function() {
        it("Check the returned value using: assert.equal(value,value): ",
            function() {
            	let calculadora = new cal();

            	let result = calculadora.suma(10, 5);
                //result = calculadora.addTested("text");
                assert.equal(result, 15);
            });
       	it("Comprueba que si le pasapaste un valor errado lanza un error", 
       		function(){
       			let calculadora = new cal();
       			function test(){
       				let result = calculadora.suma("string", 5);
       			}
       			
       			assert.throws(test, "Debes enviar solo numeros")
       		});
        // it("Check the returned value using: assert.typeOf(value,'value'): ", // it casos de pruebas

        //     function() {

        //         result = calculator.addTested("text");

        //         assert.typeOf(result, "string");

        //     });

        // it("Check the returned value using: assert.lengthOf(value,'value'): ",

        //     function() {

        //         result = calculator.addTested("text");

        //         assert.lengthOf(result, 11);

        //     });

        //});
    });