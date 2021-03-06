import { createUseStyles } from "react-jss";
import Collapsible from "./Utility/Collapsible";
import { ReactComponent as Diving } from "../resources/diving.svg";
import { ReactComponent as Gardening } from "../resources/gardening.svg";
import { ReactComponent as Meditating } from "../resources/meditating.svg";
import FadeIntoView from "./Utility/FadeIntoView";

const About = (props) => {
  const classes = useStyles();
  return (
    <section className={classes.page}>
      <div className={classes.bio}>
        <div className={classes.header}>
          <h2>Who am I?</h2>
          <div className={classes.hobbies}>
            <FadeIntoView delay={0}>
              <Gardening />
            </FadeIntoView>
            <FadeIntoView delay={50}>
              <Diving />
            </FadeIntoView>
            <FadeIntoView delay={100}>
              <Meditating />
            </FadeIntoView>
          </div>
        </div>
        <hr />
        <p>
          I’m a Software Engineer and Computer Science Researcher located in the
          United States. I have spent the past few years working on projects
          focused on progressive technology, user privacy, and creating
          intuitive, dynamic user experiences. Highly-driven person, problem
          solver, and highly collaborative individual with a knack for technical
          problems.
          <br />
          <br />
          Fan of meditative practices, outdoor activities, regenerative
          agriculture, and scuba diving. Known to geek out about coffee and to
          enjoy the occasional smash bros game.
          <br />
          <br />
          Interested in the entire spectrum of Software Engineering (with
          special interests in edge computing, serverless design, and
          sustainable tech). Hell bent on working on ambitious projects with
          positive people.
        </p>
      </div>
      <div className={classes.story}>
        <Collapsible>
          <h2>My story</h2>
          <hr />
          <p>
            I earned a B.S. in Biomedical Engineering with a minor in Computer
            Science at Saint Louis University in 2017. While spending the
            following two years co-founding and leading software development for
            the local St. Louis digital health startup, phas3, I also joined
            Saint Louis University's M.S. Computer Science program.
          </p>
          <p>
            My time in the healthcare sector had driven my focus on usability,
            quality, and data privacy. My head-first entrance into the software
            development industry sparked a passion for computer science, systems
            design, and technical leadership that continues to this day. Joining
            SLU's graduate program gave me an opportunity to learn in the
            classroom and apply knowledge in the office.
          </p>
          <p>
            In 2019, I left phas3 to pursue a career in research within Dr. Reza
            Tourani's lab. Maintaining a position as Dr. Tourani's graduate
            research assistant and senior researcher of the lab, I led efforts
            in Serverless Design, Adversarial Machine Learning, and Edge
            Computing Security.
          </p>
          <p>
            Since graduating, my thesis has recently been accepted to one of the
            highest impact international Computer Science conferences, ACM
            Computer and Communications Security (ACM CCS).
          </p>
        </Collapsible>
      </div>
      <p>
        I am happy to announce that I have recently accepted a position as a
        Software Engineer with Microsoft
      </p>
    </section>
  );
};

const useStyles = createUseStyles((theme) => ({
  page: {
    backgroundColor: theme.colorSecondary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    minHeight: "80vh",
    maxWidth: "100vw",
    color: theme.colorPrimary,
    transition: [["background-color", "0.2s", "ease"]],
    "& > *": {
      marginLeft: "1rem",
      marginBottom: "3vh",
    },
    "& h2": {
      marginTop: "0",
      marginBottom: 0,
    },
    "&  h3": {
      marginTop: 0,
      marginBottom: 0,
    },
    "&  p": {
      marginTop: 12,
      marginBottom: 16,
      marginRight: "0.25rem",
    },
    "& > p:last-of-type": {
      minWidth: "90vw",
      minHeight: "3rem",
      marginRight: "1rem",
      marginBottom: "3vh",
      marginTop: 0,
      padding: "0.25rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      borderRadius: 10,
      backgroundColor: theme.colorAccent,
      color: theme.colorDarkest,
    },
  },
  bio: {
    "& > hr": {
      marginRight: "1rem",
      marginLeft: 0,
      borderTop: [[2, "solid", theme.colorAccent]],
    },
    "& > p": {
      marginBottom: 0,
    },
  },
  story: {},
  header: {
    display: "flex",
    alignItems: "center",
    marginTop: "5vh",
    "& > h2": {
      marginRight: "auto",
    },
  },
  hobbies: {
    display: "flex",
    "& > div > svg": {
      width: "50px",
      marginLeft: "0.5rem",
      "& > g > path:first-of-type": {
        fill: [[theme.colorAccent], "!important"],
      },
    },
    "& > div > svg:last-of-type": {
      marginRight: "1rem",
    },
  },
  "@media only screen and (min-width: 768px)": {
    page: {
      minHeight: "60vh",
      flexDirection: "row",
      flexFlow: "wrap",
      "& > p:last-of-type": {
        fontSize: "1.5rem",
        fontWeight: "500",
      },
    },
    bio: {
      width: "45vw",
    },
    story: {
      marginTop: "5vh",
      width: "45vw",
    },
  },
}));

export default About;
