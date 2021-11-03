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

function meatReducer(state = seedData, action) {
  if (action.type === "updateMeat") {
    console.log("I care about this action meat");
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

export default meatReducer;
