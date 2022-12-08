import ACTION_THEME from "./ACTION_THEME";

// object ={ primary: "dark" || "light", print: "print" / "" }

function ThemeReducer(state, action) {
  switch (action.type) {
    case ACTION_THEME.PRIMARY:
      return { ...state, primary: state.primary == "dark" ? "light" : "dark" };

    case ACTION_THEME.PRINT:
      return { ...state, print: state.print == "PrintView" ? "" : "PrintView" };

    default:
      return { ...state, primary: "dark", print: "" };
  }
}

export default ThemeReducer;
