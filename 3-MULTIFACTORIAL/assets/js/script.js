
//Solicitar a usuario que ingrese un numero entero del 1 al 20//

   let num = parseInt(prompt("Ingrese un numero entero entre 1 y 20"));

//Validarque el número ingresado se encuentre entre 1 y 20   
while (parseInt(num) <=1 || parseInt(num) > 20){
    
    //En caso que no corresponda, mostrar al usuario mensaje: "Número fuera de rango"
   
    alert("Número fuera de rango");
    let num = parseInt(prompt("Ingrese un numero"));
} 

//Obtener la tabla de multiplicar desde el 1 hasta el número ingresado

const calculoTabla = ()=> {

    
    for (let i=1; i<=num; i++) {

       resultado=num*i;
            
        document.write (`${num}  x ${i} = ${resultado}  <br>`);

    }
}  

//Calcular factorial para los mismos números con for anidado

const calculoFactorial = ()=> {   
    for (let i = 1; i<=num; i++) {

       let resultado = 1;

        for (let j = 1; j <= i; j++) {

           resultado=resultado *j;           
      }
      document.write (`Factorial de  ${i}! es: ${resultado} <br>`);  
       
    }
}

//Mostrar resultado

calculoTabla ();
calculoFactorial ()