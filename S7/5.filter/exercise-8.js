const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const filtraMuestra = () => {
    const valorTexto = document.querySelector('[data-function="toFilterStreamers"]').value;
    newArray = streamers.filter((jugador) => (jugador.name.includes(valorTexto)));
    console.log(newArray);
}
  
const btnO = document.querySelector('[data-function="toShowFilterStreamers"]');
btnO.onclick = filtraMuestra; 

