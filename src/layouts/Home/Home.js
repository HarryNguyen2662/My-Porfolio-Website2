import gamestackTexture2Large from 'assets/gamestack-list-large.png';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.png';

import gamestackTextureLarge from 'assets/gamestack-login-large.png';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.png';



import sliceTextureLarge from 'assets/slice-app-large.png';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.png';
import sliceTexture from 'assets/slice-app.png';
import timotoTextureLarge from 'assets/timoto-hero-large.png';
import timotoTexturePlaceholder from 'assets/timoto-hero-placeholder.jpg';
import timotoTexture from 'assets/timoto-hero.png';
import pulumiTextureLarge from 'assets/pulumi-platform-large.png';
import pulumiTexturePlaceholder from 'assets/pulumi-platform-placeholder.jpg';
import pulumiTexture from 'assets/pulumi-platform.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import { Experience } from 'layouts/Home/experience';
import { Education } from 'layouts/Home/education';
import styles from './Home.module.css';

const disciplines = ['Full-time Student', 'Developer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();
  const experience = useRef();
  const education = useRef();
  //const skillmot = useRef();
  //const lalala = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details, experience, education];

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
        title="TiMoto AI - AI Evaluation Platform"
        description="Architected fault-tolerant batch evaluation pipeline with dynamic batching achieving 100% success rate across 50 motorcycles and sub-50ms p99 inference latency using gRPC inter-service communication and circuit breaker patterns. Deployed Django backend to AWS ECS Fargate with multi-AZ configuration achieving 99.9% uptime while reducing costs 44% to $40–60/month through infrastructure optimization."
        buttonText="View project"
        buttonLink="https://timoto.ai/"
        model={{
          type: 'laptop',
          alt: 'TiMoto AI Evaluation Platform',
          textures: [
            {
              srcSet: [timotoTexture, timotoTextureLarge],
              placeholder: timotoTexturePlaceholder,
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
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Pulumi - Open Source Contributor"
        description="Contributed to Pulumi (24.3k+ stars), a leading Infrastructure-as-Code platform enabling multi-cloud infrastructure management across AWS, Azure, and GCP. Implemented Go CLI features supporting multi-cloud deployments, studying distributed consensus patterns (Raft/Paxos) in state synchronization—building foundation for fault-tolerant systems."
        buttonText="View project"
        buttonLink="https://www.pulumi.com/"
        model={{
          type: 'laptop',
          alt: 'Pulumi Infrastructure as Code',
          textures: [
            {
              srcSet: [pulumiTexture, pulumiTextureLarge],
              placeholder: pulumiTexturePlaceholder,
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
