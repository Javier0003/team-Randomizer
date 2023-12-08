const btns = {
  insert: document.getElementById("boton-insertar"),
  random: document.getElementById("boton-random"),
  clear: document.getElementById("boton-limpiar"),
};
const insertarNombres = document.getElementById("input-nombres");
const displays = {
  team1: document.getElementById("players"),
  team2: document.getElementById("players2"),
  nameList: document.getElementById("allNames"),
};

const unsortedNames = [];
unsortedNames.map((item, index) => {
  printList(item);
});

btns.insert.addEventListener("click", function () {
  insertFunction();
});

btns.random.addEventListener("click", function () {
  displays.team1.innerHTML = "";
  displays.team2.innerHTML = "";
  const sorted = unsortedNames.sort(() => 0.5 - Math.random());
  const midPoint = Math.ceil(sorted.length / 2);
  let team1, team2;

  if (sorted.length % 2 === 0) {
    team1 = sorted.slice(0, midPoint);
    team2 = sorted.slice(midPoint);
    print(team1, team2);
    return;
  }
  team1 = sorted.slice(0, midPoint);
  team2 = sorted.slice(midPoint);
  print(team1, team2);
});

btns.clear.addEventListener("click", function () {
  unsortedNames = [];
  displays.team1.innerHTML = "";
  displays.team2.innerHTML = "";
  displays.nameList.innerHTML = "";
});

addEventListener("keydown", function (e) {
  if (e.code === "Enter") insertFunction();
});

function print(a, b) {
  a.map((item) => {
    displays.team1.innerHTML += `<li>${item}</li>`;
  });
  b.map((item) => {
    displays.team2.innerHTML += `<li>${item}</li>`;
  });
}

function printList(a) {
  displays.nameList.innerHTML += `<li>${a}</li>`;
}

function insertFunction() {
  if (insertarNombres.value.length !== 0 && unsortedNames.length <= 10) {
    unsortedNames.push(insertarNombres.value);
    printList(insertarNombres.value);
  }
  if (insertarNombres !== "") insertarNombres.value = "";
}
