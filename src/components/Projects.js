import { createUseStyles } from "react-jss";
import APECS from "./Projects/APECS";
import CipherBreaker from "./Projects/CipherBreaker";
import DES from "./Projects/DES";
import ProxySignature from "./Projects/ProxySignature";
import UpwardsPlanarity from "./Projects/UpwardsPlanarity";
import WebCrawler from "./Projects/WebCrawler";

const Projects = (props) => {
  const classes = useStyles();

  return (
    <section className={classes.page}>
      <APECS />
      <ProxySignature />
      <WebCrawler />
      <CipherBreaker />
      <DES />
      <UpwardsPlanarity />
    </section>
  );
};

const useStyles = createUseStyles((theme) => ({
  page: {
    backgroundColor: theme.colorSecondary,
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorPrimary,
    transition: [["background-color", "0.2s", "ease"]],
    padding: "3rem 0",
  },
}));

export default Projects;
