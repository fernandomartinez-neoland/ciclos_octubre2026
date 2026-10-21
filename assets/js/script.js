// ENUNCIADO: cambiar el nombre al enviar lo que se escribe en el input del formulario

// const nombre=document.getElementById("nombre")
// const enviar=document.getElementById("Ename")

// const inputName=document.getElementById("name")

// enviar.addEventListener("click", ()=>{
//     nombre.textContent=inputName.value
// })
// manipulacion de arreglos
const frutas=["pera",  "manzana", "mango", "aguacate"]

console.log(frutas)
console.log(frutas[3])
console.log(frutas[6])

frutas[10]="fresa"

console.log(frutas)

frutas.pop()
console.log(frutas)
frutas.shift()
console.log(frutas)

frutas.unshift("kiwi")
console.log(frutas)
frutas.push("banana")
console.log(frutas)
frutas.splice(4, 6)
console.log(frutas)


// manipulacion de caracteres
const prof="otorrinolaringologo"

console.log(prof)
console.log(prof.indexOf("logo"))
console.log(prof.length)
console.log(prof.replace('logo', 'logia'))
console.log(prof.split('o'))
console.log(prof.slice(10, 15));
