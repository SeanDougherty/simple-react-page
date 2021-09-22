import { createUseStyles } from "react-jss";
import { ReactComponent as Icon } from "../../resources/github.svg";

const Github = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.icon}>
      <Icon />
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  icon: {
    minWidth: "60px",
  },
}));

export default Github;
