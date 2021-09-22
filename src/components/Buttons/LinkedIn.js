import { createUseStyles } from "react-jss";
import { ReactComponent as Icon } from "../../resources/linkedin.svg";

const LinkedIn = (props) => {
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

export default LinkedIn;
