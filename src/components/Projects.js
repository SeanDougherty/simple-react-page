import { createUseStyles } from "react-jss";

const Projects = (props) => {
  const classes = useStyles();

  return <div className={classes.page}>Projects</div>;
};

const useStyles = createUseStyles((theme) => ({
  page: {
    backgroundColor: theme.colorSecondary,
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorPrimary,
    transition: [["background-color", "0.2s", "ease"]],
  },
}));

export default Projects;
