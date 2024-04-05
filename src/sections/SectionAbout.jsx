import { useState, useEffect } from "react";
import gsap from "gsap";

function SectionAbout({ restBase }) {
  const restPath = restBase + 'pages/6?_embed';
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        console.log(data, "about");
        setData(data);
        setLoadStatus(true); // Setting load status to true once data is fetched
      }
    };
    fetchData();
  }, [restPath]);

  const handleClick = () => {
    // Animation to bounce the paragraph with easing
    gsap.fromTo(
      ".about-paragraph",
      { y: 0 },
      { y: -20, duration: 0.5, repeat: 1, yoyo: true, ease: "power2.out" }
    );
  };

  return (
    <section id="about" className="mt-32">
      <h2 className="text-center">About</h2>

      {restData && restData.acf && (
        <p className="mt-4 about-paragraph" onClick={handleClick}>
          {restData.acf.background_info}
        </p>
      )}
    </section>
  );
}

export default SectionAbout;
