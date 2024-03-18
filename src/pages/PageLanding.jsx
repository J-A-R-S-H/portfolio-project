import Navigation from "../components/Navigation";
import Header from "../components/Header";
import SectionProjects from "../sections/SectionProjects";
import SectionAbout from "../sections/SectionAbout";
import SectionSkills from "../sections/SectionSkills";

function PageLanding() {

  const restBase = "https://johnsjustwantstochill.ca/portfolio-project-headless/wp-json/wp/v2/"

  return (
      <div>
          <Header />
<SectionProjects restBase={restBase}/>
<SectionAbout />
<SectionSkills restBase={restBase}/>
      <Navigation />
    </div>


  );
}

export default PageLanding;
