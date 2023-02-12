/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:
  let mayor = arr[0];
  let menor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    } else if (arr[i] < menor) {
      menor = arr[i];
    }
  }

  return mayor - menor;
};

// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor