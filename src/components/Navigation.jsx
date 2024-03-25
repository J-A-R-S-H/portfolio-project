import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faProjectDiagram, faListCheck,faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faHouse, faProjectDiagram, faListCheck,faCircleQuestion)
import { useMediaQuery } from "react-responsive";

import { useEffect, useState } from "react";


export default function Navigation() {
  const Mobile = useMediaQuery({ maxWidth: 767 });

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      {Mobile ? (
        <footer className="fixed bottom-0 left-0 right-0 z-100 bg-accent z-10">
          <nav className="flex justify-evenly">
            <div className="home-nav flex flex-col items-center flex-grow pt-2 pb-1 hover:bg-primary transition-colors duration-300">
              <FontAwesomeIcon icon={faHouse} size="lg" />
              <p>Home</p>
            </div>
            <div className="home-nav flex flex-col items-center flex-grow pt-2 pb-1 hover:bg-primary transition-colors duration-300">
              <FontAwesomeIcon icon={faProjectDiagram} size="lg" />
              <p>Projects</p>
            </div>
            <div className="home-nav flex flex-col items-center flex-grow pt-2 pb-1 hover:bg-primary transition-colors duration-300">
              <FontAwesomeIcon icon={faCircleQuestion} size="lg" />
              <p>About</p>
            </div>
            <div className="home-nav flex flex-col items-center flex-grow pt-2 pb-1 hover:bg-primary transition-colors duration-300">
              <FontAwesomeIcon icon={faListCheck} size="lg" />
              <p>Skills</p>
            </div>
          </nav>
        </footer>
      ) : (
        <header className={`header flex justify-between fixed top-0 left-0 right-0 z-10 p-5 text-xl  transition-transform duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div>Logo</div>
      <ul className="flex gap-8">
        <li>Projects</li>
        <li>About</li>
        <li>Skills</li>
      </ul>
    </header>
      )}
    </>
  );
}