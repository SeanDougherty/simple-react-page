import { createUseStyles } from "react-jss";
import { ReactComponent as Question } from "../resources/question.svg";
import FadeIntoViewThin from "./Utility/FadeIntoViewThin";

const Experience = (props) => {
  const classes = useStyles();
  return (
    <section className={classes.page}>
      <span className={classes.bar} />
      {/* <span id="left-column" className={classes.left}> */}
      <FadeIntoViewThin>
        <p
          className={
            classes.minor + " " + classes.leftEvent + " " + classes.event
          }>
          Entered Computer Science minor.
        </p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p
          className={
            classes.phase + " " + classes.leftEvent + " " + classes.event
          }>
          Co-founded digital health startup surrounding remote cardiac
          rehabilitation.
        </p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p
          className={
            classes.research + " " + classes.leftEvent + " " + classes.event
          }>
          Entered Computer Security research lab with Dr. Reza Tourani (left
          startup)
        </p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p
          className={
            classes.mastersEnd + " " + classes.leftEvent + " " + classes.event
          }>
          Graduated Masters in C.S.
        </p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p
          className={
            classes.question + " " + classes.leftEvent + " " + classes.event
          }>
          <Question />
        </p>
      </FadeIntoViewThin>
      {/* </span> */}
      {/* <span id="middle-column" className={classes.timeline}> */}
      <FadeIntoViewThin>
        <p className={classes.sixteen + " " + classes.year}>2016</p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p className={classes.seventeen + " " + classes.year}>2017</p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p className={classes.eighteen + " " + classes.year}>2018</p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p className={classes.nineteen + " " + classes.year}>2019</p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p className={classes.twenty + " " + classes.year}>2020</p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p className={classes.twentyone + " " + classes.year}>2021</p>
      </FadeIntoViewThin>
      {/* </span> */}
      {/* <span id="right-column" className={classes.right}> */}
      <FadeIntoViewThin>
        <p
          className={
            classes.undergrad + " " + classes.rightEvent + " " + classes.event
          }>
          Graduated B.S. in Biomedical engineering.
        </p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p
          className={
            classes.mastersStart +
            " " +
            classes.rightEvent +
            " " +
            classes.event
          }>
          Entered Graduate program for Software Engineering.
        </p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p
          className={
            classes.compSci + " " + classes.rightEvent + " " + classes.event
          }>
          Switched program focus from Software Engineering to Computer Science.
        </p>
      </FadeIntoViewThin>
      <FadeIntoViewThin>
        <p
          className={
            classes.thesis + " " + classes.rightEvent + " " + classes.event
          }>
          Thesis (named APECS) accepted to high-impact international security
          conference (ACM CCS 2021).
        </p>
      </FadeIntoViewThin>
      {/* </span> */}
      <div className={classes.disclaimer}>* events are placed roughly.</div>
    </section>
  );
};

const useStyles = createUseStyles((theme) => ({
  page: {
    position: "relative",
    backgroundColor: theme.colorPrimary,
    minHeight: "90vh",
    display: "grid",
    gridTemplateColumns: [["10%", "1.5em", "80%"]],
    gridTemplateRows: [
      [
        "minmax(2em, auto)",
        "minmax(5em, auto)",
        "minmax(2em, auto)",
        "minmax(5em, auto)",
        "minmax(2em, auto)",
        "minmax(5em, auto)",
        "minmax(2em, auto)",
        "minmax(5em, auto)",
        "minmax(2em, auto)",
        "minmax(5em, auto)",
        "minmax(2em, auto)",
        "minmax(5em, auto)",
        "minmax(2em, auto)",
      ],
    ],
    gap: [[0, 0]],
    color: theme.colorSecondary,
    transition: [["background-color", "0.2s", "ease"]],
  },
  bar: {
    gridColumn: "2 / 3",
    gridRow: "1 / 14",
    backgroundColor: theme.colorHighlight,
  },
  event: {
    textAlign: "center",
    backgroundColor: theme.colorSecondary,
    color: theme.colorLightest,
    margin: "0.5rem 2rem",
    padding: "0.75rem",
    borderRadius: 10,
    justifySelf: "left",
    alignSelf: "center",
    position: "relative",
    "&::before": {
      position: "absolute",
      width: "0.75rem",
      height: "0.75rem",
      top: 14,
      left: -5,
      content: '""',
      backgroundColor: theme.colorSecondary,
      transform: "rotate(45deg)",
    },
  },
  leftEvent: {
    gridColumn: "3 / 4",
  },
  rightEvent: {
    gridColumn: "3 / 4",
  },
  year: {
    placeSelf: "center",
    color: theme.colorDarkest,
    textOrientation: "upright",
    writingMode: "vertical-rl",
    fontWeight: "bold",
    margin: [0, 0],
  },
  sixteen: {
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  },
  seventeen: {
    gridColumn: "2 / 3",
    gridRow: "4 / 5",
  },
  eighteen: {
    gridColumn: "2 / 3",
    gridRow: "6 / 7",
  },
  nineteen: {
    gridColumn: "2 / 3",
    gridRow: "8 / 9",
  },
  twenty: {
    gridColumn: "2 / 3",
    gridRow: "10 / 11",
  },
  twentyone: {
    gridColumn: "2 / 3",
    gridRow: "12 / 13",
  },
  minor: {
    gridRow: "2 / 3",
  },
  undergrad: {
    gridRow: "3 / 4",
  },
  phase: {
    gridRow: "4 / 5",
  },
  mastersStart: {
    gridRow: "5 / 6",
  },
  research: {
    gridRow: "7 / 8",
  },
  compSci: {
    gridRow: "8 / 9",
  },
  mastersEnd: {
    alignSelf: "start",
    gridRow: "12 / 13",
  },
  thesis: {
    gridRow: "13 / 14",
  },
  question: {
    display: "none",
    gridRow: "13 / 14",
    "& > svg > g > path": {
      fill: [[theme.colorLightest], "!important"],
    },
    "& > svg > g > path:first-of-type": {
      fill: [[theme.colorSecondary], "!important"],
    },
  },
  disclaimer: {
    position: "absolute",
    top: 0,
    right: "3%",
  },
}));

export default Experience;
