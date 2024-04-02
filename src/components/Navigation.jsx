import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faProjectDiagram, faListCheck,faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faHouse, faProjectDiagram, faListCheck,faCircleQuestion)
import { useMediaQuery } from "react-responsive";

import { useEffect, useState } from "react";
import OutlyIcons from "./OutlyIcons";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

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
            <HashLink
          smooth
  to="/#home"
  className="flex flex-col "
>
              <FontAwesomeIcon icon={faHouse} size="lg" />
              <p>Home</p>
              </HashLink>
            </div>

            <div className="home-nav flex flex-col items-center flex-grow pt-2 pb-1 hover:bg-primary transition-colors duration-300">
            <HashLink
          smooth
  to="/#projects"
  className="flex flex-col "
>
              <FontAwesomeIcon icon={faProjectDiagram} size="lg" />
              <p>Projects</p>
              </HashLink>
            </div>
            <div className="home-nav flex flex-col items-center flex-grow pt-2 pb-1 hover:bg-primary transition-colors duration-300">
            <HashLink
          smooth
  to="/#about"
  className="flex flex-col "
>
              <FontAwesomeIcon icon={faCircleQuestion} size="lg" />
              <p>About</p>
              </HashLink>
            </div>
            <div className="home-nav flex flex-col items-center flex-grow pt-2 pb-1 hover:bg-primary transition-colors duration-300">
            <HashLink
          smooth
  to="/#skills"
  className="flex flex-col "
>
             <FontAwesomeIcon icon={faListCheck} size="lg" />
              <p>Skills</p>
              </HashLink>
            </div>
          </nav>
        </footer>
      ) : (
        <header className={`flex justify-between fixed top-0 left-0 right-0 z-10 p-1 text-lg text-slate-300 font-semibold lg:p-4 transition-transform duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div>Logo</div>
      <ul className="flex flex-col gap-1">
        
      <OutlyIcons>
      <HashLink
          smooth
  to="/#home"
>
        <li>Home</li>
        </HashLink>
        </OutlyIcons>

      <OutlyIcons>
      <HashLink
          smooth
  to="/#projects"
>
        <li>Projects</li>
        </HashLink>


        </OutlyIcons>

        <OutlyIcons>
        <HashLink
          smooth
  to="/#about"
>
        <li>About</li>
        </HashLink>

        </OutlyIcons>

        <OutlyIcons>
        <HashLink
          smooth
  to="/#skills"
>
        <li>Skills</li>
        </HashLink>
        </OutlyIcons>

      </ul>
    </header>
      )}
    </>
  );
}