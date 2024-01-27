import gamestackTexture2Large from 'assets/gamestack-list-large.png';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.png';

import gamestackTextureLarge from 'assets/gamestack-login-large.png';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.png';



import sliceTextureLarge from 'assets/slice-app-large.png';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.png';
import sliceTexture from 'assets/slice-app.png';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large2.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark2.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import { Experience } from 'layouts/Home/experience';
import { Education } from 'layouts/Home/education';
import { Skillmot } from 'layouts/Home/skill';
import { Helloanhem } from 'layouts/Home/lululu';
import styles from './Home.module.css';

const disciplines = ['Full-time Student', 'Developer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const experience = useRef();
  const education = useRef();
  //const skillmot = useRef();
  //const lalala = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details, experience, education];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Software Engineer"
        description="Design portfolio of Harry Nguyen — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Designing and Building Instantaneous Trading Platform"
        description="I developed an engaging and efficient instantaneous trading platform utilizing Python, JavaScript, Django, React, Redux, PostgreSQL, MaterialUI, and D3.js, significantly improving the user experience, data analytics, and backend performance."
        buttonText="View project"
        buttonLink="https://github.com/HarryNguyen2662/Trading_platform_simulator"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Real Time Messenger"
        description="Designed and built a fast, responsive real-time mobile chat application using React Native and JavaScript that leveraged Firebase for efficient data management, integrated intelligent ChatGPT bots to enable seamless conversational interactions, and implemented key chat features like real-time messaging, notifications, and chatbots to create an engaging user experience with quick response times."
        buttonText="View project"
        buttonLink="https://github.com/HarryNguyen2662/Real-Time-Messenger"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="DropMarkdown App"
        description="Developed a MERN Stack cross-platform Markdown-based note taking and knowledge management app designed specifically for writers, developers, researchers and academics who want an efficient way to write and organize notes. The core focus is on speed, usability and flexibility through Markdown and extensibility."
        buttonText="View project"
        buttonLink="https://github.com/HarryNguyen2662/MERN_Stack_DropMarkdown"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Experience
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />
      <Education
        sectionRef={education}
        visible={visibleSections.includes(education.current)}
        id="education"
      />
      <Footer />
    </div>
  );
};
