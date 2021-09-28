import ProjectFrame from "../Utility/ProjectFrame";
import { ReactComponent as ICON } from "../../resources/webcrawler.svg";
import { ReactComponent as Python } from "../../resources/python.svg";
import { ReactComponent as Selenium } from "../../resources/selenium.svg";

const title = "Multi-Proxied Web Crawler";
const description =
  "A Multi-Proxy based Web Crawler built using BeautifulSoup, Selenium, and fake_useragent to crawl VRBO webpages and pull pricing information.";

const WebCrawler = (props) => {
  return (
    <ProjectFrame
      title={title}
      description={description}
      icon={<ICON />}
      components={[<Python />, <Selenium />]}
      link={"https://github.com/seandough3rty/Multi-Proxied-WebCrawler"}
    />
  );
};

export default WebCrawler;
