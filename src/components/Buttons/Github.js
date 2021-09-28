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
        <Icon />
      </a>
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  icon: {
    minWidth: "60px",
    "& > a > svg": {
      width: 60,
      height: 60,
    },
  },
  "@media only screen and (min-width: 768px)": {
    icon: {
      width: "90px",
      height: "90px",
      "& > a > svg": {
        width: 90,
        height: 90,
      },
    },
  },
}));

export default Github;
