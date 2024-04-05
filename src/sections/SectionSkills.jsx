import ReactDOM from 'react-dom'

import { useState } from "react"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs, faCss3, faReact, faHtml5, faSass, faGitAlt, faPhp} from "@fortawesome/free-brands-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";


library.add(faJs, faCss3, faReact, faHtml5, faSass,faGitAlt, faPhp)

function SectionSkills({restBase}) {

    const restPath = restBase + 'coding?_embed'
    const restPathDesign = restBase + "design?_embed"
    const [restData, setData] = useState([])
    const [restDataDesign, setDataDesign] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            const responseDesign = await fetch(restPathDesign);

            if (response.ok && responseDesign.ok) {
                const data = await response.json();
                const dataDesign = await responseDesign.json();
                setData(data);
                setDataDesign(dataDesign);
                const timer = setTimeout(() => {
                    setLoadStatus(true);
                    window.scrollTo(0, 0);
                  }, 2000);
            } else {
                setLoadStatus(false);
            }
        };
        fetchData();
    }, [restPath, restPathDesign]);
    

    return (
        <>
            {isLoaded ? (
                <section id="skills" className="mt-32">
                    <h2 className="text-center skills-header-text">Skills</h2>
                    <h3 className='programming-title w-fit'>Programming</h3>
                    <div className='flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-normal'>                   
                         {restData.map(skill => (
                            <div className="mt-4 bg-accent flex gap-5 items-center bg-accent rounded-lg  hover:bg-secondary w-72 transition duration-300 ease-in-out transform hover:scale-105 w-72" >
<div className='bg-secondary rounded-l-lg	p-2 w-14 flex justify-center items-center'>
<FontAwesomeIcon icon={skill.acf.skill_svg} size="2xl" />
</div>



                            <p className='font-medium'>{skill.name}</p> 
                        </div>
                    ))}
                    </div>

<h3 className='mt-20 design-title w-fit'>Design</h3>

<div className='flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-normal'>    
{restDataDesign.map(skill => (
              
<div className="mt-4 bg-accent flex gap-5 items-center bg-accent rounded-lg  hover:bg-primary w-72 transition duration-300 ease-in-out transform hover:scale-105 w-72" >
<div className={`${skill.name} bg-primary rounded-l-lg p-2 w-14 flex justify-center items-center design-div`} dangerouslySetInnerHTML={{ __html: skill.acf.skill_svg }} />
                   <p className='font-medium'>{skill.name}</p> 
                   </div>
))}

                    </div>  


                </section>
                
            ) : (
           
<p>Load</p>


            )}
            </>
    );
}

  export default SectionSkills;
  