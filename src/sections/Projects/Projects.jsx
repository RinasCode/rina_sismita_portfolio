import styles from "./ProjectsStyle.module.css";
import skoolar from "../../assets/skoolar.jpg";
import samsung from "../../assets/samsung.jpg";
import facebook from "../../assets/facebook.jpg";
import traveltalk from "../../assets/traveltalk.jpg";
import ProjectCard from "../../common/ProjectCard";
import Linetoday from "../../assets/linetoday.jpg";
import LinetodayPublic from "../../assets/linetodaypublic.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={skoolar}
          link="https://skoolar.vercel.app/"
          h3="Skoolar"
          p="Our Communication App is designed to enhance collaboration and communication between educators and parents, fostering a more connected and supportive educational environment."
        />
        <ProjectCard
          src={facebook}
          link="https://expo.dev/preview/update?message=update%20port%20ke%2080&updateRuntimeVersion=1.0.0&createdAt=2024-08-25T08%3A16%3A26.561Z&slug=exp&projectId=61c678fd-acf8-453c-9b22-6c78ca328934&group=d6496b53-a310-4022-ab1b-c5c5d47e133a"
          h3="Facebook"
          p="A client-server social media app with social media functionality"
        />
        <ProjectCard
          src={samsung}
          link="https://samsung-lime.vercel.app/"
          h3="Samsung"
          p="A web-based eCommerce application showcasing Samsung products"
        />
        <ProjectCard
          src={traveltalk}
          link="https://traveltalkbyrina.netlify.app"
          h3="Travel Talk"
          p="A hotel recommendation application using Gemini AI"
        />
        <ProjectCard
          src={Linetoday}
          link="https://line-today-clone-cms.vercel.app"
          h3="Line Today CMS"
          p="A news portal CMS with CRUD capabilities for both admin and staff. Only admins have the privilege to add users. The system is designed to manage news articles and content efficiently, providing full control over the platform's content."
        />
        <ProjectCard
          src={LinetodayPublic}
          link="https://line-today-clone-ten.vercel.app"
          h3="Line Today Public"
          p="A public news portal where users can freely view all news articles without the need for login. The platform offers seamless access to a wide range of news content, ensuring information is available to everyone."
        />
      </div>
    </section>
  );
}

export default Projects;
