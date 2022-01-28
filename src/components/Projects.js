import { createUseStyles } from "react-jss";
import AdventOfCode21 from "./Projects/AdventOfCode21";
import APECS from "./Projects/APECS";
import CipherBreaker from "./Projects/CipherBreaker";
import DES from "./Projects/DES";
import ElectronMirror from "./Projects/ElectronMirror";
import ProxySignature from "./Projects/ProxySignature";
import UpwardsPlanarity from "./Projects/UpwardsPlanarity";
import WebCrawler from "./Projects/WebCrawler";

const Projects = (props) => {
  const classes = useStyles();

  return (
    <section className={classes.page}>
      <h2>Previous Projects</h2>
      <APECS />
      <ElectronMirror />
      <AdventOfCode21 />
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
    backgroundColor: theme.colorPrimary,
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorSecondary,
    transition: [["background-color", "0.2s", "ease"]],
    padding: "3rem 0",
    "& > h2": {
      position: "absolute",
      top: 0,
      left: "3%",
      margin: [["0.75rem", "0", "0.5rem", "1rem"]],
      padding: [[0, 9, 3, 0]],
      borderBottom: [[theme.colorSecondary, "solid", 2]],
      borderRight: [[theme.colorSecondary, "solid", 2]],
    },
  },
  "@media only screen and (min-width: 768px)": {
    page: {
      minHeight: "60vh",
      flexDirection: "row",
      flexFlow: "wrap",
    },
  },
}));

export default Projects;
