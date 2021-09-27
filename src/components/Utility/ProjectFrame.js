import { createUseStyles } from "react-jss";

const ProjectFrame = (props) => {
  const classes = useStyles();

  const components = props.components.map((component, index) => (
    <div className={classes.component} key={props.title + "component" + index}>
      {component}
    </div>
  ));

  return (
    <div className={classes.project}>
      <div className={classes.header}>
        <h3 className={classes.title}>{props.title}</h3>
        <div className={classes.icon}>{props.icon}</div>
      </div>
      <div className={classes.body}>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.components}>{components}</div>
        <div className={classes.navigate}></div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles((theme) => ({
  project: {
    margin: "1rem 2rem",
    backgroundColor: theme.colorLightest,
    color: theme.colorDarkest,
    border: [[theme.colorLightest, "3px", "solid"]],
    borderRadius: 10,
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
  },
  component: {
    height: 60,
    width: 60,
    "& > *": {
      width: "100%",
      height: "100%",
    },
  },
}));

export default ProjectFrame;
