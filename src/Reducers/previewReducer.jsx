const previewReducer = (state = "", action) => {
  switch (action.type) {
    case "PREVIEW":
      switch (action.payload) {
        case "Q":
          return "Heater 1";
        case "W":
          return "Heater 2";
        case "E":
          return "Heater 3";
        case "A":
          return "Heater 4";
        case "S":
          return "Clap";
        case "D":
          return "Open HH";
        case "Z":
          return "Kick n' Hat";
        case "X":
          return "Kick";
        case "C":
          return "Closed HH";
      }
      break;
    default:
      return state;
  }
};

export default previewReducer;
