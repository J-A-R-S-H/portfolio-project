import Navigation from "../components/Navigation";
import Header from "../components/Header";
import SectionProject from "../sections/SectionProjects";
import SectionAbout from "../sections/SectionAbout";
import SectionSkills from "../sections/SectionSkills";

const restBase = "https://johnsjustwantstochill.ca/portfolio-project-headless/wp-json/wp/v2/"

function PageLanding() {
  return (
      <div>
          <Header />
<SectionProject />
<SectionAbout />
<SectionSkills restBase={restBase}/>
      <Navigation />
    </div>


  );
}

export default PageLanding;
