import { createUseStyles } from "react-jss";
import sean from "../resources/sean.webp";
import { ReactComponent as DownArrow } from "../resources/down-arrow.svg";
import Github from "./Buttons/Github";
import LinkedIn from "./Buttons/LinkedIn";
import CV from "./Buttons/CV";

const Landing = (props) => {
  const classes = useStyles();
  return (
    <section className={classes.page}>
      <span id="profile-photo">
        <img src={sean} alt="Sean Dougherty" />
      </span>
      <p className={classes.greeting}>Hi, my name is </p>
      <hr />
      <h1>Sean Dougherty</h1>
      <h2>Software Engineer</h2>
      <h3>
        Email:{" "}
        <a href="mailto:inbox@seandougherty.dev">inbox@seandougherty.dev</a>
      </h3>
      <h3>
        Phone Number: <a href="+19134247703">(913) 424-7703</a>
      </h3>
      <div className={classes.links}>
        <Github />
        <LinkedIn />
        <CV />
      </div>
      <div className={classes.footer}>
        <DownArrow />
        <p>more below</p>
        <DownArrow />
      </div>
    </section>
  );
};

const useStyles = createUseStyles((theme) => ({
  page: {
    backgroundColor: theme.colorPrimary,
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    color: theme.colorSecondary,
    transition: [["background-color", "0.2s", "ease"]],
    "& > *": {
      marginLeft: "1rem",
    },
    "& > span": {
      marginTop: "2rem",
      height: "60vmin",
      width: "60vmin",
      backgroundColor: theme.colorAccent,
      borderRadius: "30vmin",
      "& > img": {
        height: "56vmin",
        width: "56vmin",
        position: "relative",
        top: "2vmin",
        left: "2vmin",
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
    "& > h3": {
      fontWeight: "normal",
      marginTop: 0,
      marginBottom: "0.5rem",
      "& > a": {
        textDecoration: "none",
        color: theme.colorSecondary,
        paddingLeft: "0.5rem",
      },
    },
    "& > hr": {
      width: "33vw",
      borderTop: [[2, "solid", theme.colorHighlight]],
      margin: "0.5rem 1rem",
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
  footer: {
    position: "sticky",
    bottom: 0,
    backgroundColor: theme.colorPrimary,
    display: "flex",
    margin: 0,
    marginTop: "auto",
    width: "98vw",
    justifyContent: "space-between",
    overflow: "visible",
    "& > p": {
      margin: [0, 0, 5, 0],
      color: theme.colorSecondary,
    },
    "& > svg": {
      alignSelf: "center",
      width: 20,
      margin: [0, 3],
      overflow: "visible",
      "& > g > path": {
        fill: [[theme.colorSecondary], "!important"],
        animationName: "$float",
        animationDuration: "2s",
        animationIterationCount: "8",
        animationTimingFunction: "ease-in-out",
        animationDelay: "4s",
      },
    },
  },
  "@keyframes float": {
    "0%": {
      transform: "translatey(0px)",
    },
    "50%": {
      transform: "translatey(-6px)",
    },
    "100%": {
      transform: "translatey(0px)",
    },
  },
  "@media only screen and (min-width: 768px)": {
    page: {
      alignItems: "center",
      justifyContent: "space-evenly",
      "& > span": {
        height: "60vmin",
        width: "60vmin",
        borderRadius: "30vmin",
        "& > img": {
          height: "56vmin",
          width: "56vmin",
          top: "2vmin",
          left: "2vmin",
        },
      },
    },
    links: {
      minWidth: "50vmin",
    },
  },
  "@media only screen and (min-width: 1367px)": {
    page: {
      alignItems: "center",
      justifyContent: "space-evenly",
      "& > span": {
        height: "40vmin",
        width: "40vmin",
        borderRadius: "20vmin",
        "& > img": {
          height: "36vmin",
          width: "36vmin",
          top: "2vmin",
          left: "2vmin",
        },
      },
    },
  },
}));

export default Landing;
