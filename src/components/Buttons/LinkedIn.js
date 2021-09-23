import { createUseStyles } from "react-jss";
import { ReactComponent as Icon } from "../../resources/linkedin.svg";

const LinkedIn = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.icon}>
      <a
        href="https://www.linkedin.com/in/sean-dougherty-cs/"
        target="_blank"
        rel="noreferrer">
        <Icon />
      </a>
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  icon: {
    minWidth: "60px",
  },
}));

export default LinkedIn;
