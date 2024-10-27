// Inicio codigo de la profa
// Función para cargar datos desde el archivo JSON y mostrarlos en la tabla
function cargarUsuariosOriginal() {
    fetch('usuarios.json')  // Aquí se carga el archivo JSON
      .then(response => response.json())  // Convierte la respuesta en formato JSON
      .then(usuarios => {
        const tabla = document.getElementById('tabla-usuarios');
        tabla.innerHTML = '';  // Limpiar la tabla antes de agregar nuevos datos
  
        // Recorrer el array de usuarios y agregar filas a la tabla
        usuarios.forEach(usuario => {
          const fila = document.createElement('tr');
  
          // Crear celdas y asignar valores desde el JSON
          const celdaNombre = document.createElement('td');
          celdaNombre.textContent = usuario.nombre;
          fila.appendChild(celdaNombre);
  
          const celdaEdad = document.createElement('td');
          celdaEdad.textContent = usuario.edad;
          fila.appendChild(celdaEdad);
  
          const celdaCiudad = document.createElement('td');
          celdaCiudad.textContent = usuario.ciudad;
          fila.appendChild(celdaCiudad);
  
          // Agregar la fila completa a la tabla
          tabla.appendChild(fila);
        });
      })
      .catch(error => console.error('Error al cargar usuarios:', error));
  }
  // Cargar los usuarios al iniciar la página
  window.onload = cargarUsuarios;
  
// Fin codigo de la profa


let usuarios = [];
let currentIndex = 0;

// Función para cargar usuarios desde el JSON
function cargarUsuarios() {
    fetch('usuarios.json')
        .then(response => response.json())
        .then(data => {
            usuarios = data;  // Guarda todos los usuarios en la variable
            mostrarUsuario(currentIndex);  // Muestra el primer usuario
        })
        .catch(error => console.error('Error al cargar usuarios:', error));
}

// Función para mostrar un usuario en base al índice actual
function mostrarUsuario(index) {
    if (usuarios.length > 0) {
        const usuario = usuarios[index];
        const tabla = document.getElementById('tabla-usuarios');
        tabla.innerHTML = '';  // Limpia la tabla antes de mostrar el nuevo usuario

        const fila = document.createElement('tr');

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = usuario.nombre;
        fila.appendChild(celdaNombre);

        const celdaEdad = document.createElement('td');
        celdaEdad.textContent = usuario.edad;
        fila.appendChild(celdaEdad);

        const celdaCiudad = document.createElement('td');
        celdaCiudad.textContent = usuario.ciudad;
        fila.appendChild(celdaCiudad);

        // Agrega la fila a la tabla
        tabla.appendChild(fila);
    }
}

// Función para ir al siguiente usuario
function siguienteUsuario() {
    if (currentIndex < usuarios.length - 1) {
        currentIndex++;
        mostrarUsuario(currentIndex);
    }
}

// Función para ir al usuario anterior
function anteriorUsuario() {
    if (currentIndex > 0) {
        currentIndex--;
        mostrarUsuario(currentIndex); // Muestra el usuario anterior en la lista
    }
}

// Asignar eventos a los botones
document.querySelector('.btn:nth-child(1)').addEventListener('click', anteriorUsuario); // Asigna el evento click al botón para mostrar el usuario anterior
document.querySelector('.btn:nth-child(2)').addEventListener('click', siguienteUsuario); // Asigna el evento click al botón para mostrar el siguiente usuario

// Funcion para agregar nuevos usuarios
function agregarUsuario() {
    // Captura los inputs por medio de su ID
    const nombre = document.getElementById('nombreUsuario').value; // Captura el valor del input de nombre
    const edad = document.getElementById('edadUsuario').value; // Captura el valor del input de edad
    const ciudad = document.getElementById('ciudadUsuario').value; // Captura el valor del input de ciudad

    // Crea un nuevo objeto con los valores de cada nuevo usuario
    const newUser = { nombre, edad, ciudad }; // Crea un objeto con los datos del nuevo usuario

    // Envia un POST Request para agregar un nuevo usuario
    fetch('/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Especifica el tipo de contenido como JSON
        },
        body: JSON.stringify(newUser) // Convierte el objeto newUser a una cadena JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('No hubo una respuesta del servidor'); // Lanza un error si la respuesta no es OK
        }
        return response.json(); // Convierte la respuesta a JSON
    })
    .then((user) => {
        // Se agrega el nuevo usuario a la tabla
        const tabla = document.getElementById('tabla-usuarios'); // Obtiene la tabla de usuarios
        const fila = document.createElement('tr'); // Crea una nueva fila para la tabla

        const celdaNombre = document.createElement('td'); // Crea una celda para el nombre
        celdaNombre.textContent = user.nombre; // Asigna el nombre del usuario a la celda
        fila.appendChild(celdaNombre); // Agrega la celda a la fila

        const celdaEdad = document.createElement('td'); // Crea una celda para la edad
        celdaEdad.textContent = user.edad; // Asigna la edad del usuario a la celda
        fila.appendChild(celdaEdad); // Agrega la celda a la fila

        const celdaCiudad = document.createElement('td'); // Crea una celda para la ciudad
        celdaCiudad.textContent = user.ciudad; // Asigna la ciudad del usuario a la celda
        fila.appendChild(celdaCiudad); // Agrega la celda a la fila

        // Agrega la nueva fila a la tabla
        tabla.appendChild(fila);

        // Limpia el formato
        document.getElementById('formularioUsuario').reset();
    })
    .catch(error => console.error('Error al agregar usuario:', error));
}

// Carga a los usuarios cuando la pagina se recarga
window.onload = cargarUsuarios;
