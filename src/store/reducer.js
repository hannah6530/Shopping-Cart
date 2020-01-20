const initialstate = {
  shirtQuantity: 0

}

const reducer =  (state = initialstate, action) => {
  if (action.type === 'INCREMENT_SHIRT') {
    return {
      shirtQuantity: state.shirtQuantity + 1
    }
  }
  return state;
};

export default reducer;
