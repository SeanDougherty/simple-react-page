import { createUseStyles } from "react-jss";
import { ReactComponent as Icon } from "../../resources/github.svg";

const Github = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.icon}>
      <a
        href="https://github.com/seandough3rty"
        target="_blank"
        rel="noreferrer">
        <Icon></Icon>
      </a>
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  icon: {
    minWidth: "60px",
  },
}));

export default Github;
