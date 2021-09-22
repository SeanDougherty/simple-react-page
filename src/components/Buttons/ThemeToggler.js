import { createUseStyles, useTheme } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const ThemeToggler = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isToggled = useSelector((store) => store.ui.theme_id);
  const toggleHandler = () => {
    dispatch(uiActions.themeToggled());
  };
  let themeName;
  if (isToggled) {
    themeName = "Dark";
  } else {
    themeName = "Light";
  }

  return (
    <div className={classes.wrapper}>
      <p>Theme: {themeName}</p>
      <label className={classes.toggleSwitch}>
        <input type="checkbox" checked={isToggled} onChange={toggleHandler} />
        <span className={classes.switch} />
      </label>
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  wrapper: {
    position: "fixed",
    right: 10,
    top: 10,
    fontSize: "0.75rem",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.colorSecondary,
    borderRadius: "10px",
    boxShadow: "0 3px 15px 0px  rgba(0,0,0,0.6)",
    "& > *": {
      marginLeft: 5,
      marginRight: 5,
      color: theme.colorPrimary,
    },
    animationName: "$float",
    animationDuration: "6s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
  toggleSwitch: {
    position: "relative",
    display: "inline-block",
    width: "50px",
    height: "25px",
    '& input[type="checkbox"]': {
      display: "none",
      "&:checked + $switch::before": {
        transform: "translateX(25px)",
        backgroundColor: theme.colorPrimary,
      },
      "&:checked + $switch": {
        backgroundColor: theme.colorAccent,
      },
    },
  },
  switch: {
    position: "absolute",
    cursor: "pointer",
    backgroundColor: theme.colorAccent,
    borderRadius: "25px",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transition: [["background-color", "0.2s", "ease"]],
    "&::before": {
      position: "absolute",
      content: '""',
      left: 2,
      top: 2,
      width: 21,
      height: 21,
      backgroundColor: theme.colorPrimary,
      borderRadius: "50%",
      transition: [["transform", "0.3s", "ease"]],
    },
  },
}));

export default ThemeToggler;
