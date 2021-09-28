import { createUseStyles } from "react-jss";
import { ReactComponent as Icon } from "../../resources/cv.svg";

const CV = (props) => {
  const classes = useStyles();
  return (
    <a
      href="https://drive.google.com/file/d/1TIi0mNwrfWISJ61oD-ABq9qrf7rkkm6A/view?usp=sharing"
      target="_blank"
      rel="noreferrer">
      <div className={classes.icon}>
        <Icon />
      </div>
    </a>
  );
};

const useStyles = createUseStyles((theme) => ({
  icon: {
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorAccent,
    borderRadius: "30px",
    "& > svg": {
      width: 45,
      height: 45,
    },
  },
  "@media only screen and (min-width: 768px)": {
    icon: {
      width: "90px",
      height: "90px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colorAccent,
      borderRadius: "45px",
      "& > svg": {
        width: 60,
        height: 60,
      },
    },
  },
}));

export default CV;
