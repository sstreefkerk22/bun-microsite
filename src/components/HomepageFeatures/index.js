import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Checklists so you Never Forget a Thing',
    Svg: require('@site/static/img/bunny_feeding.svg').default,
    description: (
      <>
        Rabbits as Pets NOT Prisoners was designed to ensure even first time bunny parents
        rise to the occasion.
      </>
    ),
  },
  {
    title: 'Feeding for Dummies',
    Svg: require('@site/static/img/bunny_feeding.svg').default,
    description: (
      <>
        Our simple feeding guide and links to our trusted suppliers will ensure you never question
        what you're feeding your bunny again.
      </>
    ),
  },
  {
    title: 'Veterinarians as Allies Not Last Resort',
    Svg: require('@site/static/img/bunny_feeding.svg').default,
    description: (
      <>
       Not sure who you can trust your furbaby to? We've got you covered
        .
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
