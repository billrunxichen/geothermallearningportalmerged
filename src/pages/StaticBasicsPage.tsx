import type { MouseEvent } from 'react';
import { useState } from 'react';
import styles from './StaticBasicsPage.module.css';

interface StaticBasicsPageProps {
  onNavigate: (href: string) => void;
}

const basicsSections = [
  {
    phase: '1.1 Introduction',
    title: 'What is thermal energy?',
    preview:
      'Depending on where you live, the weather outside might be cool and breezy, hot and humid, or cold and snowy. To maintain a comfortable and healthy indoor environment, every home—every building—needs to provide heating and cooling.',
    more:
      'We also use thermal energy to provide hot water for use at home (e.g. for cleaning, cooking, and bathing) and in workplaces (e.g. for industrial processes). In everyday language, thermal energy is energy associated with heat. When you heat up a substance, its thermal energy increases; if you cool a substance, its thermal energy decreases. We measure how much thermal energy is present by looking at the temperature of a substance—the average kinetic energy of the atoms or molecules that make up that substance. Heat naturally flows from high temperature (warmer) substances to low temperature (cooler) substances. This difference in temperature is also called a temperature gradient. Geothermal energy, or geothermal heat, is a specific type of thermal energy derived from the Earth\'s interior—heat below the surface.',
    cardLabel: 'Leaflet',
    cardTitle: 'Moving Heat',
    cardLinkLabel: 'Read Leaflet',
    href: 'https://drive.google.com/file/d/168m7G4-G4WEo7lNQ1rjG8zTVtm8nYfXu/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=168m7G4-G4WEo7lNQ1rjG8zTVtm8nYfXu&sz=w800',
    layout: 'standard',
  },
  {
    phase: '1.2 Individual Home Heating',
    title: 'What is an HVAC system?',
    preview:
      'Every building has an HVAC system—heating, ventilation, and air conditioning—to maintain appropriate indoor temperature and humidity. There are many kinds of heating equipment, such as furnaces and electric baseboard heaters; and cooling equipment, such as air conditioners.',
    more:
      'One type of device that can provide both heating and cooling is the heat pump: when the weather is hot, it moves thermal energy from inside the home to the outside; and when the weather is cool, it can pull thermal energy from the outside into the home. They are relatively efficient machines with a well-established track record. Air-source heat pumps are the most common type of heat pump. They are efficient at a wide range of temperatures, although when outside air temperature nears freezing (32°F or 0°C), they can become less efficient and may need a backup system. Another type of heat pump uses the earth as the source and sink for heat: a ground-source heat pump. Because the temperature underground is relatively stable compared to the outdoor air temperature, the heat pump can operate year-round.',
    cardLabel: 'Fact Sheet',
    cardTitle: 'Ground-Source Heat Pumps',
    cardLinkLabel: 'View Sheet',
    href: 'https://drive.google.com/file/d/1_79OOgG7aGgZbS4roTv8j2y-AR95LXnk/view',
    thumbnail:
      'https://drive.google.com/thumbnail?id=1_79OOgG7aGgZbS4roTv8j2y-AR95LXnk&sz=w800',
    layout: 'flip',
  },
] as const;

export function StaticBasicsPage({ onNavigate }: StaticBasicsPageProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleNavigate =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onNavigate(href);
    };

  return (
    <div className={styles.page}>
      <main>
        {basicsSections.map((section, index) => {
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
              <span className={styles.phaseTag}>Continue</span>
              <h2 className={styles.endTitle}>Scaling to the District Level</h2>
              <a href="/learn" className={styles.primaryButton} onClick={handleNavigate('/learn')}>
                Next: Systems & Costs →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
