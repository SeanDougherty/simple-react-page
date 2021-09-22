import { createUseStyles } from "react-jss";
import sean from "../resources/sean.jpg";
import Github from "./Buttons/Github";
import LinkedIn from "./Buttons/LinkedIn";
import CV from "./Buttons/CV";

const Landing = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <span>
        <img src={sean} alt="Sean Dougherty" />
      </span>
      <p className={classes.greeting}>Hi, my name is </p>
      <hr />
      <h1>Sean Dougherty</h1>
      <h2>Software Engineer</h2>
      <h4>Email: inbox@seandougherty.dev</h4>
      <h4>Phone Number: (913) 424-7703</h4>
      <div className={classes.links}>
        <Github />
        <LinkedIn />
        <CV />
      </div>
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  page: {
    backgroundColor: theme.colorPrimary,
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    color: theme.colorSecondary,
    transition: [["background-color", "0.2s", "ease"]],
    "& > *": {
      marginLeft: "1rem",
    },
    "& > span": {
      marginTop: "2rem",
      height: "30vh",
      width: "30vh",
      backgroundColor: theme.colorAccent,
      borderRadius: "15vh",
      "& > img": {
        height: "28vh",
        width: "28vh",
        position: "relative",
        top: "1vh",
        left: "1vh",
        borderRadius: "50%",
      },
    },
    "& > h1": {
      marginTop: 0,
      marginBottom: 0,
    },
    "& > h2": {
      marginTop: 0,
      marginBottom: "1rem",
    },
    "& > h4": {
      fontWeight: "normal",
      marginTop: 0,
      marginBottom: "0.5rem",
    },
    "& > hr": {
      width: "33vw",
      borderTop: [[2, "solid", theme.colorHighlight]],
    },
  },
  links: {
    margin: "4rem 0",
    display: "flex",
    justifyContent: "space-evenly",
  },
  greeting: {
    color: theme.colorSecondary,
    marginBottom: 0,
    fontSize: "1.25rem",
  },
}));

export default Landing;
