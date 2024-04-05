import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
export default function Intro({restBase}) {  
    const restPath = restBase + 'pages/6?_embed'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
  
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                console.log(data, "about")
                setData(data)
            } 
        }
        fetchData()
    }, [restPath])
  

  return (
    <section id="home" className="flex flex-col justify-center items-center gap-3 h-screen	">
      
<h1 className="text-3xl">John. S</h1>


{restData && restData.acf && (
<p className="mt-4"> 
{restData.acf.short_intro}
</p>  
)}

<Link to={`/projects`} className="bg-accent hover:bg-primary font-bold py-2 px-4 rounded-full max-w-80">
{restData && restData.acf && (
restData.acf.view_project_text
)}
</Link>
    


    </section>
  );
}
