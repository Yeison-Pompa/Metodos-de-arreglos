let tareas = [
    {id: 301, nombre:"Asistir a clases", realizado: false,},
    {id: 302, nombre:"Hacer la tarea", realizado: false,},
    {id: 303, nombre:"Cocinar la cena", realizado: false,}
];
const lista_tareas = document.querySelector("#lista");
const btn = document.querySelector("#agregar");
const tarea_input =document.querySelector("#input")

const agregar_tareas = () => {
  let html = "";
  for (const tarea of tareas) {
    html += `<div class="row">
            <div class="col-2">${tarea.id}</div>
            <div class="col-6">${tarea.nombre}</div>  
          <div class="col-2"><input type='checkbox' onclick='actualizar(${
            tarea.id
          })' ${tarea.realizado === true ? "checked" : null}></div>
          <div class="col-2"><button class="mb-1 btn btn-danger" onclick='eliminar(${
            tarea.id
          })'><i class="fa-solid fa-trash-can"></i></button></div> 
          </div>
          `;;
  }

  lista_tareas.innerHTML = html;
};

agregar_tareas();

btn.addEventListener("click", () => {
  let nueva_tarea = tarea_input.value;
  tareas.push(nueva_tarea);
  tarea_input.value = "";
  agregar_tareas();
});


const eliminar = (id)=>{

let tareaindex = tareas.findIndex((tarea)=> tarea.id === id

)

tareas.splice(tareaindex,1)

agregar_tareas()

}