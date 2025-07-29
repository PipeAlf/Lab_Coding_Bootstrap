document.getElementById("titulo").innerHTML = "Papitas";

document.getElementById("agregar").addEventListener("click",function(){
    const input = document.getElementById("nueva-tarea");
    const texto = input.value.trim();

    if(texto){
        const li = document.createElement("li");
        li.textContent = texto;
        document.getElementById("lista-tareas").appendChild(li);
        input.value = " ";
    }
})