import { createUseStyles } from "react-jss";
import SystemModel from "../resources/systemmodel.webp";
import Collapsible from "./Utility/Collapsible";

const APECS = (props) => {
  const classes = useStyles();

  return (
    <section className={classes.page}>
      <h1>My Thesis Work</h1>
      <h2>
        APECS: A Distributed <span>A</span>ccess Control Framework for{" "}
        <span>P</span>ervasive <span>E</span>dge <span>C</span>omputing{" "}
        <span>S</span>ervices{" "}
      </h2>
      <div className={classes.description}>
        <p>
          Edge Computing is a new computing paradigm where server-based
          applications (e.g. speech recognition) can operate in geographical
          proximity to the end-user (i.e., the network edge), providing highly
          desirable, low-latency services without sacrificing computing
          performance. This is in contrast to the broadly implemented cloud
          paradigm, which commonly requires privacy-sensitive user data (e.g.
          user speech data) to travel thousands of miles round-trip for
          processing and response. The great lengths that this cloud
          communication travels, not only places a large deal of trust in the
          cloud providers to respect user privacy, but it also slows down the
          performance of nearly every modern day network event when compared to
          the edge computing paradigm. With this in mind, the edge computing
          design framework has become an attractive candidate for rapid and
          widespread adoption in the technology sector and beyond. Cloud
          providers have begun to expand their service offerings and their
          resource pool to include devices that may, in the future, behave as
          edge servers. Popular disruptive technologies (e.g. autonomous
          driving, augmented reality, speech recognition) rely on the promised
          low-latency servicing that edge computing can provide.
        </p>
        <p>
          A desirable extension for edge computing is pervasiveness, that is,
          enabling any capable and authorized device at the edge to contribute
          its resources toward and collaboratively provide desired edge services
          i.e., pervasive edge computing (PEC). The notion of the ‘pervasive
          edge’, although only recently coined, has existed within the zeitgeist
          of our culture for many decades. Famous media such as Wall-E, Marvel’s
          Avengers, and Star Trek are examples of universes which realize the
          possibilities within the pervasive edge design, with their free-flow
          of information and computation from device to device and their shared
          context of understanding.
        </p>
        <p>
          However, both edge computing and pervasive edge computing system
          designs suffer from a major shortcoming and many technologies that
          count on these performance gains won’t achieve the widespread success
          mentioned above until this flaw is addressed. The failure of current
          edge computing frameworks is their inability to offer basic
          authentication and authorization, without sacrificing the very
          benefits that edge computing is intended to deliver. Authentication
          and authorization are basic requirements of contemporary compute
          system (referred to henceforth as ‘access control’) and are expected
          in any commercial or professional system. Efficient access control of
          users receiving services and edge servers handling user data, without
          sacrificing performance and/or latency, is a challenge. Current
          solutions to offer access control in the edge are based on
          non-proximal “always-on” authentication servers existing within the
          cloud. These solutions negate the latency benefits of positioning
          services at the edge.
        </p>
        <div className={classes.modelcontainer}>
          <h5>System Model</h5>
          <picture className={classes.systemmodel}>
            <source type="image/webp" srcSet={SystemModel} />
            <img src={SystemModel} alt="APECS System Model" />
          </picture>
        </div>
        <p>
          In this thesis a first of it’s kind edge computing security protocol
          is detailed, tested, and proven as a solution to this major security
          limitation of edge computing. This work knocks down a major barrier
          for the many aforementioned disruptive technologies (automated driving
          and traffic control, multi-perspective multi-user augmented reality,
          rapid and private speech recognition). The protocol, APECS, is an
          advanced access control framework for PEC, which allows legitimate
          users to utilize any available edge services without need for
          communication beyond the network edge. The APECS framework leverages
          state-of-the-art multi-authority attribute-based encryption to create
          a federated authority, which delegates the authentication and
          authorization tasks to semi-trusted edge servers, thus eliminating the
          need for an “always-on” authentication server in the cloud.
          Additionally, APECS prevents access to encrypted content by both
          unauthorized edge servers and “honest-but-curious” cloud providers
          (e.g. Google, Amazon, Microsoft). The advanced cryptographic tools
          used by APECS enables fine-grained access control and further data
          privacy when compared with contemporary cloud and edge solutions.
        </p>
        <p>
          This thesis provides experimental results using a nationwide
          collaborative network of servers operated by academic institutions
          (the GENI test-bed) used to provide the best infrastructure possible
          to mimic real-time network architectures. This rigorous testing
          approach demonstrates the scalability and effectiveness of APECS. In
          addition, results collected on the APECS system demonstrate a near 55%
          reduction in communication latency when compared to the cloud-based
          implementation while also preventing many popular malicious attacks
          (e.g. Distributed Denial of Service - DDOS). Since publishing of the
          thesis, a conference paper of APECS has been refined to include
          theoretical proofs of security to confirm its robustness using the
          widely accepted Universal Composability model for cryptographic
          analysis. This paper, based on the works of this thesis, has recently
          been accepted into the highest ranked conference in it’s field, the
          ACM Conference on Computer and Communications Security.
        </p>
      </div>
      <div className={classes.figuredetails}>
        <Collapsible>
          <h2>System Interaction Details (See figure above)</h2>
          <p>
            As shown in Step (1) of the above figure, each service provider
            initiates its AIA (Attribute Issuing Authority), hosted as a virtual
            machine on the Cloud. The AIAs onboard PEC servers and provide them
            with attributes and secret keys for their registered services (Step
            (2)). Similarly, each base station initiates its AIA to onboard its
            local PEC servers (Step (3)). An ISP may run a system-wide AIA
            rather than one per base station; but that is an implementation
            decision, which we do not discuss. At this stage, the PEC nodes are
            fully onboarded by both AIAs. A user, interested in a service,
            registers with the service provider and obtains an
            authentication/authorization token (Step (4)). To request a service,
            the user encrypts her data using the expected attributes of the
            service provider and her local base station, and sends the encrypted
            data (and her token) into the network via the base station (Step
            (5)). The base station relays the user’s request to the existing PEC
            servers (Step (6)) for enforcing access control and service
            execution. The PEC servers return the result of the service to the
            base station, which forwards it to the user (Step (7)).
          </p>
        </Collapsible>
      </div>
    </section>
  );
};

