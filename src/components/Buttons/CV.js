import { createUseStyles } from "react-jss";
import { ReactComponent as Icon } from "../../resources/cv.svg";

const CV = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.icon}>
      <Icon />
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
