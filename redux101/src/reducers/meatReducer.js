const seedData = [
  {
    food: "chicken breast",
    quantity: 40,
  },
  {
    food: "beef",
    quantity: 70,
  },
  {
    food: "pork",
    quantity: 50,
  },
];

function frozenReducer(state = seedData, action) {
  return state;
}

export default frozenReducer;
