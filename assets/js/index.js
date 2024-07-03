let tareas = [];
const lista_tareas = document.querySelector("#lista");
const btn = document.querySelector("#agregar");
const tarea_input =document.querySelector("#input")

const agregar_tareas = () => {
  let html = "";
  for (const tarea of tareas) {
    html += `<h4>${tarea}</h4>`;
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
