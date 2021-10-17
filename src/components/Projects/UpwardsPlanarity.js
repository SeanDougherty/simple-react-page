import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/graph.svg";
import { ReactComponent as CPLUSPLUS } from "../../resources/cplusplus.svg";
import OGDF from "../../resources/OGDF.webp";

const title = "Upwards Planar Graph Embedding";
const description =
  "UPGE uses the OGDF (Open Graph Drawing Framework) C++ library to embed input graphs as upward-planar graphs.";

const UpwardsPlanarity = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[
        <CPLUSPLUS />,
        <img src={OGDF} alt="Open Graph Drawing Framework" />,
      ]}
      link={"https://github.com/seandough3rty/Upwards-Planarity"}
    />
  );
};

export default UpwardsPlanarity;
