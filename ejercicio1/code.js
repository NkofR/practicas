const bMore = document.querySelector("#bMore");
const links = document.querySelector("#links");

bMore.addEventListener("click", (e) => {
    links.classList.toggle(`collapsed`);
});

const nombre = "Miguel"

const saludo = () => {
    let a = `Hola ${nombre} , cómo estás?`;
console.log(a)
}

saludo();

let b = "Chancho qliao";
console.log(b);
