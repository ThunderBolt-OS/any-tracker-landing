/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'Free',
    // description: 'For Small teams or office',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Inventory Management System',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Report Generation.',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Space Management System',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Smart Recommendation and Forecasting',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'APIs for third party integration',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'GIS Barcodes',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Basic',
    // description: 'For startup enterprise',
    // priceWithUnit: '$29.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Inventory Management System',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Report Generation.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Space Management System',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Smart Recommendation and Forecasting',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'APIs for third party integration',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'GIS Barcodes',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Highly Recommended',
    name: 'Premium',
    // description: 'For startup enterprise',
    // priceWithUnit: '$29.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Inventory Management System',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Report Generation.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Space Management System',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Smart Recommendation and Forecasting',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'APIs for third party integration',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'GIS Barcodes',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Let’s see how it works"
          slogan="Whats the function"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
