import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/splitlearning.svg";
import { ReactComponent as PYTHON } from "../../resources/python.svg";
import { ReactComponent as PYTORCH } from "../../resources/pytorch.svg";

const title = "Split Learning - Attack & Defense [in submission]";
const description =
  "My final work as a graduate student. This paper explores the vulnerability of machine learning's most contemporary privacy-aware model design (i.e., split learning). In this work, we demonstrate an 'honest-but-curious' adversary's ability can infer private properties of clients' data without model poisoning or manipulation. In addition, we detail and analyze two solutions to this vulnerability.";

const SplitLearningAttack = () => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<PYTHON />, <PYTORCH />]}
      componentTips={["Python", "PyTorch"]}
      link={"#"}
      customLinkMessage="[Not currently public]"
    />
  );
};

export default SplitLearningAttack;
