import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
faArrowUpRightFromSquare
library.add(faArrowUpRightFromSquare)

import { featuredImage } from "../util/toolbox";

function SectionProjects({restBase}) {
  const restPath = restBase + 'posts?categories=15&_embed'
  const restPathHome = restBase + 'pages/6?_embed'
      const [restData, setData] = useState([])
      const [restDataHome, setDataHome] = useState([])
      const [isLoaded, setLoadStatus] = useState(false)
  
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(restPath);
      const responseHome = await fetch(restPathHome);

      if (response.ok && responseHome.ok) {
        const data = await response.json();
        const dataHome = await responseHome.json();

        console.log(data, "posts");
        console.log(dataHome, "home");

        setData(data);
        setDataHome(dataHome);
        setLoadStatus(true);
      } else {
        console.error('Error fetching data');
        setLoadStatus(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoadStatus(false);
    }
  };

  fetchData();
}, [restPath, restPathHome]);
  return (
    <section id="projects" className="flex flex-col gap-4 lg:gap-8">
<h2 className="text-center">Featured/Live Project</h2>

     {restData.map(project => (
    <article className="max-w-3xl mx-auto" key={project.title.rendered}>
          {console.log(project)}
          <div className="relative">

          {project.featured_media !== 0 && project._embedded &&
                            <figure className="featured-image featured-image-project-section" dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
                        }
          <div className="absolute top-0 right-0">
          <Link to={`/projects`}>
           <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square " size="lg" /> 
           </Link>
           </div>
          </div>    

          <Link to={`/projects`}> <h3 className="mt-3">{project.title.rendered}</h3></Link>
          
    </article>
                    ))}

<Link to={`/projects`} className="bg-accent hover:bg-primary font-bold py-2 px-4 rounded-full max-w-80 w-full text-center self-center">
{restDataHome && restDataHome.acf && (
restDataHome.acf.view_project_text
)}
</Link>
                    

    </section>

  );
}

export default SectionProjects;
