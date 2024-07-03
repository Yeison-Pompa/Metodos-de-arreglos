let tareas = [];
const lista_tareas = document.querySelector("#lista");
const btn = document.querySelector("#agregar");

const agregar_tareas = () => {
  let html = "";
  for (const tarea of tareas) {
    html += `<h4>${tarea}</h4>`;
  }

  lista_tareas.innerHTML = html;
};

agregar_tareas();

btn.addEventListener("click", () => {
  let nueva_tarea = document.querySelector("input").value;
  nombres.push(nueva_tarea);

  agregar_tareas();
});
