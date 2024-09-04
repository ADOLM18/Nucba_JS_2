const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },
  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },
  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },
  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },
  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },
  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a) pizza-id-impar
console.log("Pizzas con ID impar:");
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`- ${pizza.nombre} (ID: ${pizza.id})`);
  }
});

// b) pizza.-600?
const pizzaBarata = pizzas.some((pizza) => pizza.precio < 600);
if (pizzaBarata) {
  console.log("Sí, hay pizzas que valen menos de $600.");
} else {
  console.log("No, no hay ninguna pizza que valga menos de $600.");
}

// c) pizza-respectivo-$
console.log("Nombres y precios de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`- La ${pizza.nombre} cuesta $${pizza.precio}.`);
});

// d) ingrediente-pizza
console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`- Ingredientes de la ${pizza.nombre}:`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(`  * ${ingrediente}`);
  });
});
