import { createUseStyles } from "react-jss";

const Experience = (props) => {
  const classes = useStyles();
  return <div className={classes.page}>Experience</div>;
};

const useStyles = createUseStyles((theme) => ({
  page: {
    backgroundColor: theme.colorPrimary,
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorSecondary,
    transition: [["background-color", "0.2s", "ease"]],
  },
}));

export default Experience;
