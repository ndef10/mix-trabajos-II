var nombre = prompt("Escriba su nombre:","Pepito Fuentes");
var carrera= prompt("Cual es su carrera:", "Programador")

var ramo1= prompt("Ingrese ramo:", "HTML")

var nota1r1= prompt(`Nota 1 ${ramo1}:`, "6.9")
var nota2r1= prompt(`Nota 2 ${ramo1}:`, "7.0")
var nota3r1= prompt(`Nota 3 ${ramo1}:`, "7.0")

var resultado1=((parseFloat (nota1r1) +parseFloat (nota2r1) +parseFloat(nota3r1))/3).toFixed(1);

var ramo2= prompt("Ingrese ramo:", "CSS")

var nota1r2= prompt(`Nota 1 ${ramo2}:`, "5.9")
var nota2r2= prompt(`Nota 2 ${ramo2}:`, "7.0")
var nota3r2= prompt(`Nota 3 ${ramo2}:`, "7.0")

var resultado2=((parseFloat(nota1r2)+parseFloat(nota2r2)+parseFloat(nota3r2))/3).toFixed(1);

var ramo3= prompt("Ingrese ramo:", "JS")

var nota1r3= prompt(`Nota 1 ${ramo3}:`, "2.9")
var nota2r3= prompt(`Nota 2 ${ramo3}:`, "4.0")

var notarequerida=(12 - (parseFloat(nota1r3)+parseFloat(nota2r3))).toFixed(1);




document.write(
    
    `
    <section>

        <h1>Notas Finales</h1>
        
        <div class="container">

            <p> Nombre: ${nombre} </p>
            <P>Carrera: ${carrera}</P>     

        </div>
    </section>

    <section>

<table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Ramo</th>
            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
            <th scope="col">Nota 3</th>
            <th scope="col">Promedio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${ramo1}</th>
            <td >${nota1r1}</td>
            <td>${nota2r1}</td>
            <td>${nota3r1}</td>
            <td>${resultado1}</td>
          </tr>
          <tr>
            <th scope="row">${ramo2}</th>
            <td >${nota1r2}</td>
            <td>${nota2r2}</td>
            <td>${nota3r2}</td>
            <td>${resultado2}</td>
          </tr>
          <tr>
            <th scope="row">${ramo3}</th>
            <td >${nota1r3}</td>
            <td>${nota2r3}</td>
            <td> - </td>
            
          </tr>
         
        </tbody>
      </table>

      <h6>Para aprobar el ramo JavaScript con nota 4.0 necesitas obtener un ${notarequerida} en la nota 3</h6>
      


    </section>

    `

)





