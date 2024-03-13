import ReactDOM from 'react-dom'

import { useState } from "react"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs, faCss3, faReact, faHtml5, faSass, faGitAlt } from "@fortawesome/free-brands-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faJs, faCss3, faReact, faHtml5, faSass,faGitAlt )

function SectionSkills({restBase}) {

    const restPath = restBase + 'coding?_embed'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                console.log(data)
                console.log(data[3].acf.skill_svg)
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])

    return (
        <>
            {isLoaded ? (
                <section className="mt-32">
                    <h2 className="text-center">Skills</h2>
                    <h3>Programming</h3>
                    <div className='flex flex-wrap gap-x-4 gap-y-1'>                   
                         {restData.map(skill => (
                        <div className="mt-4 bg-accent flex gap-5 items-center bg-accent rounded-xl  hover:bg-primary w-72	" key={skill.id}>
<div className='bg-primary rounded-l-xl	p-2 w-14 flex justify-center items-center'>
<FontAwesomeIcon icon={skill.acf.skill_svg} size="2xl" />
</div>

                            <p className='font-medium'>{skill.name}</p>
                        </div>
                    ))}
                    </div>  

                 
                </section>
                
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

  export default SectionSkills;
  