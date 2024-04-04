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
    <div className="p-8 md:px-20 lg:px-48">
<main >
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

<section className="flex flex-col gap-4 lg:">
{restData.length > 0 && (
  <h1 className="mt-2">{restData[0].title.rendered}</h1>
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


</section>

    </main>

<footer className="grid grid-cols-1	">
<button className="bg-accent hover:bg-primary font-bold py-3 px-4 rounded-full mt-4 m-auto w-full	">
 Live Site
    </button>
    

<button className="bg-accent hover:bg-primary font-bold py-3 px-4 rounded-full mt-2 m-auto w-full	">
Github  </button>
</footer>

</div>


  );
}

export default PageSingleProject;
