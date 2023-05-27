// splice para eliminar las partes del array
const insertBtn = document.getElementById("boton-insertar");
const randomBtn = document.getElementById("boton-random");
const insertarNombres = document.getElementById("input-nombres");
const clearBtn = document.getElementById("boton-limpiar");
let equipo1 = document.getElementById("players");
let equipo2 = document.getElementById("players2");
let unsortedNames = ["javier", "xploid", "jon", "joel", "slope", "joan", "francisco", "pakflow", "pedro", "juan"];
let sorting;
let sortedNames = [];


insertBtn.addEventListener("click", function() {
    if (unsortedNames.length < 10){
    unsortedNames.push(insertarNombres.value);
    renderNames()
    }
});

randomBtn.addEventListener("click", function() {
    while (unsortedNames.length > 0 ){
        sorting = Math.floor(Math.random() * unsortedNames.length);
        unsortedNames.splice(sorting, 1);
        sortedNames.push(unsortedNames[sorting]);
        console.log(unsortedNames);
        console.log(sorting);
        console.log(unsortedNames[sorting]);
        //console.log(sortedNames);
       // console.log(sortedNames.length)
    }
    if (sortedNames === 10){
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
    sorting;
    sortedNames = [];
});

function renderNames() {
    let listTeam1 = "";
    let listTeam2 = "";
    console.log(unsortedNames);
    for (let i = 0; i < unsortedNames.length; i++) {
        listTeam1 += "<li>" + unsortedNames[i] + "</li>";
        i++
        listTeam2 += "<li>" + unsortedNames[i] + "</li>";
    }  
    equipo2.innerHTML = listTeam2;
    equipo1.innerHTML = listTeam1;
}