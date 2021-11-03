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
  if (action.type === "updateFrozen") {
    console.log("Icare about this action");
    const newState = [...state];
    if (action.payload.operator === "+") {
      newState[action.payload.index].quantity++;
    } else if (action.payload.operator === "-") {
      newState[action.payload.index].quantity--;
    }
    return newState;
  } else {
    return state;
  }
}

export default frozenReducer;
