function callMenu() {
  let nro_ejercicio = parseInt(
    prompt(
      "Ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.Suma. \r\n 2.Promedio de examenes \r\n 3.Calcular el area de un rectangulo \r\n 4.Calcular el area de un Triangulo \r\n 5.Calcular el sueldo semanal de un trabajador \r\n 6.Conversion Pulgadas a centimetros \r\n 7.Conversion soles a Dolares \r\n 8.Saber la edad de los empleados \r\n 9.Saber la menor Edad \r\n 10.Digita los Años de Antiguedad \r\n 11.Incremento Salario Profesor \r\n 12.Notas Aprobados y desaprobados"
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("NO OLVIDES INGRESAR LOS DATOS");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}
function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseFloat(prompt("ingrese el valor 1 a sumar "));
      let valor2 = parseFloat(prompt("ingrese el valor 2 a sumar "));
      alert(ej1_sumarValores(valor1, valor2));
      break;
    case 2:
      let ex1 = parseFloat(prompt("ingrese nota 1"));
      let ex2 = parseFloat(prompt("ingrese nota 2"));
      let ex3 = parseFloat(prompt("ingrese nota 3"));
      let ex4 = parseFloat(prompt("ingrese nota 4"));
      alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4));
      break;
    case 3:
      let base_rect = parseFloat(prompt("ingrese la base"));
      let altura_rect = parseFloat(prompt("ingrese la altura"));
      alert(ej3_calcularAreaRectangulo(base_rect, altura_rect));
      break;
    case 4:
      let base_tri = parseFloat(prompt("ingrese la base"));
      let altura_tri = parseFloat(prompt("Ingrese la altura"));
      alert(eje4_calcularAreaTriangulo(base_tri, altura_tri));
      break;
    case 5:
      let hora = parseInt(prompt("Ingrese las horas"));
      let salario = parseFloat(prompt("Ingrese el salario"));
      alert(eje5_sueldo_Semanal(hora, salario));
      break;
    case 6:
      let pulgada = parseFloat(prompt("Ingrese la pulgada"));
      alert(eje6_conversion_Pulgada(pulgada));
      break;
    case 7:
      let soles = parseFloat(prompt("Ingrese los soles"));
      alert(eje7_conversion_Dolares(soles));
      break;
    case 8:
      let cantidad = parseInt(prompt("Ingrese la cantidad de trabajadores"));
      alert(eje8_conversion_Edad(cantidad));
      break;
    case 9:
      let cant = parseInt(3);
      alert(eje9_edades_Menor(cant));
      break;
    case 10:
      let anios = parseInt(prompt("Ingrese los años"));
      alert(eje10_bono(anios));
      break;
    case 11:
      let an = 6;
      alert(eje11_salario_Profesor(an));
      break;
    case 12:
      let alumnos = parseInt(prompt("Ingrese la cantidad de notas"));
      alert(eje12_leerCalificaciones(alumnos));
      break;
  }
}
// funciones
function ej1_sumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Ingrese los valores";
  } else {
    return a + b;
  }
}

function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
  if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
    return "Ingrese las notas";
  } else {
    return (ex1 + ex2 + ex3 + ex4) / 4;
  }
}

function ej3_calcularAreaRectangulo(base_rect, altura_rect) {
  if (isNaN(base_rect) || isNaN(altura_rect)) {
    return "Ingrese datos";
  } else {
    return "El area del rectangulo es:" + base_rect * +altura_rect;
  }
}
function eje4_calcularAreaTriangulo(base_tri, altura_tri) {
  if (isNaN(base_tri) || isNaN(altura_tri)) {
    return "Ingrese datos";
  } else {
    return "El area del triangulo es:" + (base_tri * +altura_tri) / 2;
  }
}

function eje5_sueldo_Semanal(hora, salario) {
  if (isNaN(hora) || isNaN(salario)) {
    return "Ingrese datos";
  } else {
    return "El sueldo semaan es:" + hora * salario * 7;
  }
}

function eje6_conversion_Pulgada(pulgada) {
  if (isNaN(pulgada)) {
    return "Ingrese datos";
  } else {
    return "Los centimetros son" + pulgada / 39.7;
  }
}

function eje7_conversion_Dolares(soles) {
  if (isNaN(soles)) {
    return "Ingrese Datos";
  } else {
    return "En dolares es" + soles / 3.99;
  }
}
function eje8_conversion_Edad(cantidad) {
  let lista = [];
  let edad = [];
  for (let index = 0; index < cantidad; index++) {
    let anios = parseInt(prompt("Ingrese los años"));
    lista[index] = anios;
    edad[index] = 2022 - lista[index];
  }
  return edad;
}
function eje9_edades_Menor(cantidad) {
  let nombre = [];
  let edad = [];
  for (let index = 0; index < cantidad; index++) {
    let nom = prompt("Ingrese el nombre");
    let ed = parseInt(prompt("Ingrese el edad"));
    nombre[index] = nom;
    edad[index] = ed;
  }
  for (let ind = 0; ind < nombre.length; ind++) {
    if (edad[ind] < edad[ind + 1]) {
      return "La menor edad la tiene:" + nombre[ind] + ":" + edad[ind];
    }
  }
}
function eje10_bono(antiguedad) {
  let bono;
  switch (antiguedad) {
    case 1:
      bono = 100;
      break;
    case 2:
      bono = 200;
      break;
    case 3:
      bono = 300;
      break;
    case 4:
      bono = 400;
      break;
    case 5:
      bono = 500;
      break;
    default:
      bono = 1000;
      break;
  }
  return "El bono es", bono;
}
function eje11_salario_Profesor(anios) {
  let salario = 1500;
  let lista = [];
  for (let index = 0; index < anios; index++) {
    salario += 1500 * 0.1;
    lista.push(salario);
  }
  return (
    "Tu salario despuues de 6 años es:" +
    salario +
    "\r\n Cada años recibiste" +
    lista
  );
}
function eje12_leerCalificaciones(cantCal) {
  let notas = [];
  let cantApro = 0;
  let cantDesa = 0;
  for (let index = 0; index < cantCal; index++) {
    let not = parseFloat(prompt("Ingrese la nota" + (index + 1)));
    if (isNaN(not)) {
      return "Error";
    } else {
      notas.push(not);
    }
  }
  for (let idx = 0; idx < notas.length; idx++) {
    if (notas[idx] > 13) {
      cantApro++;
    } else {
      cantDesa++;
    }
  }
  return (
    "Cantidad Aprobados:" + cantApro + "\r\nCantidad Desaprobados:" + cantDesa
  );
}
