const seedData = [
  {
    food: "TV dinners",
    quantity: 20,
  },
  {
    food: "Frozen Veggies",
    quantity: 21,
  },
  {
    food: "Frozen Pizzas",
    quantity: 25,
  },
];

function frozenReducer(state = seedData, action) {
  return state;
}

export default frozenReducer;
