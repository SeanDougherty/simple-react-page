import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/webcrawler.svg";

const title = "Multi-Proxied Web Crawler";
const description =
  "A Multi-Proxy based Web Crawler built using BeautifulSoup, Selenium, and fake_useragent to crawl VRBO webpages and pull pricing information.";

const WebCrawler = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<ICON />, <ICON />, <ICON />]}
    />
  );
};

export default WebCrawler;
