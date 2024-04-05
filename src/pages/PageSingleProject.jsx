import { useParams, Link } from "react-router-dom";
import ProjectsLoader from "../components/ProjectsLoader";
import { AnimatePresence } from "framer-motion";
import { useState,useEffect } from "react";
import { featuredImage } from "../util/toolbox";
import MediaIcons from "../components/MediaIcons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCircleLeft)

function PageSingleProject({restBase}) {
  const {slug} = useParams()
  const restPath = restBase + `posts?slug=${slug}&_embed`
  
  const formattedSlug = slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

const [isLoading, setLoading] = useState(true)
const [restData, setData] = useState([])

 

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(restPath)
        if ( response.ok ) {
            const data = await response.json()
            setData(data)

           setTimeout(() => {
    window.scrollTo(0, 0);
    setLoading(false);

  }, 1000)
        } else {
            setLoading(true)
        }
    }
    fetchData()
}, [restPath])



  console.log(slug)
  return (
    <div className="p-8 md:px-20 lg:px-48">
<main id="site-main" className="lg:flex gap-4">
          <AnimatePresence mode="wait">
      {
        isLoading && <ProjectsLoader word={formattedSlug}/>
      }
            </AnimatePresence>
            

            <Link to={`/projects`}>
<FontAwesomeIcon icon={faCircleLeft} size="2xl" className="mb-2" style={{color: "#ffffff",}}/>
</Link>
{restData.map(project => (

          <div>
          {project.featured_media !== 0 && project._embedded &&
                            <figure className="featured-image w-full" dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
                        }
           </div>
                    ))}

<section className="flex flex-col gap-4 ">
  {restData.length > 0 && (
  <div>
    <h1 className="mt-2 lg:mt-0">{restData[0].title.rendered}</h1>
    <p>
      {restData[0].acf.tools_used.map((tool, index) => (
        
        <span key={index}>{tool.tool} | </span>

      ))}
    </p>
  </div>
)}



  <article>
<h2>Overview</h2>
{restData.length > 0 && (
<p>
{restData[0].acf.project_description}
</p>
)}
</article>
<article>
<h2>Things I've learned</h2>
{restData.length > 0 && (
<p>
{restData[0].acf.project_wdil}
</p>
)}
</article>
<article>
<h2>Reflection</h2>
{restData.length > 0 && (
<p>
{restData[0].acf.project_reflection}
</p>
)}
</article>


<div className="grid grid-cols-1 	">
<Link className="text-center max-w-96	 bg-accent hover:bg-primary font-bold py-2 px-4 rounded-full mt-4 m-auto w-full	">
 Live Site
    </Link>
    
    

<Link className="text-center max-w-96	bg-accent hover:bg-primary font-bold py-2 px-4 rounded-full mt-2 m-auto w-full	">
Github  </Link>
</div>
</section>


    </main>

<footer>
<MediaIcons />
</footer>
</div>


  );
}

export default PageSingleProject;
