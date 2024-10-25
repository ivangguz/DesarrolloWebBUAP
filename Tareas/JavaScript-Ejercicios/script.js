// %%%%%%%%%%%%%%%%%%%%%%%%%%%EJERCICIO UNO DE JAVA SCRITP%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Declara el arreglo global
let arregloRandom = [];

// Llena el arreglo de numeros continuos del 1 al 20
function crearArreglo() {
    let arr = [];
    for (let i = 0; i < 20; ++i) {
        arr[i] = i;
    }

    // Sustituye los numeros del arreglo por numeros aleatorios
    let tmp, cur, tp = arr.length;
    if (tp) {
        while (--tp) {
            cur = Math.floor(Math.random() * (tp + 1));
            tmp = arr[cur];
            arr[cur] = arr[tp];
            arr[tp] = tmp;
        }
    }
    
    arregloRandom = arr;  // Se copia el arreglo local al arreglo global
    //Muestra el arreglo en la pagina
    document.getElementById("arreglo").innerText = `Arreglo: ${arregloRandom.join(", ")}`;
}

// Funcion que busca el numero
function realizarBusqueda(){
    //Inicializa las variables que se van a usar
    let found = "No encontrado";
    let pos="No hay posicion";
    //Obtiene el numero del HTML
    const num = parseInt(document.getElementById("num").value);

    // Lo busca dentro del arreglo
    for (let i = 0; i < arregloRandom.length; i++) {
        if (num === arregloRandom[i]) {
            found = "Encontrado";
            pos = i;
            break;  
        }
    }

    // Muestra el resultado en la pagina
    document.getElementById("busquedaResult").innerText = `Resultado: ${found}, Posicion: ${pos}`;
}
// %%%%%%%%%%%%%%%%%%%%%%%%%%%EJERCICIO DOS DE JAVA SCRITP%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Se declara el arreglo
let arregloConTamano = [];

//Funcion para crear el arreglo con el tamano especificado
function crearArreglo2() {
    const num = parseInt(document.getElementById("num2").value);
    
    let arr = [];
    for (let i = 0; i < num; ++i) {
        arr[i] = i;
    }

    // Sustituye los numeros del arreglo por numeros aleatorios
    let tmp, cur, tp = arr.length;
    if (tp) {
        while (--tp) {
            cur = Math.floor(Math.random() * (tp + 1));
            tmp = arr[cur];
            arr[cur] = arr[tp];
            arr[tp] = tmp;
        }
    }
    
    arregloConTamano = arr;  // Se lo pasa al arreglo global
    document.getElementById("arreglo2").innerText = `Arreglo: ${arregloConTamano.join(", ")}`;
}

//Funcion para encontrar los pares con busqueda simple
function encontrarPares(){
    let pares = 0;
    let impares = 0;

    for(let i = 0; i<arregloConTamano.length; i++){
        if((arregloConTamano[i] % 2 ) == 0 ){
            pares += 1;
        }
        else{
            impares += 1;
        }
    }

    document.getElementById("pares").innerText = `Pares: ${pares}`;
    document.getElementById("impares").innerText = `Impares: ${impares}`;
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%     EJERCICIO TRES DE JAVA SCRITP     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Funcion para calcular el IVA que recibe dos parametros
function calcularIVA(precio,iva){
    let precioConIva = ((precio * iva)/100) + precio;
    return precioConIva;
}

//Funcion para capturar la informacion de la pagina
function capturarNumeros() {
    // Declaracion de los arreglos
    const articulos = [];
    const ivas = [];
    const resultados = [];

    // Captura el precio de los articulos y el IVA del HTML
    for (let i = 1; i <= 5; i++) {
        articulos.push(parseInt(document.getElementById(`art${i}`).value));
        ivas.push(parseInt(document.getElementById(`iva${i}`).value));
        resultados.push(calcularIVA(articulos[i-1], ivas[i-1]));
    }

    // Muestra el resultado en la pagina
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`precTot${i}`).innerText = `Subtotal: ${articulos[i-1]}, IVA: ${ivas[i-1]}, Total ${i}: ${resultados[i-1]}`;
    }
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%     EJERCICIO CUATRO DE JAVA SCRITP     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Declaracion de la clase Trabajadores
class Trabajador {
    // Constructor donde se declara el ID, y las horas nocturnas y diurnas estan inicializadas en 0
    constructor(id, hrsNocturnas = 0, hrsDiurnas = 0) {
      this.hrsNocturnas = hrsNocturnas || 0;
      this.hrsDiurnas = hrsDiurnas || 0;
      this.id = id;
    }

    //Funciones getter
    getHorasTotales() {
      return this.hrsNocturnas + this.hrsDiurnas;
    }
  
    getHrsNocturnas() {
      return this.hrsNocturnas;
    }
  
    getId() {
      return this.id;
    }
  
    getHrsDiurnas() {
      return this.hrsDiurnas;
    }
  
    //Funcion que retorna el pago por las horas diurnas
    getTotalHrsDiur() {
      return this.hrsDiurnas * 10;
    }

    //Funcion que retorna el pago por las horas nocturnas
    getTotalHrsNoct() {
      return this.hrsNocturnas * 20;
    }

    //Funcion que retorna el pago total
    getPagoTotal() {
      return this.getTotalHrsDiur() + this.getTotalHrsNoct();
    }
  
    //Funcion que verifica si sera o no sera despedido en base a sus horas
    despedirTrabajador() {
      let totalHrs = this.getHorasTotales();
      return totalHrs < 20 ? "Ha sido despedido" : "No ha sido despedido";
    }
  }
  
  
  // Se crean los nuevos objetos, se le como parametro el ID del trabajador
  let trabajador1 = new Trabajador(1);
  let trabajador2 = new Trabajador(2);
  let trabajador3 = new Trabajador(3);
  let trabajador4 = new Trabajador(4);
  let trabajador5 = new Trabajador(5);

