import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import SectionProjects from "../sections/SectionProjects";
import SectionAbout from "../sections/SectionAbout";
import SectionSkills from "../sections/SectionSkills";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import MediaIcons from "../components/MediaIcons";


function PageLanding() {

  const restBase = "https://johnsustituido.ca/portfolio-project-headless/wp-json/wp/v2/"

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
    }, []);


  

  return (
    
      <main id="site-main" className="p-5 md:px-20 lg:px-44">
        <AnimatePresence mode="wait">
      {
        isLoading && <Preloader />
      }
      </AnimatePresence>
      <Navigation />
          <Intro restBase={restBase}/>
      
<SectionProjects restBase={restBase}/>
<SectionAbout restBase={restBase}/>
<SectionSkills restBase={restBase}/>
<MediaIcons />


    </main>


  );
}

export default PageLanding;
