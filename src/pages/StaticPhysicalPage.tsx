import type { MouseEvent } from 'react';
import { useState } from 'react';
import styles from './StaticPhysicalPage.module.css';

interface StaticPhysicalPageProps {
  onNavigate: (href: string) => void;
}

const physicalSections = [
  {
    phase: '3.1 A First Look: Site Selection',
    title: 'What makes a good site for geothermal energy?',
    preview:
      'Geothermal networks have many nodes: buildings that connect to the network. What are some potential places that are good sites for connection? Get familiar with some of the key features of good nodes. This will help you as you reach out to new potential users (whether households, commercial buildings, civic buildings, or industry).',
    more:
      'While you are likely to work with an engineering consultant to undertake a detailed study, it is helpful to understand the landscape of possibility in your town. Some of these buildings might even join your coalition and become organizers!',
    cardLabel: 'Presentation',
    cardTitle: 'Site Selection Guide',
    cardLinkLabel: 'View Slides',
    href: 'https://docs.google.com/presentation/d/1kllgQVfDqN991_cNZ6tswterGPClsKZWpK7XlsQ8WvQ/edit',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1kllgQVfDqN991_cNZ6tswterGPClsKZWpK7XlsQ8WvQ&sz=w800',
    layout: 'standard',
  },
  {
    phase: '3.2 Understand Scoping Studies',
    title: 'What will a system potentially look like?',
    preview:
      'The coalition will seek to understand the possible contours of a geothermal system in the community. You will likely work with an engineering consultant on a scoping study.',
    more:
      'You will want to be familiar with some key components of a scoping study and what kinds of questions it can help answer.',
    cardLabel: 'Study',
    cardTitle: 'Ithaca Scoping Study',
    cardLinkLabel: 'Read Study',
    href: 'https://drive.google.com/file/d/1v3rzB_Yge_J1-aHAe8oMkOrKzoKXvyIA/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1v3rzB_Yge_J1-aHAe8oMkOrKzoKXvyIA&sz=w800',
    layout: 'flip',
  },
  {
    phase: '3.3 Building-Scale Retrofits',
    title: 'How do buildings connect?',
    preview:
      'While district heating and cooling systems involve large community networks, there will inevitably be specific retrofits that take place at each building that connects to the network. What are those changes, what equipment needs to be installed, and how does it all work for a home or business?',
    more:
      'This set of resources walks you through some of the considerations at the building level for the implementation of district heating and cooling that makes use of geothermal resources. Many homeowners are likely to have questions about this topic; build a list of frequently asked questions, and develop a set of answers from the coalition.',
    cardLabel: 'Fact Sheet',
    cardTitle: 'Compatible HVAC Systems',
    cardLinkLabel: 'View Sheet',
    href: 'https://drive.google.com/file/d/1uQo95_VNW2uTRIyVWuzAO4NGusYydTfW/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1uQo95_VNW2uTRIyVWuzAO4NGusYydTfW&sz=w800',
    layout: 'standard',
  },
  {
    phase: '3.4 Engagement is Critical',
    title: 'What is community engagement?',
    preview:
      'Community engagement—reaching out to understand the needs, hopes and aspirations of the broader community, including those who feel very affected by a project, and those who could potentially benefit of be impacted by it—is a key part of a planning process.',
    more:
      'Community members can help point out flaws, come up with new ideas, and otherwise improve the project. More importantly, if someone will be impacted by the project, it’s important they have a chance to have a say—or even be persuaded to become a member of your coalition to help advance the project and convince others. Be sure to pursue outreach through multiple channels (in person, digital, physical paper) and be sure to develop a broad understanding of who is in the community. As you conduct engagement, you will need to tailor your message according to the audience.',
    cardLabel: 'Framework',
    cardTitle: 'Engagement Plan',
    cardLinkLabel: 'Download Plan',
    href: 'https://drive.google.com/file/d/1aJvFYNUCO3gtakPggRvfTAyqOpR62Jbn/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1aJvFYNUCO3gtakPggRvfTAyqOpR62Jbn&sz=w800',
    layout: 'flip',
  },
  {
    phase: '3.5 Homeowner FAQs',
    title: 'What do potential users want to know?',
    preview:
      'As you encounter different stakeholders in the community, you will hear their questions and concerns, and understand what makes them excited, worried, or hopeful.',
    more:
      'Track all of these questions, so you can develop a set of “Frequently Asked Questions” for your community.',
    cardLabel: 'Communication',
    cardTitle: 'Networked Geo FAQs',
    cardLinkLabel: 'View FAQs',
    href: 'https://drive.google.com/file/d/1icc5zYkCH_YYcbDisq7bUUG-5av-4Ysb/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1icc5zYkCH_YYcbDisq7bUUG-5av-4Ysb&sz=w800',
    layout: 'standard',
  },
] as const;

export function StaticPhysicalPage({ onNavigate }: StaticPhysicalPageProps) {
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
            <h1 className={styles.introTitle}>Getting Physical: Places & The Public</h1>
            <p className={styles.introCopy}>
              Now that you have a coalition and the beginnings of an advocacy and planning process
              in motion, you will engage potential users who will become part of the energy
              network, decisionmakers in the city/town government, local utilities (where
              relevant), and other parts of the community. You will develop an engagement plan and
              customize resources for your community.
            </p>
          </div>
        </div>

        {physicalSections.map((section, index) => {
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
                  </div>
                </section>
              </div>
            </div>
          );
        })}

        <div className={styles.endSection}>
          <div className={styles.pageContainer}>
            <div className={styles.endSectionInner}>
              <span className={styles.phaseTag}>End of Chapter 3</span>
              <h2 className={styles.endTitle}>Explore the full library</h2>
              <a href="/learn" className={styles.primaryButton} onClick={handleNavigate('/learn')}>
                View All Resources
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
