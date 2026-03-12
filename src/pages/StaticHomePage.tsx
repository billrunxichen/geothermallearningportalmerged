import type { MouseEvent } from 'react';
import styles from './StaticHomePage.module.css';

interface StaticHomePageProps {
  onNavigate: (href: string) => void;
}

export function StaticHomePage({ onNavigate }: StaticHomePageProps) {
  const handleNavigate =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onNavigate(href);
    };

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.pageContainer}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>Geothermal Energy: The Heat Beneath Your Feet</h1>
            <p className={styles.heroCopy}>
              To maintain a comfortable and healthy indoor environment, every home, every building,
              needs to provide heating and cooling. We use thermal energy to recycle the heat we
              already have.
            </p>
            <div className={styles.heroButtons}>
              <a href="/basics" className={styles.primaryButton} onClick={handleNavigate('/basics')}>
                Start Learning
              </a>
              <a href="/learn" className={styles.secondaryButton} onClick={handleNavigate('/learn')}>
                Go to Learning Portal
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.rowWrapper}>
          <div className={styles.pageContainer}>
            <section className={styles.row}>
              <div
                className={`${styles.rowImage} ${styles.rowPhoto}`}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000')",
                }}
              />
              <div className={styles.rowText}>
                <span className={styles.phaseTag}>The Vision</span>
                <h2>Redefining Community Comfort</h2>
                <p>
                  Every building requires thermal energy to provide a healthy and comfortable
                  indoor environment. Currently, most buildings act as islands, burning fossil
                  fuels individually to create heat while venting massive amounts of energy into
                  the atmosphere.
                </p>
                <p>
                  We are transitioning from this model of waste to a model of shared resources,
                  where neighbors support each other&apos;s energy needs through a unified network.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.rowWrapper}>
          <div className={styles.pageContainer}>
            <section className={styles.row}>
              <div className={styles.rowImageFrame}>
                <img
                  src="https://neep.org/sites/default/files/geothermal_101_0.jpg"
                  alt="Geothermal Network Infrastructure"
                  className={styles.inlineImage}
                />
              </div>
              <div className={styles.rowText}>
                <span className={styles.phaseTag}>The Solution</span>
                <h2>Recycling Heat Through Networks</h2>
                <p>
                  Instead of creating new heat through combustion, we implement systems that share
                  and recycle existing thermal energy across multiple buildings.
                </p>
                <p>
                  By using a network of underground, horizontal closed-loop pipes, we can move heat
                  from where it is extra to where it is needed.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.rowWrapper}>
          <div className={styles.pageContainer}>
            <section className={styles.row}>
              <div className={styles.communityPanel}>
                <div className={styles.communityPanelInner}>
                  <h3>Community Wealth</h3>
                  <ul className={styles.communityList}>
                    <li>
                      <strong>Stable Local Jobs</strong>
                      Utility-scale projects create non-exportable jobs within our neighborhood.
                    </li>
                    <li>
                      <strong>Grid Resilience</strong>
                      Using the earth as a thermal battery protects the community from energy
                      spikes.
                    </li>
                    <li>
                      <strong>Energy Equity</strong>
                      Shared infrastructure ensures high-efficiency cooling is accessible to all.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.rowText}>
                <span className={styles.phaseTag}>The Impact</span>
                <h2>A Sustainable Future</h2>
                <p>
                  This project isn&apos;t just about pipes and pumps, it&apos;s about economic
                  sustainability. By lowering the peak electrical demand on our grid and keeping
                  energy dollars in the local workforce, we build a more resilient future.
                </p>
                <div className={styles.ctaWrap}>
                  <a href="/basics" className={styles.primaryButton} onClick={handleNavigate('/basics')}>
                    Start the Journey
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
