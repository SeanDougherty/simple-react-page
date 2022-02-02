import { createUseStyles } from "react-jss";
import ShimmyOnViewThin from "./ShimmyOnViewThin";

const ProjectFrame = (props) => {
  const classes = useStyles();
  let linkMessage = "< View Source Code />";
  if (props.customLinkMessage) {
    linkMessage = props.customLinkMessage;
  }

  const components = props.components.map((component, index) => (
    <div
      className={classes.component}
      key={props.title + "component" + index}
      data-tip={props.componentTips[index]}>
      {component}
    </div>
  ));

  return (
    <a
      className={classes.anchor}
      href={props.link}
      target="_blank"
      rel="noreferrer">
      <div className={classes.project}>
        <div className={classes.header}>
          <h3 className={classes.title}>{props.title}</h3>
          <div className={classes.icon}>{props.icon}</div>
        </div>
        <div className={classes.body}>
          <p className={classes.description}>{props.description}</p>
          <div className={classes.components}>{components}</div>
          <ShimmyOnViewThin delay={700}>
            <div className={classes.navigate}>{linkMessage}</div>
          </ShimmyOnViewThin>
        </div>
      </div>
    </a>
  );
};

const useStyles = createUseStyles((theme) => ({
  anchor: {
    textDecoration: "none",
    color: "inherit",
    "&:hover $navigate": {
      animationName: "$shake",
      animationDuration: "0.3s",
      animationIterationCount: "1",
      animationTimingFunction: "ease",
      animationDelay: "0s",
    },
  },
  project: {
    margin: "1rem 2rem",
    backgroundColor: theme.colorLightest,
    color: theme.colorDarkest,
    border: [[theme.colorLightest, "3px", "solid"]],
    borderRadius: 10,
    boxShadow: "4px 4px 10px 4px  rgba(0,0,0,1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colorAccent,
    borderRadius: [[10, 10, 0, 0]],
    "& > *": {
      padding: "0.5rem 1rem",
    },
  },
  icon: {
    height: 60,
    width: 60,
    "& > *": {
      width: "100%",
      height: "100%",
    },
  },
  title: {
    margin: 0,
  },
  body: {},
  description: {
    padding: "0 0.75rem",
  },
  components: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "0.25rem 0 1rem 0",
  },
  component: {
    position: "relative",
    height: 60,
    width: 60,
    "& > *": {
      width: "100%",
      height: "100%",
    },
    "&:hover": {
      marginTop: "1.5rem",
    },
    "&:hover:before": {
      content: "attr(data-tip)",
      backgroundColor: theme.colorAccent,
      color: theme.colorDarkest,
      padding: [["2px", "5px"]],
      borderRadius: "5px",
      top: "-1.75rem",
      position: "absolute",
      whiteSpace: "nowrap",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "99",
    },
    "&:hover:after": {
      content: "",
      backgroundColor: theme.colorAccent,
      color: theme.colorDarkest,
      padding: [["2px", "5px"]],
      borderRadius: "5px",
      top: "-1.75rem",
      position: "absolute",
      whiteSpace: "nowrap",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "99",
    },
  },
  navigate: {
    textAlign: "center",
    padding: "0.5rem",
    margin: "0.5rem",
  },
  "@keyframes shake": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "25%": {
      transform: "rotate(5deg)",
    },
    "50%": {
      transform: "rotate(0deg)",
    },
    "75%": {
      transform: "rotate(-5deg)",
    },
    "100%": {
      transform: "rotate(0deg)",
    },
  },
  "@media only screen and (min-width: 768px)": {
    anchor: {
      width: "45vw",
      margin: [["3rem", "1vw", "3rem", "1vw"]],
    },
  },
  "@media only screen and (min-width: 1366px)": {
    anchor: {
      width: "30vw",
      margin: [["3rem", "1vw", "3rem", "1vw"]],
    },
  },
}));

export default ProjectFrame;
