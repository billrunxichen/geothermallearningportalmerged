import type { MouseEvent } from 'react';
import styles from './StaticProcessPage.module.css';

interface StaticProcessPageProps {
  onNavigate: (href: string) => void;
}

const processSections = [
  {
    phase: '2.1 Recall the Benefits: Prepare to Build a Coalition',
    title: 'How do I prepare for the process of advocating for geothermal energy?',
    body: "A shared energy system offers diverse benefits, from household savings to regional economic growth. Reviewing these impacts helps identify which civic groups and stakeholders might join your cause. For a detailed breakdown of these benefits, see the 'Gas-to-Geo Transition' document linked here.",
    cardLabel: 'PDF Resource',
    cardTitle: 'Gas-to-Geo Transition',
    cardLinkLabel: 'View Document',
    href: 'https://drive.google.com/file/d/1R0FrrqYdCOna9YgP45R7u5IySIy2FBJs/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1R0FrrqYdCOna9YgP45R7u5IySIy2FBJs&sz=w800',
    layout: 'standard',
  },
  {
    phase: '2.2 Envision Community Opportunities',
    title: 'What are some existing places in your community that could benefit from geothermal?',
    body: "You don't need to start from scratch. Look at existing community buildings and infrastructure—these are your opportunities to kickstart interest and drive action. Use the 'Opportunities Chart' card to help identify potential sites in your neighborhood.",
    cardLabel: 'Interactive Tool',
    cardTitle: 'TENs Opportunities Chart',
    cardLinkLabel: 'Download Chart',
    href: 'https://drive.google.com/file/d/19E8_-A-bE_Py_oM7aSAHNV8G2htBZnYC/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=19E8_-A-bE_Py_oM7aSAHNV8G2htBZnYC&sz=w800',
    layout: 'flip',
  },
  {
    phase: '2.3 Find Allies and Register Interest',
    title: 'Who are my allies? How do I find other likeminded people?',
    body: "Community projects succeed with a strong coalition. Diverse allies bring essential resources and perspectives to your cause. Use the 'Ladder of Engagement' framework to guide supporters from passive interest to active leadership.",
    cardLabel: 'Slide Deck',
    cardTitle: 'Ladder of Engagement',
    cardLinkLabel: 'View Presentation',
    href: 'https://docs.google.com/presentation/d/1Ie6HnQQDyJYKkLdB9yzf1VW9u-9ihUq_pyoEzLvQP24/edit',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1Ie6HnQQDyJYKkLdB9yzf1VW9u-9ihUq_pyoEzLvQP24&sz=w800',
    layout: 'standard',
  },
  {
    phase: '2.4 Design a Process for Your Coalition',
    title: 'What steps do we need to go through to reach the outcome we are interested in?',
    body: "Once your coalition is formed, you need a clear strategy. Identify key decisionmakers and understand the municipal approval process to avoid delays. Consult the 'Decision Timeline' card to visualize the necessary steps for town planning.",
    cardLabel: 'Process Guide',
    cardTitle: 'Decision Timeline',
    cardLinkLabel: 'View Timeline',
    href: 'https://drive.google.com/file/d/1qceQtjTirMGECjwo-foT4m2vkymcyPC4/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1qceQtjTirMGECjwo-foT4m2vkymcyPC4&sz=w800',
    layout: 'flip',
  },
  {
    phase: '2.5 Thinking about Financing & Ownership',
    title: 'How do different communities govern these systems?',
    body: "Before development begins, you must determine who will own and manage the infrastructure. Whether it's a utility, a co-op, or the municipality, agreeing on a model early strengthens your position. Review the 'Ownership Guide' for a comparison of community management models.",
    cardLabel: 'Governance Guide',
    cardTitle: 'Ownership Models',
    cardLinkLabel: 'View Guide',
    href: 'https://drive.google.com/file/d/1RTsWdhoAkkKtPb73sPAls3XnCVQI6sas/view?usp=sharing',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1RTsWdhoAkkKtPb73sPAls3XnCVQI6sas&sz=w800',
    layout: 'standard',
  },
  {
    phase: '2.6 Financing the Transition',
    title: 'Who pays for the transition to district energy?',
    body: "Securing capital is one of the biggest hurdles. From state grants to green bank loans, there are multiple pathways to fund your network. Explore the 'Funding Options' document to see examples of financial mechanisms available for community energy projects.",
    cardLabel: 'Financial Resources',
    cardTitle: 'Funding Options',
    cardLinkLabel: 'View Funding Sources',
    href: 'https://drive.google.com/file/d/1QUXMK8smwYGseWEXwwkYSuFBvbc2wv6l/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1QUXMK8smwYGseWEXwwkYSuFBvbc2wv6l&sz=w800',
    layout: 'flip',
  },
] as const;

export function StaticProcessPage({ onNavigate }: StaticProcessPageProps) {
  const handleNavigate =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onNavigate(href);
    };

  return (
    <div className={styles.page}>
      <main>
        {processSections.map((section) => (
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
                  <p>{section.body}</p>
                </div>
              </section>
            </div>
          </div>
        ))}

        <div className={styles.endSection}>
          <div className={styles.pageContainer}>
            <div className={styles.endSectionInner}>
              <span className={styles.endLabel}>End of Chapter 2</span>
              <h2 className={styles.endTitle}>Ready to Build?</h2>
              <p className={styles.endCopy}>
                Now that you have a coalition and a process, it&apos;s time to look at the
                physical infrastructure.
              </p>
              <a href="/learn" className={styles.primaryButton} onClick={handleNavigate('/learn')}>
                Next: Chapter 3 - Implementation →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
