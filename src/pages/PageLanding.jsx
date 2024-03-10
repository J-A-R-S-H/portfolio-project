import Navigation from "../components/Navigation";
import Header from "../components/Header";
import SectionProject from "../sections/SectionProjects";
import SectionAbout from "../sections/SectionAbout";
import SectionSkills from "../sections/SectionSkills";

function PageLanding() {
  return (
      <div>
          <Header />
<SectionProject />
<SectionAbout />
<SectionSkills />
      <Navigation />
    </div>


  );
}

export default PageLanding;
