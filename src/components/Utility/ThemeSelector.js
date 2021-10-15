import { ThemeProvider } from "theming";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions, THEMES } from "../../store/ui-slice";

const ThemeSelector = ({ children, ...props }) => {
  const dispatch = useDispatch();
  let theme_id = useSelector((store) => store.ui.theme_id);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useLayoutEffect(() => {
    if (prefersDark) {
      dispatch(uiActions.themeSet(THEMES.DARK));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default ThemeSelector;
