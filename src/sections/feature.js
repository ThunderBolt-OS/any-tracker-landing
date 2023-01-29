/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Export Recommendation',
    text:
      'AI based Time Series Forecasting for export and import of goods.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Real Time APIs',
    text:
      'seamless connection with a software system, allowing for the immediate transfer of data between the two.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: '3rd Party Integrations',
    text:
      'Integration with various product listing E-Commerce sites.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Role Based Management',
    text:
      'Controlling access to resources based on user roles and permissions for a secure and organized management of the system',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'Emergency Alert',
    text:
      'Immediately alerting relevant personnel about critical situations.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Micro Service Architecture',
    text:
      'collection of small, independent services, each running its own process and communicating through lightweight APIs for a more flexible and scalable system.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
