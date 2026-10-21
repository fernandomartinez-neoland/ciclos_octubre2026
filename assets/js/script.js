// ENUNCIADO: cambiar el nombre al enviar lo que se escribe en el input del formulario

// const nombre=document.getElementById("nombre")
// const enviar=document.getElementById("Ename")

// const inputName=document.getElementById("name")

// enviar.addEventListener("click", ()=>{
//     nombre.textContent=inputName.value
// })
// manipulacion de arreglos
const frutas = ["pera", "manzana", "mango", "aguacate"];

console.log(frutas);
console.log(frutas[3]);
console.log(frutas[6]);

frutas[10] = "fresa";

console.log(frutas);

frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);

frutas.unshift("kiwi");
console.log(frutas);
frutas.push("banana");
console.log(frutas);
frutas.splice(4, 6);
console.log(frutas);

// manipulacion de caracteres
let prof = "otorrinolaringologo";

console.log(prof);
console.log(prof.indexOf("logo"));
console.log(prof.length);
console.log(prof.replace("logo", "logia"));
console.log(prof.split("o"));
console.log(prof.slice(10, 15));

// concatenacion de texto y variables
prof = prof + frutas[2];
console.log(prof);
prof += frutas[1];
console.log(prof);
prof = `hola ${prof}`;
console.log(prof);

//////////////////////////////////

const cuerpo = document.getElementsByTagName("body");
const titulo1 = document.createElement("h1");
titulo1.textContent = "For";
cuerpo[0].appendChild(titulo1);

// ciclo basico for
for (let i = 0; i <= 10; i++) {
  const contador = document.createElement("p");
  contador.textContent = i;
  cuerpo[0].appendChild(contador);
}

const titulo2 = document.createElement("h1");
titulo2.textContent = "While";
cuerpo[0].appendChild(titulo2);

let i = 0;
while (i <= 10) {
  const contador = document.createElement("p");
  contador.textContent = i;
  cuerpo[0].appendChild(contador);
  i++;
}

const titulo3 = document.createElement("h1");
titulo3.textContent = "do While";
cuerpo[0].appendChild(titulo3);

do {
  const contador = document.createElement("p");
  contador.textContent = i;
  cuerpo[0].appendChild(contador);
  i--;
} while (i >= 0);

console.log("////////////FOREACH////////////");
frutas.forEach((item, index) => {
  console.log(item);
  console.log(index);
  if (item == "kiwi") {
    console.log(`me quitaste mi manzana ${item}`);
  }
});

console.log("///////////////MAP//////////////");

console.log("esta es la fruta:", frutas)
const frutasN = frutas.map((item, index) => {
  if (item.indexOf("n")>=0) {
    console.log(item.indexOf("n"))
    return item;
  }
});

console.log("esta es la fruta con N:", frutasN)


