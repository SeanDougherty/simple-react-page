import { createUseStyles } from "react-jss";

const About = (props) => {
  const classes = useStyles();
  return <div className={classes.page}>About</div>;
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

export default About;
