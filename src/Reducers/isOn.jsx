const isOn = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_POWER":
      return !state;
    default:
      return state;
  }
}

export default isOn;