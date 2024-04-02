import { useParams } from "react-router-dom";
import ProjectsLoader from "../components/ProjectsLoader";
import { AnimatePresence } from "framer-motion";
import { useState,useEffect } from "react";

function PageSingleProject({restBase}) {
  const {slug} = useParams()
  const restPath = restBase + `posts?slug=${slug}&_embed`
  
  const formattedSlug = slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
console.log(formattedSlug)

const [isLoading, setLoading] = useState(true)

useEffect(() => { 
  const timer = setTimeout(() => {
    setLoading(false);
    window.scrollTo(0, 0);
  }, 0);
  }, []);
 

  console.log(slug)
  return (
      <main>
          <AnimatePresence mode="wait">
      {
        isLoading && <ProjectsLoader word={formattedSlug}/>
      }
            </AnimatePresence>


         <p>Projects</p>

    </main>


  );
}

export default PageSingleProject;
