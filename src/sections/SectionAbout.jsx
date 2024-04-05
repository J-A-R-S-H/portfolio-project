import { useState, useEffect } from "react"
function SectionAbout({restBase}) {

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
    <section id="about" className="mt-32">
<h2 className="text-center">About</h2>

{restData && restData.acf && (
<p className="mt-4"> 
{restData.acf.background_info}
</p>  
)}

    </section>

  );
}

export default SectionAbout;
