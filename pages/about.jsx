// pages/about.jsx

import styles from "../styles/About.module.css";
import ThreeScene from "../components/ThreeScene";
const AboutPage = () => {

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <h3 className={styles.heading}>A Little Bit About Me</h3>
        <p className={styles.paragraph}>
          Hi, I'm Jarin Khae-im, a Senior Software Engineer with 5 years of experience in backend development. I specialize in building scalable microservices, designing efficient database systems, and leading development teams to deliver robust, high-performance solutions.
        </p>
        <p className={styles.paragraph}>
          My expertise includes languages like Go, Python, and JavaScript, and frameworks such as Gin, Fiber, Django, Flask, and NestJS. I am also skilled in cloud platforms like Google Cloud Platform (GCP) and Amazon Web Services (AWS), utilizing tools like Docker, Kubernetes, and Nginx to optimize deployments.
        </p>
        <p className={styles.paragraph}>
          Over the years, I’ve contributed to innovative projects like the WIRTUAL App, an "Exercise to Earn" application, where I designed scalable backend systems to support high-volume transactions. Additionally, I’ve developed AI-powered healthcare solutions, including timber detection and AI-CXR screening for analyzing medical data.
        </p>
        <p className={styles.paragraph}>
          With a Bachelor's Degree in Information Technology from King Mongkut's University of Technology North Bangkok, I’m passionate about using technology to solve real-world problems while fostering a collaborative and innovative development culture.
        </p>
      </div>

      {/* <div className={styles.right}>
        <ThreeScene />
      </div> */}

    </div>
  );
};

// Component to Load the 3D Model

export default AboutPage;
