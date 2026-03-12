import type { MouseEvent } from 'react';
import { useState } from 'react';
import styles from './StaticCasesPage.module.css';

interface StaticCasesPageProps {
  onNavigate: (href: string) => void;
}

const caseStudyLinks = [
  {
    label: 'Barnard College (NY)',
    href: 'https://drive.google.com/file/d/1eq-NKvHSiF0MLwADtQay20guKMWDcexA/view',
  },
  {
    label: 'Eastern Emerald (Queens)',
    href: 'https://drive.google.com/file/d/1JVdo8NymRNJV5Y4E5EWO5ViT7gonu9Zi/view',
  },
  {
    label: 'GE Research Campus',
    href: 'https://drive.google.com/file/d/1n-TIt-W4VQVlCsgHfHkzq2pEzM-j7TIa/view',
  },
  {
    label: 'Gowanus Green (Brooklyn)',
    href: 'https://drive.google.com/file/d/10_udiUfi1mJ5kKdEJM6iu9LkOi3Y2Zla/view',
  },
  {
    label: 'Houghton College',
    href: 'https://drive.google.com/file/d/1oZ6zMDZRUzx5eudk32aLHiBerpGAvdaK/view',
  },
  {
    label: 'Innovation QNS',
    href: 'https://drive.google.com/file/d/1aGgwmzwdmOE63Q4mbpKaoHqD3QELxVpw/view',
  },
  {
    label: 'Ithaca Southside',
    href: 'https://drive.google.com/file/d/11QbDYpWq4LYuVtkUPAiLWGhfFC-oe_Eq/view',
  },
  {
    label: 'Masonic Community',
    href: 'https://drive.google.com/file/d/1m5PJjzeOPwjbNSmYr51KJRrLevABuGlT/view',
  },
] as const;

const caseSections = [
  {
    phase: '4.1 Community Cases',
    title: 'Where have district energy projects worked?',
    preview:
      'Take a look at the following case studies from diverse communities. They include projects focused on commercial buildings to college campuses that include labs and classrooms.',
    more:
      'Consider: are there features of these projects that make sense for my city or town?',
    cardLabel: 'Collection',
    cardTitle: 'VCTN Case Studies',
    cardLinkLabel: 'Read Report',
    href: 'https://drive.google.com/file/d/1GpQfC7EQXascLwjGq2r5nyPHyC9sI-bE/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1GpQfC7EQXascLwjGq2r5nyPHyC9sI-bE&sz=w800',
    layout: 'standard',
  },
  {
    phase: '4.2 The Database',
    title: 'What are these communities like?',
    preview:
      'The MIT Renewable Energy Clinic is developing a database of different district energy projects, with a focus on geothermal projects at the community scale.',
    more:
      'It also includes a few geothermal projects for individual buildings, which can be persuasive to building owners.',
    cardLabel: 'Database',
    cardTitle: 'Geothermal Neighborhoods',
    cardLinkLabel: 'Coming Soon',
    href: '#',
    thumbnail: '',
    layout: 'flip',
    disabled: true,
  },
  {
    phase: '4.3 State Policy',
    title: 'Advocating for hospitable regulations.',
    preview:
      'What state regulations affect local energy decisions? What do state policymakers need to understand about community energy?',
    more:
      'After persuading your town or city leaders, you may then have to ally with them—and with advocates in other cities and towns—to understand state-level rules. You may also need to work together to ensure that the state remains hospitable to the development of community energy systems, which requires interacting with state-level officials to explain the needs and aspirations of communities.',
    cardLabel: 'Policy Brief',
    cardTitle: 'Policy Recommendations',
    cardLinkLabel: 'Read Report',
    href: 'https://drive.google.com/file/d/1EXElZ0g9tJaF6b7rMcLEqb_01w3pIGAp/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1EXElZ0g9tJaF6b7rMcLEqb_01w3pIGAp&sz=w800',
    layout: 'standard',
  },
] as const;

export function StaticCasesPage({ onNavigate }: StaticCasesPageProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleNavigate =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onNavigate(href);
    };

  return (
    <div className={styles.page}>
      <main>
        <div className={styles.introWrapper}>
          <div className={`${styles.pageContainer} ${styles.introContainer}`}>
            <h1 className={styles.introTitle}>Learning from Others</h1>
            <p className={styles.introCopy}>
              One of the most powerful ways to persuade your municipal leaders to take action is to
              show examples of other cities where it has worked. In this ReadMe, you will learn
              about other successful cases of geothermal energy projects at the community scale.
              After persuading your town or city leaders, you may then have to ally with them and
              with advocates in other cities and towns to understand state-level rules.
            </p>
          </div>
        </div>

        {caseSections.map((section, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div className={styles.rowWrapper} key={section.phase}>
              <div className={styles.pageContainer}>
                <section
                  className={`${styles.row} ${
                    section.layout === 'flip' ? styles.flipLayout : styles.standardLayout
                  }`}
                >
                  <div className={styles.rowImageFrame}>
                    {section.disabled ? (
                      <div className={`${styles.processCard} ${styles.disabledCard}`}>
                        <div className={`${styles.processCardThumb} ${styles.placeholderThumb}`}>
                          <span className={styles.placeholderIcon}>🗄️</span>
                        </div>
                        <div className={styles.processCardInfo}>
                          <span className={styles.processCardLabel}>{section.cardLabel}</span>
                          <h3 className={styles.processCardName}>{section.cardTitle}</h3>
                          <span className={styles.processCardLink}>{section.cardLinkLabel}</span>
                        </div>
                      </div>
                    ) : (
                      <a href={section.href} target="_blank" rel="noreferrer" className={styles.processCard}>
                        <div
                          className={styles.processCardThumb}
                          style={{ backgroundImage: `url('${section.thumbnail}')` }}
                        />
                        <div className={styles.processCardInfo}>
                          <span className={styles.processCardLabel}>{section.cardLabel}</span>
                          <h3 className={styles.processCardName}>{section.cardTitle}</h3>
                          <span className={styles.processCardLink}>{section.cardLinkLabel} →</span>
                        </div>
                      </a>
                    )}
                  </div>

                  <div className={styles.rowText}>
                    <span className={styles.phaseTag}>{section.phase}</span>
                    <h2>{section.title}</h2>
                    <p>
                      {section.preview}
                      {isExpanded && <span className={styles.moreText}> {section.more}</span>}
                    </p>
                    <button
                      type="button"
                      className={styles.readMoreButton}
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>

                    {index === 0 && (
                      <div className={styles.caseStudyGrid}>
                        {caseStudyLinks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.caseLinkItem}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div>
          );
        })}

        <div className={styles.endSection}>
          <div className={styles.pageContainer}>
            <div className={styles.endSectionInner}>
              <span className={styles.phaseTag}>End of Chapter 4</span>
              <h2 className={styles.endTitle}>Continue to the Resource Library</h2>
              <a href="/resources" className={styles.primaryButton} onClick={handleNavigate('/resources')}>
                Next: Resources →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
