(async function() {

  // Objeto de informacion que se le asigna a la primer grafica
  const dataYear = [
    { year: 2012, ataque: 30 },
    { year: 2013, ataque: 25 },
    { year: 2014, ataque: 28 },
    { year: 2015, ataque: 15 },
    { year: 2016, ataque: 22 },
  ];

  // Arreglo de datos tipo string, que contiene todos los estados de los estados unidos
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", 
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", 
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    // Numeros aleatorios
    const ataques = [
      14, 11, 20, 8, 24, 17, 5, 25, 12, 9,
      15, 19, 23, 21, 3, 7, 4, 18, 2, 16,
      22, 6, 13, 10, 26, 13, 12, 9, 8, 15,
      11, 17, 20, 22, 21, 4, 3, 7, 5, 26,
      18, 10, 16, 24, 19, 25, 23, 6, 2, 14
  ];

    // Creacion del objeto dataLugar con ayuda de la funcion map, el cual contiene
    // los atributos de lugar  y ataques
    const dataLugar = states.map((states, index) => ({
      lugar: states,
      ataques: ataques[index]
    }));

    // Primer objeto tipo Char que sirve para crear las graficas
  new Chart(
    // Primer grafica
    document.getElementById('ataquesYear'),
    {
      type: 'line',
      data: {
        labels: dataYear.map(row => row.year),
        datasets: [
          {
            label: 'Ataques por año',
            data: dataYear.map(row => row.ataque),
            borderColor: '#F2613F',
            backgroundColor: '#F2613F',
      
          }
        ]
      }
    }
  );

  // Segundo objeto tipo Char
  new Chart(
    // Segunda grafica
    document.getElementById('ataquesLugar'),
    {
      type: 'bar',
      data: {
        labels: dataLugar.map(row => row.lugar),
        datasets: [
          {
            label: 'Ataques de 2012-2016 por estados',
            data: dataLugar.map(row => row.ataques),
            borderColor: '#F2613F',
            backgroundColor: '#F2613F',
      
          }
        ]
      }
    }
  )
})();
