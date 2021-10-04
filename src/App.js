import "./App.css";
import ThemeSelector from "./components/Utility/ThemeSelector";
import ThemeToggler from "./components/Buttons/ThemeToggler";
import Landing from "./components/Landing";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { createUseStyles } from "react-jss";

function App() {
  const classes = useStyles();
  return (
    <ThemeSelector>
      <div className={classes.singlePage}>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <ThemeToggler />
      </div>
    </ThemeSelector>
  );
}

const useStyles = createUseStyles((theme) => ({
  singlePage: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default App;
