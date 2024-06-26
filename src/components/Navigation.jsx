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
      <svg className="w-9 h-9" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.09 720.17">
  <path d="M125.5,718.17c-22.51,0-43.43-2.99-62.75-8.95-19.35-5.96-34.63-15.1-45.87-27.42-11.26-12.29-16.88-27.94-16.88-46.93,0-16.16,4.03-28.81,12.13-37.96,8.07-9.13,19.51-13.7,34.27-13.7,12.66,0,22.83,3.35,30.58,10.01,7.72,6.69,14.25,14.76,19.51,24.26,5.28,9.5,10.36,19.17,15.29,28.99,4.91,9.86,10.37,18.12,16.35,24.79,5.96,6.69,13.87,10.01,23.73,10.01,20.38,0,33.74-8.44,40.06-25.3,6.34-16.88,9.5-43.58,9.5-80.14V151.86c0-27.42-1.57-49.05-4.75-64.87-3.16-15.82-11.96-26.89-26.36-33.21-14.42-6.32-38.49-9.5-72.25-9.5V12.64h297.4v31.64c-28.84,0-50.28,3.18-64.34,9.5s-23.03,17.39-26.89,33.21c-3.86,15.82-5.79,37.45-5.79,64.87v393.37c0,34.44-4.22,62.92-12.66,85.42-8.44,22.5-20.4,40.25-35.85,53.24-15.48,13.02-33.76,21.97-54.84,26.89-21.1,4.92-44.3,7.38-69.6,7.38Z" fill="#4875e6" stroke-width="0"/>
  <path d="M823.7,448.2c-11.61-22.49-27.09-42.18-46.4-59.05-19.35-16.88-40.79-31.98-64.34-45.34-23.57-13.36-46.93-26.72-70.13-40.08-26.02-15.46-50.99-30.58-74.88-45.34-23.9-14.78-43.23-31.47-57.99-50.11-14.78-18.61-22.16-40.95-22.16-66.96,0-33.04,9.84-57.83,29.54-74.35,19.67-16.51,47.45-24.79,83.31-24.79,53.41-.7,92.43,13.02,117.06,41.12,24.6,28.14,44.28,71.38,59.05,129.72h31.64l-7.38-210.91h-27.41c-2.83,11.24-6.87,19.15-12.13,23.72-5.28,4.58-12.13,6.87-20.57,6.87s-17.77-2.8-27.95-8.44c-10.2-5.62-24.09-11.07-41.65-16.35-17.59-5.28-42.55-7.91-74.88-7.91-36.57,0-69.96,6.69-100.18,20.04-30.24,13.36-54.5,32.53-72.76,57.47-18.29,24.96-27.43,56.07-27.43,93.33s8.27,67.49,24.8,92.8c16.51,25.32,37.78,47.12,63.79,65.38,26,18.29,53.07,35.52,81.2,51.68,28.82,16.18,56.59,32.15,83.32,47.97,26.71,15.82,48.66,33.93,65.91,54.33,17.21,20.4,25.83,46.04,25.83,76.98,0,26.72-5.28,48.35-15.82,64.85-10.56,16.54-25.32,28.46-44.3,35.85-18.98,7.38-41.84,11.07-68.54,11.07-35.86,0-66.27-4.73-91.22-14.22-8.16-3.1-15.73-7.39-23.03-12.23v54.09c11.04,3.62,24.23,7.24,39.89,10.86,22.84,5.26,52.55,7.9,89.11,7.9,40.77,0,77.34-7.21,109.68-21.6,32.33-14.42,57.82-35.69,76.45-63.81,18.62-28.11,27.95-62.58,27.95-103.34,0-31.64-5.81-58.7-17.39-81.22Z" fill="#4875e6" stroke-width="0"/>
  <circle cx="446.74" cy="639.61" r="80.56" fill="#4875e6" stroke-width="0"/>
</svg>
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