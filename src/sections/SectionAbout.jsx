import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "../util/toolbox";
import { useRef } from "react";


function SectionAbout() {

  const description = useRef(null);
  const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge."
  const isInView = useInView(description)
  return (
    <section id="about" className="mt-32">
<h2 className="text-center">About</h2>
<div ref={description}>
<div>
  <p className="flex relative flex-wrap gap-x-1 items-center m-0 text-xl ">
    {phrase.split(" ").map((word, index) => (
      <span className="relative">
        <motion.span
        className="relative"
          variants={slideUp}
          initial="initial"
          custom={index}
          animate={isInView ? "open" : "closed"}
          key={index}
        >
          {word}
        </motion.span>
      </span>
    ))}
  </p>

  <div data-scroll data-scroll-speed={0.1}>

  </div>

</div>

</div>
      

    </section>

  );
}

export default SectionAbout;
