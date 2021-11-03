// its an action creaters

function frozenUpdate(operator, index) {
  // console.log(operator, index);
  return {
    type: "updateFrozen",
    payload: {
      operator,
      index,
    },
  };
}
export default frozenUpdate;
