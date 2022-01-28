import { createUseStyles } from "react-jss";

const Banner = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <h5>Check out my .... !</h5>
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  banner: {
    backgroundColor: theme.colorSecondary,
    height: "0vh",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colorPrimary,
    animationName: "$expand",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationTimingFunction: "ease-in-out",
    animationDelay: "1s",
    animationFillMode: "forwards",
  },
  "@keyframes expand": {
    "0%": {
      height: "0vh",
    },
    "100%": {
      height: "6vh",
    },
  },
}));

export default Banner;
