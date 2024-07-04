let tareas = [
  { id: 301, nombre: "Asistir a clases", realizado: false },
  { id: 302, nombre: "Hacer la tarea", realizado: false },
  { id: 303, nombre: "Cocinar la cena", realizado: false },
];
const lista_tareas = document.querySelector("#lista");
const btn = document.querySelector("#agregar");

const actualizar = (id) => {
  let tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
  console.log(tareaIndex);
  tareas[tareaIndex].realizado = !tareas[tareaIndex].realizado;
  let tareasRealizados = tareas.filter((tarea) => tarea.realizado == true);
  console.log(tareasRealizados);
  let realizadas = document.querySelector("#realizadas");
  realizadas.innerHTML = `Realizadas: <p class="fw-bold">${tareasRealizados.length}</p>`;
};

const agregar_tareas = () => {
  let html = "";
  for (const tarea of tareas) {
    html += `<div class="row">
            <div class="col-2">${tarea.id}</div>
            <div class="col-6">${tarea.nombre}</div>  
          <div class="col-2"><input type='checkbox' onclick='actualizar(${
            tarea.id
          })' ${tarea.realizado === true ? "checked" : null}></div>
          <div class="col-2"><button class="mb-1 btn btn-danger rounded-circle" onclick='eliminar(${
            tarea.id
          })'><i class="fa-solid fa-trash-can"></i></button></div> 
          </div>
          `;
  }

  let cantidad = document.querySelector("#cantidad");
  cantidad.innerHTML = `Total: <p class="fw-bold">${tareas.length}</p>`;

  lista_tareas.innerHTML = html;
};

agregar_tareas();

btn.addEventListener("click", () => {
  let value = document.querySelector("#input").value;
  let num1 = 100;
  let num2 = 999;
  let num_aleatorio = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  let tareas_pendientes = {
    id: num_aleatorio,
    nombre: value,
    realizado: false,
  };

  tareas.push(tareas_pendientes);
  /*   tarea_input.value = ""; */
  agregar_tareas();
});

agregar_tareas();

const eliminar = (id) => {
  let tareaindex = tareas.findIndex((tarea) => tarea.id === id);

  tareas.splice(tareaindex, 1);

  agregar_tareas();
};
