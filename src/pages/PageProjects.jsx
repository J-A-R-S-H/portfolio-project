import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import Navigation from "../components/Navigation";
    
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
      <div>
         <p>Yes it is not dynamic lol</p>

         {restData.map(project => (
    <article className="" key={project.title.rendered}>
          {console.log(project)}
          <div className="relative">
          <img className="brightness-75" src={project?._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} />
          <div className="absolute top-0 right-0">
          <Link to={`/projects${project.slug}`}>
           </Link>
           </div>
          </div>    

        

          <Link to={`/projects${project.slug}`}>
 <h3>{project.title.rendered}</h3></Link>
        
    </article>
                    ))}

               <Navigation />
    </div>


  );
}

export default PageProjects;
