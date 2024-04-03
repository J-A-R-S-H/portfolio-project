import { useParams, Link } from "react-router-dom";
import ProjectsLoader from "../components/ProjectsLoader";
import { AnimatePresence } from "framer-motion";
import { useState,useEffect } from "react";
import { featuredImage } from "../util/toolbox";

function PageSingleProject({restBase}) {
  const {slug} = useParams()
  const restPath = restBase + `posts?slug=${slug}&_embed`
  
  const formattedSlug = slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
console.log(formattedSlug)

const [isLoading, setLoading] = useState(true)
const [restData, setData] = useState([])

 

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(restPath)
        if ( response.ok ) {
            const data = await response.json()
            console.log(data, "all the projects")
            setData(data)

           setTimeout(() => {
    window.scrollTo(0, 0);
    setLoading(false);

  }, 0)

  
        } else {
            setLoading(true)
        }
    }
    fetchData()
}, [restPath])



  console.log(slug)
  return (
<main className="p-5 md:px-20 lg:px-44 ">
          <AnimatePresence mode="wait">
      {
        isLoading && <ProjectsLoader word={formattedSlug}/>
      }
            </AnimatePresence>
            

{restData.map(project => (

          <div>
          {project.featured_media !== 0 && project._embedded &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
                        }
           </div>
                    ))}

{restData.length > 0 && (
  <h1>{restData[0].title.rendered}</h1>
)}
<h2>Overview</h2>
{restData.length > 0 && (
<p>
{restData[0].acf.project_description}
</p>
)}
<h2>Things I've learned</h2>

{restData.length > 0 && (
<p>
{restData[0].acf.project_wdil}
</p>
)}
<h2>Reflection</h2>
{restData.length > 0 && (
<p>
{restData[0].acf.project_reflection}
</p>

)}


<button className="bg-accent hover:bg-primary font-bold py-2 px-4 rounded-full mt-4 m-auto">
 Live Site
    </button>
    

<button className="bg-accent hover:bg-primary font-bold py-2 px-4 rounded-full mt-4 m-auto">
Github  </button>
    </main>


  );
}

export default PageSingleProject;
