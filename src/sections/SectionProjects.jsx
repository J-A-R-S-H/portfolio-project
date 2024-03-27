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
      const [restData, setData] = useState([])
      const [isLoaded, setLoadStatus] = useState(false)
  
      useEffect(() => {
          const fetchData = async () => {
              const response = await fetch(restPath)
              if ( response.ok ) {
                  const data = await response.json()
                  console.log(data, "posts")
                  setData(data)
                  setLoadStatus(true)
              } else {
                  setLoadStatus(false)
              }
          }
          fetchData()
      }, [restPath])
  return (
    <section className="mt-32">
<h2 className="text-center">Featured/Live Project</h2>

     {restData.map(project => (
    <article className="" key={project.title.rendered}>
          {console.log(project)}
          <div className="relative">

          {project.featured_media !== 0 && project._embedded &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
                        }
          <div className="absolute top-0 right-0">
          <Link to={`/projects`}>
           <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square " size="lg" />
           </Link>
           </div>
          </div>    

          <Link to={`/projects`}> <h3>{project.title.rendered}</h3></Link>
          
    </article>
                    ))}

    </section>

  );
}

export default SectionProjects;