const useStyles = createUseStyles((theme) => ({
  page: {
    backgroundColor: theme.colorSecondary,
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorPrimary,
    transition: [["background-color", "0.2s", "ease"]],
    padding: "3rem 0",
    "& > h1": {
      width: "100%",
      textAlign: "center",
      fontSize: "2rem",
    },
    "& > h2": {
      margin: [["0.75rem", "0", "0.75rem", "1rem"]],
      marginTop: "3rem",
      padding: [[0, 9, 3, 0]],
      borderBottom: [[theme.colorPrimary, "solid", 2]],
      borderRight: [[theme.colorPrimary, "solid", 2]],
    },
  },
  description: {
    fontSize: "1.2rem",
    padding: [["1%", "5%", "1%", "5%"]],
    textIndent: "2rem",
    columnCount: 3,
    columnWidth: "30%",
    "& img": {
      width: "100%",
      height: "28%",
    },
    "& h5": {
      padding: "0.5rem",
      margin: "0.5rem",
      textAlign: "center",
      textIndent: 0,
    },
    "& p": {
      padding: 0,
      margin: 0,
    },
  },
  modelcontainer: {
    backgroundColor: theme.colorLightest,
    color: theme.colorDarkest,
    borderRadius: "30px",
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  figuredetails: {
    width: "90%",
    paddingBottom: "2%",
  },
  "@media only screen and (min-width: 768px)": {
    page: {
      minHeight: "60vh",
      flexDirection: "row",
      flexFlow: "wrap",
    },
  },
}));

export default APECS;
