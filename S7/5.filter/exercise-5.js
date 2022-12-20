// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers
// que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

// const newArray = streamers.filter(
//       (jugador) => {
//           if(jugador.name.includes('u')){
//               return jugador;
//           }
//       }       
//   );
// otra forma más resumida
  
  const newArray = streamers.filter((jugador) => (jugador.name.includes('u')));
  console.log(newArray);