//Funcion para anadir horas a cada trabajador
function addHoras(){
    //Captura los datos que se ingresan en el HTML
    let horasTrabajadas = parseInt(document.getElementById("horas").value);
    let noTrabajador = parseInt(document.getElementById("trabajador").value);
    let turno = parseInt(document.getElementById("turno").value); // 0 for diurno, 1 for nocturno

    //Si se ingresa 0 como dato de entrada, se muestra la nomina
    if(horasTrabajadas == 0){
        alert("Se muestran los datos de la empresa");
        crearNomina();
        return;
    }
    //Alerta para que el usuario sepa que sus horas han sido agregadas
    alert("Horas agregadas");
        // Depende el trabajador que se seleccione se le agregaran las horas
        switch (noTrabajador) {
            case 1:
              if (turno === 0) {
                trabajador1.hrsDiurnas += horasTrabajadas;
              } else {
                trabajador1.hrsNocturnas += horasTrabajadas;
              }
              break;              
            case 2:
              if (turno === 0) {
                trabajador2.hrsDiurnas += horasTrabajadas;
              } else {
                trabajador2.hrsNocturnas += horasTrabajadas;
              }
              break;
        
            case 3:
              if (turno === 0) {
                trabajador3.hrsDiurnas += horasTrabajadas;
              } else {
                trabajador3.hrsNocturnas += horasTrabajadas;
              }
              break;
        
            case 4:
              if (turno === 0) {
                trabajador4.hrsDiurnas += horasTrabajadas;
              } else {
                trabajador4.hrsNocturnas += horasTrabajadas;
              }
              break;
        
            case 5:
              if (turno === 0) {
                trabajador5.hrsDiurnas += horasTrabajadas;
              } else {
                trabajador5.hrsNocturnas += horasTrabajadas;
              }
              break;
        
            default:
              console.log("Trabajador no válido");
              break;
          }
}

//Obtiene le pago de todos los trabajadores para luego mostrarla en la pagina web
function crearNomina(){
    let totalGasto = trabajador1.getPagoTotal() + trabajador2.getPagoTotal() + trabajador3.getPagoTotal() + trabajador4.getPagoTotal() + trabajador5.getPagoTotal();

    document.getElementById("trabajador1").innerText = `ID: ${trabajador1.getId()}   Horas Totales: ${trabajador1.getHorasTotales()} Pago: ${trabajador1.getPagoTotal()} Despedido: ${trabajador1.despedirTrabajador()}`;
    document.getElementById("trabajador2").innerText = `ID: ${trabajador2.getId()}   Horas Totales: ${trabajador2.getHorasTotales()} Pago: ${trabajador2.getPagoTotal()} Despedido: ${trabajador2.despedirTrabajador()}`;
    document.getElementById("trabajador3").innerText = `ID: ${trabajador3.getId()}   Horas Totales: ${trabajador3.getHorasTotales()} Pago: ${trabajador3.getPagoTotal()} Despedido: ${trabajador3.despedirTrabajador()}`;
    document.getElementById("trabajador4").innerText = `ID: ${trabajador4.getId()}   Horas Totales: ${trabajador4.getHorasTotales()} Pago: ${trabajador4.getPagoTotal()} Despedido: ${trabajador4.despedirTrabajador()}`;
    document.getElementById("trabajador5").innerText = `ID: ${trabajador5.getId()}   Horas Totales: ${trabajador5.getHorasTotales()} Pago: ${trabajador5.getPagoTotal()} Despedido: ${trabajador5.despedirTrabajador()}`;
    document.getElementById("empresa").innerHTML = `Pago de la empresa: ${totalGasto}`;
}


  
// %%%%%%%%%%%%%%%%%%%%%%%%%%%     EJERCICIO CINCO DE JAVA SCRITP     %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Transacciones
let almacen = [
    { codigo: 1, existencia: 10 },
    { codigo: 2, existencia: 20 },
  ];
  
  function procesarTransaccion() {
    const codigo = parseInt(document.getElementById("codigoArticulo").value);
    const unidades = parseInt(document.getElementById("unidades").value);
    const tipoTransaccion = document.getElementById("transaccion").value;
  
    if (unidades < 0) {
      alert("No se permiten números negativos en las unidades.");
      return;
    }
  
    const articulo = almacen.find(item => item.codigo === codigo);
  
    if (articulo) {
      if (tipoTransaccion === "1") {
        // Aumentar existencia
        articulo.existencia += unidades;
      } else if (tipoTransaccion === "2") {
        // Verificar que no se vendan más unidades de las que hay en existencia
        if (articulo.existencia < unidades) {
          alert("No se puede realizar la transacción: la cantidad a vender supera la existencia disponible.");
          return;
        } else {
          articulo.existencia -= unidades;
        }
      }
    } else {
      if (tipoTransaccion === "1") {
        // Si el artículo no existe y se trata de un ingreso de mercancía, se crea uno nuevo
        almacen.push({ codigo: codigo, existencia: unidades });
        alert(`Nuevo artículo con código ${codigo} añadido con ${unidades} unidades.`);
      } else {
        alert("Artículo no encontrado. No se puede realizar una venta de un artículo inexistente.");
        return;
      }
    }
  
    // Actualizar el resultado del almacén
    document.getElementById("resultadoAlmacen").innerText = 
      almacen.map(item => `Artículo ${item.codigo}: ${item.existencia} unidades`).join("\n");
  }
  
  