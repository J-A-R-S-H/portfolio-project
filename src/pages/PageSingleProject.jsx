import { useParams } from "react-router-dom";

function PageSingleProject({restBase}) {

  const {slug} = useParams()
  const restPath = restBase + `posts?slug=${slug}&_embed`
  
  return (
      <div>
         <p>Projects</p>
    </div>


  );
}

export default PageSingleProject;
