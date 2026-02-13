import React from 'react';
import './experience.module.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import { useAppContext } from 'hooks';
import styles from './Profile.module.css';

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const { theme } = useAppContext();
  const [linecolor, setlinecolor] = React.useState(
    theme === 'light' ? '#23283e' : '#fcfcfc'
  );

  React.useEffect(() => {
    if (theme === 'dark') {
      setlinecolor('#fcfcfc');
    } else {
      setlinecolor('#23283e');
    }
  }, [theme]);

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className="section mainsection">
            <h2 className="section__title" data-aos="fade-right">
              My <span className="different">Experience 👨🏻‍💻</span>
            </h2>
            <VerticalTimeline lineColor={linecolor}>
              <VerticalTimelineElement
                date={'May 2025 – August 2025'}
                contentStyle={{
                  boxShadow: `var(--shadow)`,
                  border: '3px solid var(--clr-primary)',
                  backgroundColor: `var(--clr-bg)`,
                  textAlign: 'center',
                  color: `var(--clr-fg-alt)`,
                }}
                contentArrowStyle={{
                  borderRight: '16px solid  var(--clr-primary)',
                }}
                iconStyle={{
                  border: ` 3px solid var(--clr-primary)`,
                  backgroundColor: `var(--clr-bg)`,
                  color: `var(--clr-primary)`,
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                  Software Engineer Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                  Google
                </h4>
                <p data-aos="fade-right">
                  • Achieved sub-50ms p99 latency engineering IPC transport layer with Protocol Buffers across distributed services
                  handling 10K+ requests/sec, developing deep understanding of zero-copy techniques and memory hierarchy
                  optimization—critical for low-latency inter-service communication in distributed architectures
                </p>
                <p data-aos="fade-right">
                  • Cut settings navigation time by 96% (1200ms to sub-50ms) implementing concurrent trie-based search, gaining
                  hands-on experience with lock-free data structures and thread-safe algorithms—foundational skills for building
                  high-performance distributed systems
                </p>
                <p data-aos="fade-right">
                  • Accelerated feature velocity by 68% architecting event-driven React system with observer pattern, learning to
                  design loosely-coupled components that scale—principles directly applicable to microservices architecture
                </p>
                <p data-aos="fade-right">
                  • Contributed to Chromium codebase (25K+ lines) with 95% test coverage, developing skills in collaborative
                  development at scale and understanding trade-offs in large distributed codebases
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date={'May 2024 – August 2024'}
                contentStyle={{
                  boxShadow: `var(--shadow)`,
                  border: '3px solid var(--clr-primary)',
                  backgroundColor: `var(--clr-bg)`,
                  textAlign: 'center',
                  color: `var(--clr-fg-alt)`,
                }}
                contentArrowStyle={{
                  borderRight: '16px solid  var(--clr-primary)',
                }}
                iconStyle={{
                  border: ` 3px solid var(--clr-primary)`,
                  backgroundColor: `var(--clr-bg)`,
                  color: `var(--clr-primary)`,
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                  Software Engineer Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                  Develop for Good
                </h4>
                <p data-aos="fade-right">
                  • Scaled to 500+ concurrent users architecting stateless BaaS infrastructure with distributed session management
                  using JWT, learning horizontal scaling patterns and state partitioning—building blocks for designing fault-tolerant
                  distributed systems
                </p>
                <p data-aos="fade-right">
                  • Achieved sub-100ms response times for 10,000+ records through database optimization with strategic indexing,
                  gaining experience with query optimization and addressing N+1 query problems—critical for data-intensive
                  distributed applications
                </p>
                <p data-aos="fade-right">
                  • Slashed deployment time by 90% streamlining CI/CD pipeline with automated testing, developing understanding of
                  deployment strategies crucial for continuous delivery in distributed environments
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date={'Jan 2024 – May 2024 (Remote)'}
                contentStyle={{
                  boxShadow: `var(--shadow)`,
                  border: '3px solid var(--clr-primary)',
                  backgroundColor: `var(--clr-bg)`,
                  textAlign: 'center',
                  color: `var(--clr-fg-alt)`,
                }}
                contentArrowStyle={{
                  borderRight: '16px solid  var(--clr-primary)',
                }}
                iconStyle={{
                  border: ` 3px solid var(--clr-primary)`,
                  backgroundColor: `var(--clr-bg)`,
                  color: `var(--clr-primary)`,
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                  Software Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                  H&T AI TECH
                </h4>
                <p data-aos="fade-right">
                  • Technologies: Flutter, Javascript, Node.js, Express.js, PostgreSQL,
                  Supabase.
                </p>
                <p data-aos="fade-right">
                  • Developed a backend system with role-based access control,
                  implementing secure RESTful APIs to manage 5 distinct user roles and
                  perform 1000+ daily CRUD operations.
                </p>
                <p data-aos="fade-right">
                  • Architected an admin dashboard using Flutter to oversee 200+ users,
                  incorporating Supabase for authentication and backend connectivity.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date={'Jan 2024 – May 2024'}
                contentStyle={{
                  boxShadow: `var(--shadow)`,
                  border: '3px solid var(--clr-primary)',
                  backgroundColor: `var(--clr-bg)`,
                  textAlign: 'center',
                  color: `var(--clr-fg-alt)`,
                }}
                contentArrowStyle={{
                  borderRight: '16px solid  var(--clr-primary)',
                }}
                iconStyle={{
                  border: ` 3px solid var(--clr-primary)`,
                  backgroundColor: `var(--clr-bg)`,
                  color: `var(--clr-primary)`,
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                  Software Engineer Fellow
                </h3>
                <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                  Google Developer Student Club
                </h4>
                <p data-aos="fade-right">
                  • Completed a comprehensive full-stack web development training
                  bootcamp, gaining expertise in TypeScript, Next.js, Node.js, DynamoDB,
                  Lambda, and AWS.
                </p>
                <p data-aos="fade-right">
                  • Collaboratively engaged in Agile development processes to gather
                  design requirements, engage in peer programming, and rigorously test the
                  application using Jest and React Testing Library.
                </p>
                <p data-aos="fade-right">
                  • Deployed using AWS CDK to provision infrastructure as code and
                  orchestrated CI/CD pipelines through AWS CodePipeline, resulting in a
                  20% reduction in deployment time and a 15% increase in overall project
                  efficiency.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date={'Sep 2023 – Dec 2023'}
                contentStyle={{
                  boxShadow: `var(--shadow)`,
                  border: '3px solid var(--clr-primary)',
                  backgroundColor: `var(--clr-bg)`,
                  textAlign: 'center',
                  color: `var(--clr-fg-alt)`,
                }}
                contentArrowStyle={{
                  borderRight: '16px solid  var(--clr-primary)',
                }}
                iconStyle={{
                  border: ` 3px solid var(--clr-primary)`,
                  backgroundColor: `var(--clr-bg)`,
                  color: `var(--clr-primary)`,
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                  Software Engineering Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                  CoderPush
                </h4>
                <p data-aos="fade-right">
                  • Improved data access by 30% optimizing DynamoDB partition key design to prevent hot partitions handling
                  9,000+ requests, gaining hands-on experience with distributed database patterns and eventual consistency
                  trade-offs—essential for scalable data layers
                </p>
                <p data-aos="fade-right">
                  • Built RESTful APIs with Redis distributed caching achieving 85% cache hit rate and idempotent payment APIs
                  with exponential backoff retry, developing understanding of cache invalidation and failure handling—critical for
                  distributed systems
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date={'Aug 2023 – Dec 2023 at Atlanta, Georgia'}
                contentStyle={{
                  boxShadow: `var(--shadow)`,
                  border: '3px solid var(--clr-primary)',
                  backgroundColor: `var(--clr-bg)`,
                  textAlign: 'center',
                  color: `var(--clr-fg-alt)`,
                }}
                contentArrowStyle={{
                  borderRight: '16px solid  var(--clr-primary)',
                }}
                iconStyle={{
                  border: ` 3px solid var(--clr-primary)`,
                  backgroundColor: `var(--clr-bg)`,
                  color: `var(--clr-primary)`,
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title" data-aos="fade-right">
                  CATLab Student Technology Support Specialist
                </h3>
                <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
                  Georgia State University
                </h4>
                <p data-aos="fade-right">
                  • Performed technical assistance for hardware and software applications
                  to boost student satisfaction to 95%.
                </p>
                <p data-aos="fade-right">
                  • Facilitated regular operations of computer and media laboratories.
                </p>
                <p data-aos="fade-right">
                  • Configured and troubleshooted a range of devices for use with the
                  campus wireless network.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                icon={<StarRateIcon />}
                iconStyle={{
                  border: ` 3px solid var(--clr-primary)`,
                  backgroundColor: `var(--clr-bg)`,
                  color: `var(--clr-primary)`,
                }}
              ></VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        )}
      </Transition>
    </Section>
  );
};
