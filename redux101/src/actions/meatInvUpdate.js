function meatUpdate(operator, index) {
  return {
    type: "updateMeat",
    payload: {
      operator,
      index,
    },
  };
}
export default meatUpdate;
