import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/apecs.svg";
import { ReactComponent as GRPC } from "../../resources/grpc.svg";
import { ReactComponent as CPLUSPLUS } from "../../resources/cplusplus.svg";
import geni from "../../resources/GENI.webp";
import { createUseStyles } from "react-jss";

const title = "APECS";
const description =
  "An advanced access control framework for the Pervasive Edge Computing (PEC) environment, which allows legitimate users to utilize any available edge services without need for communication beyond the network edge. This is my thesis, and is a work that has been accepted to one of the very top conferences in Computer Science.";

const APECS = (props) => {
  const classes = useStyles();
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[
        <CPLUSPLUS />,
        <GRPC classes={classes.grpc} />,
        <img src={geni} alt="GENI testbed" />,
      ]}
      link={"https://github.com/seandough3rty/APECS"}
    />
  );
};

const useStyles = createUseStyles((theme) => ({
  grpc: {
    backgroundColor: theme.colorDarkest,
  },
}));

export default APECS;
