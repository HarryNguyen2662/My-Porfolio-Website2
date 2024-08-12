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
import styles from './Profile.module.css';

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const themename = React.useContext(React.createContext());
  const [linecolor, setlinecolor] = React.useState(
    themename === 'light' ? '#23283e' : '#fcfcfc'
  );

  React.useEffect(() => {
    if (themename === 'dark') {
      setlinecolor('#fcfcfc');
    } else {
      setlinecolor('#23283e');
    }
  }, [themename]);

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
                date={'May 2024 – Aug 2024 (remote)'}
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
                  • Technologies: TypeScript, React.js, ChakraUI, MariaDB, Appwrite and
                  Vercel.
                </p>
                <p data-aos="fade-right">
                  • Designed and implemented a non-relational database solution with an
                  efficient data model to store user profiles and survey responses,
                  facilitating scalable data management and rapid query performance.
                </p>
                <p data-aos="fade-right">
                  • Implemented full-stack CRUD functionality for 5+ data models by
                  integrating Appwrite’s authentication and database services with the
                  front-end application, reducing API development time by 40%.
                </p>
                <p data-aos="fade-right">
                  • Implemented advanced candidate profile search and filtering
                  functionality on the front-end, enhancing the system’s ability to
                  efficiently find and screen applicants by 22%.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date={'May 2024 – Aug 2024 at Atlanta, Georgia'}
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
                  CoderPush
                </h4>
                <p data-aos="fade-right">
                  • Technologies: TypeScript, React.js, Redux, AWS Amplify, AWS Lambda,
                  DynamoDB, Stripe.js and GraphQL.
                </p>
                <p data-aos="fade-right">
                  • Architected and implemented AWS Cognito synchronization to enable
                  robust authentication for Photo-op startup’s admin portal, reducing
                  average authentication response time to under 200ms.
                </p>
                <p data-aos="fade-right">
                  • Designed and developed an admin and user management system within an
                  admin portal utilizing GraphQL generated from AWS Amplify, enabling
                  comprehensive data retrieval and display on the user interface,
                  resulting in a 30% improvement in data access efficiency.
                </p>
                <p data-aos="fade-right">
                  • Engineered secure payment functionality using Stripe.js for
                  client-side integration, and leveraged Stripe API to retrieve and manage
                  transaction data for comprehensive payment oversight in admin portal,
                  resulting in a 30% increase in transaction processing efficiency.
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
                  Software Engineer Intern
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
