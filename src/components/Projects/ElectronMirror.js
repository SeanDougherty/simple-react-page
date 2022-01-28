import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/mirror.svg";
import { ReactComponent as REACT } from "../../resources/react.svg";
import { ReactComponent as TYPESCRIPT } from "../../resources/typescript.svg";
import { ReactComponent as ELECTRON } from "../../resources/electron.svg";

const title = "Electron Mirror [under development]";
const description =
  "Electron application for Smart Mirror using React via the electron-react-boilerplate repository. Contains a variety of customizable sub-modules and serves as a place for endless experimentation.";

const ElectronMirror = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<REACT />, <TYPESCRIPT />, <ELECTRON />]}
      link={"https://github.com/seandough3rty/APECS"}
    />
  );
};

export default ElectronMirror;
