import Navigation from "../components/Navigation";
import Header from "../components/Header";
import SectionProjects from "../sections/SectionProjects";
import SectionAbout from "../sections/SectionAbout";
import SectionSkills from "../sections/SectionSkills";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";

function PageLanding() {

  const restBase = "https://johnsjustwantstochill.ca/portfolio-project-headless/wp-json/wp/v2/"

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 0);
    }, []);


  

  return (
      <main>
        <AnimatePresence mode="wait">
      {
        isLoading && <Preloader />
      }
      </AnimatePresence>

          <Header />
          <Navigation />
      
<SectionProjects restBase={restBase}/>
<SectionAbout />
<SectionSkills restBase={restBase}/>

    </main>


  );
}

export default PageLanding;
