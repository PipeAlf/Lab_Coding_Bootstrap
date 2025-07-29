function mostrarAlerta(mensaje) {
  const alerta = document.getElementById("alerta");
  alerta.textContent = mensaje;
  alerta.classList.remove("d-none");

  // Ocultar después de 3 segundos
  setTimeout(() => {
    alerta.classList.add("d-none");
  }, 3000);
}



function eliminarTarea(evento) {
  const boton = evento.target;
  const li = boton.parentElement;
  li.remove();
}

// Función para agregar una tarea
function agregarTarea() {
  const input = document.getElementById("nueva-tarea");
  const texto = input.value.trim();

  if (texto) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn btn-danger btn-sm";
    btnEliminar.addEventListener("click", eliminarTarea);

    li.appendChild(btnEliminar);
    document.getElementById("lista-tareas").appendChild(li);

    input.value = "";
    input.focus();

    mostrarAlerta("Tarea agregada correctamente ✅");
  }
}

// Evento al botón "Agregar"
document.getElementById("agregar").addEventListener("click", agregarTarea);