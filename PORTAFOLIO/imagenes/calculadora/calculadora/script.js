//clase calculadora
class Calculadora {
    constructor() {
        this.Resultado =0;
    }
    sumar(valor1, valor2) {
        this.Resultado =valor1+valor2;
        return this.Resultado;
    }

    restar(valor1, valor2) {
        this.Resultado =valor1-valor2;
        return this.Resultado;
    }

    multiplicar(valor,numero){
        this.Resultado=(valor*numero);
        return this.Resultado;
    }

    porcentaje(valor,numero){
        this.Resultado=(valor*numero/100);
        return this.Resultado;
    }

    dividir(valor1, valor2) {
        if (valor2===0) {
            thrownewError("No se puede dividir entre cero");
        }
        this.Resultado =valor1/valor2;
        return this.Resultado;
    }
}

let calculadorsita=new Calculadora();
let opoeracion="";
let valorPantalla=0;

const pantalla=document.querySelector("#pantalla");
const botonC=document.querySelector("#botonC");
const botonUNO=document.querySelector("#boton1");
const botonDOS=document.querySelector("#boton2");
const botonMAS=document.querySelector("#botonMAS");
const botonIGUAL=document.querySelector("#botonIGUAL");
const boton3=document.querySelector("#boton3");
const boton4=document.querySelector("#boton4");
const boton5=document.querySelector("#boton5");
const boton6=document.querySelector("#boton6");
const boton7=document.querySelector("#boton7");
const boton8=document.querySelector("#boton8");
const boton9=document.querySelector("#boton9");
const borrar=document.querySelector("#borrar");
const botonBARRA=document.querySelector("#botonBARRA");
const botonPORCENTAJE=document.querySelector("#botonPORCENTAJE");
const botonMENOS=document.querySelector("#botonMENOS");
const boton0=document.querySelector("#boton0");
const botonPUNTO=document.querySelector("#botonPUNTO");
const botonASTERISCO=document.querySelector("#botonASTERISCO");


function agregarNumero(valor) {
    if (pantalla.textContent==="0") {
        pantalla.textContent=valor;
    }
    else
    {
        pantalla.textContent += valor;
    }

}


mostrarResultado= () =>{
    operacion ="";
    valorPantalla=0;
    pantalla.textContent=calculadorsita.Resultado;
}


botonUNO.addEventListener("click", () =>{
   agregarNumero("1");
});


botonDOS.addEventListener("click", () =>{
    agregarNumero("2");
});


botonC.addEventListener("click", () =>{
    pantalla.textContent="0" ;
});


botonMAS.addEventListener("click", () =>{
   
    operacion ="+";
    valorPantalla=parseFloat(pantalla.textContent);
    pantalla.textContent="0";
});

botonASTERISCO.addEventListener("click", () => {
    operacion ="*";
    valorPantalla=parseFloat(pantalla.textContent);
    pantalla.textContent="0";

});

botonMENOS.addEventListener("click", () => {
    operacion ="-";
    valorPantalla=parseFloat(pantalla.textContent);
    pantalla.textContent="0";


});


botonIGUAL.addEventListener("click", () =>{
   
    if (operacion ==="+") {
       
        calculadorsita.sumar(valorPantalla, parseFloat(pantalla.textContent));
        
        mostrarResultado();
    }
});
 
borrar.addEventListener("click", () =>{



});



boton3.addEventListener("click", () =>{
    agregarNumero("3");
    
});

boton4.addEventListener("click", () =>{
    agregarNumero("4");

});

boton5.addEventListener("click", () =>{
    agregarNumero("5");


});

boton6.addEventListener("click", () => {
    agregarNumero("6");

})

boton7.addEventListener("click", () =>{
    agregarNumero("7");
});

boton8.addEventListener("click", () => {
    agregarNumero("8");
});

boton9.addEventListener("click", () => {
    agregarNumero("9");
});

boton0.addEventListener("click", () => {
    agregarNumero("0");


});

botonPORCENTAJE.addEventListener("click", () => {
    operacion ="%";
    valorPantalla=parseFloat(pantalla.textContent);
    pantalla.textContent="0";    


});


botonBARRA.addEventListener("click", () => {
    operacion ="/";
    valorPantalla=parseFloat(pantalla.textContent);
    pantalla.textContent="0";  


});

botonIGUAL.addEventListener("click", () => {
    if (operacion ==="%") {
       
        calculadorsita.porcentaje(valorPantalla, parseFloat(pantalla.textContent));
        
        mostrarResultado();
    }
    else  if (operacion ==="*") {

        calculadorsita.multiplicar(valorPantalla, parseFloat(pantalla.textContent));

        mostrarResultado();
    }
    else  if (operacion ==="-") {

        calculadorsita.restar(valorPantalla, parseFloat(pantalla.textContent));

        mostrarResultado();
    }
    else  if (operacion ==="/") {

        calculadorsita.dividir(valorPantalla, parseFloat(pantalla.textContent));

        mostrarResultado();
    }

});

