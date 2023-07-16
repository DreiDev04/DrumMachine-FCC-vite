const isBank = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BANK":
      return !state;
    default:
      return state;
  }
}

export default isBank;