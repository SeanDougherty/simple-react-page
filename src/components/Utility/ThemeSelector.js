import { ThemeProvider } from "theming";
import { useSelector } from "react-redux";

const THEMES = {
  LIGHT: 0,
  DARK: 1,
};

const ThemeSelector = ({ children, ...props }) => {
  let theme_id = useSelector((store) => store.ui.theme_id);
  return <ThemeProvider theme={getTheme(theme_id)}>{children}</ThemeProvider>;
};

const getTheme = (theme_id) => {
  switch (theme_id) {
    case THEMES.LIGHT:
      return light_theme;
    case THEMES.DARK:
      return dark_theme;
    default:
      return light_theme;
  }
};

const light_theme = {
  colorPrimary: "#FFF",
  colorSecondary: "#00458B",
  colorAccent: "#99DDFF",
  colorHighlight: "#3FD2C7",
  colorLightest: "#FFF",
  colorDarkest: "#00458B",
};

const dark_theme = {
  colorPrimary: "#051622",
  colorSecondary: "#1BA098",
  colorAccent: "#DEB992",
  colorHighlight: "#EEE",
  colorLightest: "#EEE",
  colorDarkest: "#051622",
};

export { THEMES };
export default ThemeSelector;
