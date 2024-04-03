import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import Navigation from "../components/Navigation";
import { featuredImage } from "../util/toolbox";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCircleLeft)


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


    const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("featured-image-element")) {
console.log("yo")
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

  return (
<main className="p-5 md:px-20 lg:px-44 overflow-hidden">
<FontAwesomeIcon icon={faCircleLeft} />
    <div id="image-track" className="flex gap-4 mt-20" data-mouse-down-at="0" data-prev-percentage="0">
         {restData.map(project => (
    <article className="project-article" key={project.title.rendered}>
          {console.log(project)}
          <div className="relative">

          {project.featured_media !== 0 && project._embedded &&
                            <figure className="featured-image project-featured-image" dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></figure>
                        }
         
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
