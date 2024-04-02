import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import Navigation from "../components/Navigation";
import { featuredImage } from "../util/toolbox";


function PageProjects({restBase}) {
    
    const restPath = restBase + 'posts?_embed'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                console.log(data, "all the projects")
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])

  return (
<main className="p-5 md:px-20 lg:px-44">

    <div className="projects-grid ">
         {restData.map(project => (
    <article className="project-article" key={project.title.rendered}>
          {console.log(project)}
          <div className="relative">

          {project.featured_media !== 0 && project._embedded &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
                        }
          <div className="absolute top-0 right-0">
          <Link to={`/projects/${project.slug}`}>
           </Link>
           </div>
          </div>    

        

          <Link to={`/projects/${project.slug}`}>
 <h3>{project.title.rendered}</h3></Link>
        
    </article>
                    ))}
                    </div>

               <Navigation />

               </main>  );
}

export default PageProjects;
