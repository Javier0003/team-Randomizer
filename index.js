const insertBtn = document.getElementById("boton-insertar");
const randomBtn = document.getElementById("boton-random");
const insertarNombres = document.getElementById("input-nombres");
const clearBtn = document.getElementById("boton-limpiar");
let equipo1 = document.getElementById("players");
let equipo2 = document.getElementById("players2");
let unsortedNames = [];
let sortedNames = [];
let listTeam1 = "";
let listTeam2 = "";


insertBtn.addEventListener("click", function() {
    if (unsortedNames.length < 10){
    unsortedNames.push(insertarNombres.value);
    renderNames()
    }
});

randomBtn.addEventListener("click", function() {
    let contador = 0;
    contador = 0;
    listTeam1 = "";
    listTeam2 = "";
    while (unsortedNames.length > 0 ){
        let sorting;
        sorting = Math.floor(Math.random() * unsortedNames.length);
        sortedNames.push(unsortedNames[sorting]);
        unsortedNames.splice(sorting, 1);
        contador += 1;
        console.log(contador);
        console.log(sortedNames)
    }
    if (contador === sortedNames.length){
        equipo2.innerHTML = "";
        equipo1.innerHTML = "";
        for (let i = 0; i < sortedNames.length; i++) {
            listTeam1 += "<li>" + sortedNames[i] + "</li>";
            i++
            listTeam2 += "<li>" + sortedNames[i] + "</li>";
        }  
        equipo2.innerHTML = listTeam2;
        equipo1.innerHTML = listTeam1;
    }
});

clearBtn.addEventListener("click", function() {
    unsortedNames = [];
    equipo1.innerHTML = "";
    equipo2.innerHTML = "";
    listTeam1 = "";
    listTeam2 = "";
    sortedNames = [];
    listTeam1 = "";
    listTeam2 = "";
});

function renderNames() {
    listTeam1 = "";
    listTeam2 = "";
    console.log(unsortedNames);
    for (let i = 0; i < unsortedNames.length; i++) {
        listTeam1 += "<li>" + unsortedNames[i] + "</li>";  
        i++;
        listTeam2 += "<li>" + unsortedNames[i] + "</li>";
    }  
    equipo2.innerHTML = listTeam2;
    equipo1.innerHTML = listTeam1;
}

