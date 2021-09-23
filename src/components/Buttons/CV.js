import { createUseStyles } from "react-jss";
import { ReactComponent as Icon } from "../../resources/cv.svg";

const CV = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.icon}>
      <a
        href="https://drive.google.com/file/d/1TIi0mNwrfWISJ61oD-ABq9qrf7rkkm6A/view?usp=sharing"
        target="_blank"
        rel="noreferrer">
        <Icon />
      </a>
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  icon: {
    width: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorAccent,
    borderRadius: "30px",
  },
}));

export default CV;
