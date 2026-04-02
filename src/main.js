import { inject } from "@vercel/analytics";
import CustomHeader from "../components/header/header.js";
import CustomTitle from "../components/body/title/title.js";
import CustomBody from "../components/body/customBody/bodyComponent.js";
import Project from "../components/body/projectsSection/project.js";
import CustomFooter from "../components/footer/footer.js";
import ProjectProjects from "../components/projects/project/project.js";
import Projects from "../components/projects/projectsElement/projects.js";
import WorkExperienceElement from "../components/workExperience/workExperience.js";
import "../css/global.css";

inject({ disableAutoTrack: true });

const root = document.documentElement;

const setShinePosition = (xPercent = 50, yPercent = 42) => {
  root.style.setProperty("--shine-x", `${xPercent}%`);
  root.style.setProperty("--shine-y", `${yPercent}%`);
};

setShinePosition();

const handlePointerMove = (() => {
  let frame;
  let latestX = 50;
  let latestY = 42;

  return (event) => {
    const point = event.touches?.[0] || event;

    if (!point) return;

    const normalizedX = point.clientX / window.innerWidth - 0.5;
    const normalizedY = point.clientY / window.innerHeight - 0.5;

    latestX = 50 + Math.max(-3, Math.min(3, normalizedX * 6));
    latestY = 42 + Math.max(-2.5, Math.min(2.5, normalizedY * 5));

    if (frame) return;

    frame = requestAnimationFrame(() => {
      setShinePosition(latestX, latestY);
      frame = null;
    });
  };
})();

window.addEventListener("pointermove", handlePointerMove);
window.addEventListener("touchmove", handlePointerMove, { passive: true });
