// Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías
// de las películas e imprime por consola el array de categorías.
//  Ten en cuenta que las categorías no deberían repetirse.
//  Para filtrar las categorías puedes ayudarte de la función `.includes()`.

let categories = [];
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

for (const film of movies) {
  for (const category of film.categories) {
    if (!categories.includes(category)) {
        categories.push(category);
    }
  }
}

console.log(categories);
