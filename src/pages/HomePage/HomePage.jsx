import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import "./HomePage.scss";
import pic from "../../assets/images/pic.jpg";
import hearMe from "../../assets/images/hearMe.png";
import vivaTrain from "../../assets/images/vivaTrain.png";
import brainFlix from "../../assets/images/brainFlix.png";
import emotionalAwareness1 from "../../assets/images/emotionalAwarness.png";
import emotionalAwareness2 from "../../assets/images/emotionalAwareness2.png";
import split from "../../assets/images/split.png";
import shopverse from "../../assets/images/shopverse.png";

const techStackItems = [
  "JavaScript",
  "C/C++",
  "Java",
  "HTML5",
  "Python",
  "CSS3/Sass",
  "React.js",
  "React Native",
  "Node.js",
  "Express.js",
  "RESTful APIs",
  "MongoDB",
  "MySQL",
  "TensorFlow",
  "OpenAI API",
  "Agile workflow",
];

function HomePage() {
  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleFadeIn = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleFadeIn, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (techStackRef.current) observer.observe(techStackRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <div className="textContainer">
          <p className="textContainer__name">Darine Abdelmotalib</p>
          <p className="textContainer__job">Software Developer </p>
        </div>

        <div className="splineContainer">
         <Spline scene="https://prod.spline.design/DjtuaJm1pOO0vxPC/scene.splinecode" />
        </div>

        <a className="textContainer__link" href="https://www.linkedin.com/in/darine-abdelmotalib/" target="_blank">LinkedIn</a>
      </div>

      <div className="about" ref={aboutRef}>
        <div className="about__textContainer">
          <p className="about__title">About me</p>
          <p className="about__info">
            I am a third-year Bachelor of Applied Science student at Simon
            Fraser University, pursuing a major in Computer Science with a
            specialization in Artificial Intelligence!
            <br />
            <br />
            Driven by a deep fascination with AI, I am passionate about building
            technology that empowers and includes everyone, regardless of their
            abilities or background. Technology plays a crucial role in shaping
            how people interact with the world, and I believe that creating
            accessible, user-centered solutions can help bridge societal gaps,
            foster independence, and ensure no one is left behind. My goal is to
            design AI-driven tools that not only simplify complex tasks but also
            remove barriers to participation, making everyday interactions more
            inclusive and seamless. In developing full-stack applications, I
            have gained valuable experiences in translating diverse user needs
            into intuitive, effective designs that balance innovation with
            simplicity. I look forwards to leveraging my understandings in projects
            where thoughtful design and advanced technology come together to
            create a meaningful impact.
          </p>
        </div>

        <div className="about__imageContainer">
          <img
            src={pic}
            className="about__imageContainer__image"
            alt="profile"
          />
        </div>
      </div>

      <div className="techStack" ref={techStackRef}>
        <p className="techStack__title">Tech Stack</p>
        <div className="techStack__container">
          {techStackItems.map((item, index) => (
            <button className="techStack__item" key={index}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="projects" ref={projectsRef}>
        <p className="projects__title">Projects</p>

        <div className="projectsBigContainer">

          <a className="projectsContainer projectsContainer__link" href="https://github.com/darineabdelmotalib/HearMe-frontend" target="_blank">
            <div className="projectsContainer__text">
              <p className="projectsContainer__title">HearMe</p>
              <p className="projectsContainer__description">
                full stack web application (2024)
              </p>
              <p className="projectsContainer__summary">
                HearMe is built with TensorFlow (Handpose model) for real-time
                ASL-to-text translation and OpenAI’s API for multi-language
                speech-to-text conversion. The backend, powered by Node.js,
                Express.js, and MySQL, efficiently manages user profiles and
                interactions. The frontend, built with React.js and Sass,
                ensures a clean, responsive interface across all devices.{" "}
                <br></br> <br></br>This project, developed as my BrainStation
                bootcamp capstone, showcases my understanding of full-stack
                development, computer vision, and API integration.
              </p>
            </div>
            <div className="projectsContainer__image">
              <div className="projectsContainer__image__container">
                <img src={hearMe} className="projectsContainer__pic"></img>
              </div>
            </div>
          </a>

          <div className="projectsContainer projectsContainer__link" href="#">
            <div className="projectsContainer__text brainflix-text">
              <p className="projectsContainer__title">BrainFlix</p>
              <p className="projectsContainer__description projectsContainer__description-brainflix">
                web application (2024) (repo is private due to bootcamp project requirements)
              </p>
              <p className="projectsContainer__summary projectsContainer__summary">
                BrainFlix is a mock YouTube web app built with React.js,
                Node.js, and Sass, created during my time at a coding bootcamp. 
                It handles video data and user interactions
                using JSON and supports a fully responsive design across
                devices. The app allows users to view video details, leave
                comments, and get personalized video recommendations. <br></br>{" "}
                <br></br>This project showcases my ability to implement
                responsive, user-friendly interfaces with Sass, manage RESTful
                API calls for seamless client-server communication, and handle
                structured data efficiently. It also reflects my focus on
                implementing clean, intuitive layouts that enhance the overall
                user experience.
              </p>
            </div>
            <div className="projectsContainer__image brainflix">
              <div className="projectsContainer__image__container brainflix">
                <img src={brainFlix} className="projectsContainer__pic"></img>
              </div>
            </div>
          </div>

          <a className="projectsContainer projectsContainer__link" href="https://github.com/darineabdelmotalib/VivaTrain-frontend"  target="_blank">
            <div className="projectsContainer__text">
              <p className="projectsContainer__title">
                VivaTrain
              </p>
              <p className="projectsContainer__description">
                full stack web application (2024)
              </p>
              <p className="projectsContainer__summary">
                VivaTrain was built during a 24-hour hackathon in collaboration
                with Microsoft at BrainStation. Our cross-disciplinary team of
                six aimed to support small and medium-sized enterprises (SMEs)
                with personalized employee onboarding. <br></br> <br></br>As the
                software development lead, I guided a team of three developers
                in building a web application using React.js, Node.js, and MySQL
                to store user information. The app tailors training manuals to
                individual learning styles using OpenAI’s API to gather user
                preferences and dynamically customize content, including
                AI-generated videos that greet users by name. <br></br>{" "}
                <br></br>While a proof of concept, VivaTrain demonstrates my
                leadership, collaboration, and ability to deliver innovative,
                AI-driven solutions under tight deadlines.
              </p>
            </div>
            <div className="projectsContainer__image">
              <div className="projectsContainer__image__container">
                <img src={vivaTrain} className="projectsContainer__pic"></img>
              </div>
            </div>
          </a>

          <a className="projectsContainer projectsContainer__link" href="https://github.com/darineabdelmotalib/ShopVerse" target="_blank">
            <div className="projectsContainer__text">
              <p className="projectsContainer__title">
                ShopVerse
              </p>
              <p className="projectsContainer__description">
                full stack web application (2024)
              </p>
              <p className="projectsContainer__summary">
                ShopVerse is a mock e-commerce platform simulating an online
                food shop like SkipTheDishes. Built with React.js for the
                frontend and Node.js/Express for the backend, it incorporates
                MongoDB, a NoSQL database designed for flexibility with
                unstructured data. Unlike MySQL’s structured tables, MongoDB
                uses JSON-like documents, making it ideal for dynamic data
                handling. <br></br> <br></br>This project enhanced my full-stack
                development skills, including integrating NoSQL databases,
                optimizing API routes, and managing client-server interactions.
                I also strengthened my ability to design scalable, efficient web
                applications focused on performance and user experience.
              </p>
            </div>
            <div className="projectsContainer__image">
              <div className="projectsContainer__image__container">
                <img src={shopverse} className="projectsContainer__pic"></img>
              </div>
            </div>
          </a>

          <a className="projectsContainer projectsContainer__link" href="https://github.com/darineabdelmotalib/splitIt-frontend/tree/main/Desktop/splitit_final/splitit_final" target="_blank">
            <div className="projectsContainer__text">
              <p className="projectsContainer__title">
                Split It!
              </p>
              <p className="projectsContainer__description">
                mobile application (2024)
              </p>
              <p className="projectsContainer__summary">
                Built during a 24-hour hackathon by a team of three, SplitIt is
                a cross-platform mobile app designed to make splitting expenses
                simple and hassle-free. Our goal was to create a clean and
                intuitive interface that anyone could use with ease. This was my
                first experience using React Native, making the project both
                challenging and exciting.<br></br> <br></br>We used React Native
                and Expo to build the app, with React Navigation for smooth page
                transitions and Sass for styling a responsive layout. The app
                lets users take a photo of their bill using Expo’s Camera API,
                temporarily stores the image, and translates it into text. The
                bill is then split using simple JavaScript logic, either evenly
                or based on custom amounts entered by the user. <br></br>{" "}
                <br></br>This project reflects my ability to quickly pick up new
                technologies and contribute to building a practical,
                user-friendly solution under tight deadlines.
              </p>
            </div>
            <div className="projectsContainer__image">
              <div className="projectsContainer__image__container">
                <img src={split} className="projectsContainer__pic "></img>
              </div>
            </div>
          </a>

          <div className="projectsContainer projectsContainer__link">
            <div className="projectsContainer__text brainflix-text">
              <p className="projectsContainer__title">
                Emotional Awareness
              </p>
              <p className="projectsContainer__description">
                java application (2023) (repo unavailable as this project was not version-controlled)
              </p>
              <p className="projectsContainer__summary">
                Emotional Awareness is a Java application developed during a
                24-hour hackathon that helps users identify and express their
                emotions. Users select an emotion that matches their mood,
                navigate through more specific descriptors, and receive positive
                affirmations to promote self-compassion. <br></br> <br></br>{" "}
                This application reinforced my ability to apply object-oriented
                programming (OOP) principles, such as encapsulation,
                modularization, and event-driven programming, while utilizing
                Java Swing to create an intuitive user interface. It also
                enhanced my proficiency in Git for version control and
                collaborative development within a team environment.
              </p>
            </div>
            <div className="projectsContainer__image brainflix">
              <div className="projectsContainer__image__container emotionalAwareness">
                <img
                  src={emotionalAwareness2}
                  className="projectsContainer__pic"
                ></img>
                <img
                  src={emotionalAwareness1}
                  className="projectsContainer__pic"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerContainer">
        <p className="footerContainer__title">Thanks for stopping by!</p>
        <p className="footerContainer__copyright">
          © {new Date().getFullYear()} Darine Abdelmotalib. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
