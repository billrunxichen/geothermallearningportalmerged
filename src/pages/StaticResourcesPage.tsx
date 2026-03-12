import { useMemo, useState } from 'react';
import styles from './StaticResourcesPage.module.css';

type SectionFilter = 'all' | '1' | '2' | '3' | '4';

interface ResourceItem {
  title: string;
  section: '1' | '2' | '3' | '4';
  sectionTag: string;
  description: string;
  href: string;
  linkLabel: string;
  image?: string;
  placeholder?: string;
  placeholderClass?: string;
  disabled?: boolean;
}

const resources: ResourceItem[] = [
  { title: 'Moving Heat Fundamentals', section: '1', sectionTag: 'Section 1.1', description: 'Leaflet exploring how thermal energy is captured, moved, and repurposed.', href: 'https://drive.google.com/file/d/168m7G4-G4WEo7lNQ1rjG8zTVtm8nYfXu/view', linkLabel: 'Read Leaflet', image: 'https://drive.google.com/thumbnail?id=168m7G4-G4WEo7lNQ1rjG8zTVtm8nYfXu&sz=w800' },
  { title: 'Science of Thermodynamics', section: '1', sectionTag: 'Section 1.1', description: 'Video explanation of conduction, convection, and radiation principles.', href: 'https://www.youtube.com/shorts/evCCd0yxRRk', linkLabel: 'Watch Video', image: 'https://img.youtube.com/vi/evCCd0yxRRk/hqdefault.jpg' },
  { title: 'DOE Ground-Source Heat Pumps', section: '1', sectionTag: 'Section 1.2', description: 'Department of Energy flyer explaining ground-source heat pump technology.', href: 'https://drive.google.com/file/d/1_79OOgG7aGgZbS4roTv8j2y-AR95LXnk/view', linkLabel: 'View Fact Sheet', image: 'https://drive.google.com/thumbnail?id=1_79OOgG7aGgZbS4roTv8j2y-AR95LXnk&sz=w800' },
  { title: 'Energy from Wastewater', section: '1', sectionTag: 'Section 1.2', description: 'Fact sheet on using wastewater systems as continuous thermal energy sources.', href: 'https://drive.google.com/file/d/11sMDs8RJJ8DPfRH4C38OzUhnXuoMMmPw/view', linkLabel: 'Read Fact Sheet', image: 'https://drive.google.com/thumbnail?id=11sMDs8RJJ8DPfRH4C38OzUhnXuoMMmPw&sz=w800' },
  { title: 'What is District Heating?', section: '1', sectionTag: 'Section 1.3', description: 'Overview of connecting multiple buildings to a single energy source.', href: 'https://www.youtube.com/watch?v=ffto77D4p4Y', linkLabel: 'Watch Video', image: 'https://img.youtube.com/vi/ffto77D4p4Y/hqdefault.jpg' },
  { title: 'Paris District Cooling', section: '1', sectionTag: 'Section 1.3', description: 'Radio story on how Paris uses pipes to keep the city cool amid rising heat.', href: 'https://theworld.org/stories/2025/06/30/amid-rising-heat-paris-expands-a-network-of-pipes-to-keep-cool', linkLabel: 'Listen to Story', placeholder: '📻', placeholderClass: styles.darkPlaceholder },
  { title: 'Thermal Energy Networks', section: '1', sectionTag: 'Section 1.3', description: 'Explainer video from the Building Decarbonization Coalition.', href: 'https://www.youtube.com/watch?v=gYO6GJo0NEY', linkLabel: 'Watch Video', image: 'https://img.youtube.com/vi/gYO6GJo0NEY/hqdefault.jpg' },
  { title: 'Basics of Thermal Networks', section: '1', sectionTag: 'Section 1.3', description: 'One-page flyer summarizing the core concepts of thermal networks.', href: 'https://drive.google.com/file/d/17sw6jMr3azd7J2APncgE-aaOHGVHtzf0/view', linkLabel: 'View Flyer', image: 'https://drive.google.com/thumbnail?id=17sw6jMr3azd7J2APncgE-aaOHGVHtzf0&sz=w800' },
  { title: 'Defining Geothermal Networks', section: '1', sectionTag: 'Section 1.3', description: 'Brief video from HEET defining what constitutes a geothermal network.', href: 'https://www.youtube.com/watch?v=1JHQ2ToBW9c', linkLabel: 'Watch Video', image: 'https://img.youtube.com/vi/1JHQ2ToBW9c/hqdefault.jpg' },
  { title: 'HEET Definition Document', section: '1', sectionTag: 'Section 1.3', description: 'Formal definitions and overview of geothermal networks.', href: 'https://drive.google.com/file/d/1KVPSr7e9a1axTQHNYgI5Xci_MQlVgpXi/view', linkLabel: 'Read Document', image: 'https://drive.google.com/thumbnail?id=1KVPSr7e9a1axTQHNYgI5Xci_MQlVgpXi&sz=w800' },
  { title: 'Geothermal Deep Dive', section: '1', sectionTag: 'Section 1.3', description: 'Detailed video from the Massachusetts Clean Energy Center.', href: 'https://www.youtube.com/watch?v=Ncs7Sy-CCG0&list=PLSc0O51LWuDdjNA1UabX-Jf0SZUJZSV__&index=12', linkLabel: 'Watch Video', image: 'https://img.youtube.com/vi/Ncs7Sy-CCG0/hqdefault.jpg' },
  { title: 'Why Efficiency Matters', section: '1', sectionTag: 'Section 1.3', description: 'Article from the Building Decarbonization Coalition.', href: 'https://buildingdecarb.org/why-efficiency-matters', linkLabel: 'Read Article', placeholder: '⚡', placeholderClass: styles.bluePlaceholder },
  { title: 'Geothermal Power Plants', section: '1', sectionTag: 'Section 1.4', description: 'PBS NewsHour segment on geothermal electricity generation.', href: 'https://www.youtube.com/watch?v=-36VWp9Sf4A', linkLabel: 'Watch Video', image: 'https://img.youtube.com/vi/-36VWp9Sf4A/hqdefault.jpg' },
  { title: 'Power Generation Challenges', section: '1', sectionTag: 'Section 1.4', description: 'DW Planet explores factors preventing wide-scale adoption.', href: 'https://www.youtube.com/watch?v=c7dy0hUZ9xI', linkLabel: 'Watch Video', image: 'https://img.youtube.com/vi/c7dy0hUZ9xI/hqdefault.jpg' },
  { title: 'Benefits of TENs', section: '1', sectionTag: 'Section 1.5', description: 'Flyer listing key benefits of Thermal Energy Networks.', href: 'https://drive.google.com/file/d/1orTKdVhhrNNM9HCZdG1weC6PRByZOU8C/view', linkLabel: 'View Flyer', image: 'https://drive.google.com/thumbnail?id=1orTKdVhhrNNM9HCZdG1weC6PRByZOU8C&sz=w800' },
  { title: 'Inclusive Decarbonization', section: '1', sectionTag: 'Section 1.5', description: 'Presentation on Geothermal Networks as an inclusive strategy.', href: 'https://docs.google.com/presentation/d/1SjbdZfyixAjnIZfvN_1GOo_DNpIkMLnR/edit', linkLabel: 'View Slides', image: 'https://drive.google.com/thumbnail?id=1SjbdZfyixAjnIZfvN_1GOo_DNpIkMLnR&sz=w800' },
  { title: 'Mitigating Future Peaks', section: '1', sectionTag: 'Section 1.5', description: 'Explainer on how geothermal benefits the electricity system.', href: 'https://drive.google.com/file/d/1ZzTCfPDucyaI80TWn4GGddUcI_UjUnNv/view', linkLabel: 'Read Explainer', image: 'https://drive.google.com/thumbnail?id=1ZzTCfPDucyaI80TWn4GGddUcI_UjUnNv&sz=w800' },
  { title: 'Oak Ridge Report Highlights', section: '1', sectionTag: 'Section 1.5', description: 'Summary of study finding $1 trillion in potential cost savings.', href: 'https://drive.google.com/file/d/1s7yUJmVEw4FbFhpvwR5hyK6a1aB3OamS/view', linkLabel: 'Read Summary', image: 'https://drive.google.com/thumbnail?id=1s7yUJmVEw4FbFhpvwR5hyK6a1aB3OamS&sz=w800' },
  { title: 'Global Energy Security', section: '1', sectionTag: 'Section 1.5', description: 'Video exploring how shallow geothermal systems contribute to security.', href: 'https://www.youtube.com/watch?v=mvOoBL-et7U', linkLabel: 'Watch Video', image: 'https://img.youtube.com/vi/mvOoBL-et7U/hqdefault.jpg' },
  { title: 'UK Low-Carbon Heat Study', section: '1', sectionTag: 'Section 1.5', description: 'Executive summary on impact of heat pumps and demand flexibility.', href: 'https://drive.google.com/file/d/1bSDjOEvT7bA6vyKOE-YhJomCSrq1Q8x-/view', linkLabel: 'Read Summary', image: 'https://drive.google.com/thumbnail?id=1bSDjOEvT7bA6vyKOE-YhJomCSrq1Q8x-&sz=w800' },
  { title: 'NYSERDA District Energy', section: '1', sectionTag: 'Section 1.6', description: 'Report on ownership and investment models.', href: 'https://drive.google.com/file/d/18tNzpeYsLNEtzXVrOmgvJSCbm21CWrKK/view', linkLabel: 'View Report', image: 'https://drive.google.com/thumbnail?id=18tNzpeYsLNEtzXVrOmgvJSCbm21CWrKK&sz=w800' },
  { title: 'Funding Opportunities', section: '1', sectionTag: 'Section 1.6', description: 'Live document listing grants and funding sources.', href: 'https://docs.google.com/document/d/1eW-YBxbp39rC7eajCHg4a4K-lv7GMTTIcH-ti7_aFwE/edit', linkLabel: 'View Google Doc', image: 'https://drive.google.com/thumbnail?id=1eW-YBxbp39rC7eajCHg4a4K-lv7GMTTIcH-ti7_aFwE&sz=w800' },
  { title: 'Gas-to-Geo Transition', section: '2', sectionTag: 'Section 2.1', description: 'Detailed breakdown of benefits for coalition building.', href: 'https://drive.google.com/file/d/1R0FrrqYdCOna9YgP45R7u5IySIy2FBJs/view', linkLabel: 'View Document', image: 'https://drive.google.com/thumbnail?id=1R0FrrqYdCOna9YgP45R7u5IySIy2FBJs&sz=w800' },
  { title: 'TENs Opportunities Chart', section: '2', sectionTag: 'Section 2.2', description: 'Interactive chart to identify community building opportunities.', href: 'https://drive.google.com/file/d/19E8_-A-bE_Py_oM7aSAHNV8G2htBZnYC/view', linkLabel: 'Download Chart', image: 'https://drive.google.com/thumbnail?id=19E8_-A-bE_Py_oM7aSAHNV8G2htBZnYC&sz=w800' },
  { title: 'Ladder of Engagement', section: '2', sectionTag: 'Section 2.3', description: 'Slide deck for guiding supporters from interest to leadership.', href: 'https://docs.google.com/presentation/d/1Ie6HnQQDyJYKkLdB9yzf1VW9u-9ihUq_pyoEzLvQP24/edit', linkLabel: 'View Slides', image: 'https://drive.google.com/thumbnail?id=1Ie6HnQQDyJYKkLdB9yzf1VW9u-9ihUq_pyoEzLvQP24&sz=w800' },
  { title: 'Decision Timeline', section: '2', sectionTag: 'Section 2.4', description: 'Visual timeline for municipal planning and approval steps.', href: 'https://drive.google.com/file/d/1qceQtjTirMGECjwo-foT4m2vkymcyPC4/view', linkLabel: 'View Timeline', image: 'https://drive.google.com/thumbnail?id=1qceQtjTirMGECjwo-foT4m2vkymcyPC4&sz=w800' },
  { title: 'Ownership Models', section: '2', sectionTag: 'Section 2.5', description: 'Comparison of utility, co-op, and municipal management models.', href: 'https://drive.google.com/file/d/1RTsWdhoAkkKtPb73sPAls3XnCVQI6sas/view', linkLabel: 'View Guide', image: 'https://drive.google.com/thumbnail?id=1RTsWdhoAkkKtPb73sPAls3XnCVQI6sas&sz=w800' },
  { title: 'Funding Options', section: '2', sectionTag: 'Section 2.6', description: 'Examples of financial mechanisms for community energy projects.', href: 'https://drive.google.com/file/d/1QUXMK8smwYGseWEXwwkYSuFBvbc2wv6l/view', linkLabel: 'View Funding Sources', image: 'https://drive.google.com/thumbnail?id=1QUXMK8smwYGseWEXwwkYSuFBvbc2wv6l&sz=w800' },
  { title: 'Site Selection Considerations', section: '3', sectionTag: 'Section 3.1', description: 'Presentation on identifying good nodes for geothermal connection.', href: 'https://docs.google.com/presentation/d/1kllgQVfDqN991_cNZ6tswterGPClsKZWpK7XlsQ8WvQ/edit', linkLabel: 'View Slides', image: 'https://drive.google.com/thumbnail?id=1kllgQVfDqN991_cNZ6tswterGPClsKZWpK7XlsQ8WvQ&sz=w800' },
  { title: 'Screening Sites List', section: '3', sectionTag: 'Section 3.1', description: 'General list of considerations for site selection from TEN.', href: 'https://docs.google.com/document/d/1psu_EBVc18FEV-8ryZEtKlLqVEEbv2VL/edit', linkLabel: 'View Document', image: 'https://drive.google.com/thumbnail?id=1psu_EBVc18FEV-8ryZEtKlLqVEEbv2VL&sz=w800' },
  { title: 'MA Geothermal Considerations', section: '3', sectionTag: 'Section 3.1', description: 'HEET document detailing specific site factors for Massachusetts.', href: 'https://drive.google.com/file/d/1h5j4fa7a2AOZMSW5_Uvv9rrif0Wfr7Cu/view', linkLabel: 'Read Document', image: 'https://drive.google.com/thumbnail?id=1h5j4fa7a2AOZMSW5_Uvv9rrif0Wfr7Cu&sz=w800' },
  { title: 'Local Geological Assets', section: '3', sectionTag: 'Section 3.1', description: 'Explainer on analyses for geological feasibility.', href: 'https://docs.google.com/document/d/12WIruh2j8HQsyXsm1RGuSzeF9XIycUEhXS5t5I_uLVg/edit', linkLabel: 'Read Explainer', image: 'https://drive.google.com/thumbnail?id=12WIruh2j8HQsyXsm1RGuSzeF9XIycUEhXS5t5I_uLVg&sz=w800' },
  { title: 'Ithaca Scoping Study', section: '3', sectionTag: 'Section 3.2', description: 'Sample scoping study from a project in Ithaca, New York.', href: 'https://drive.google.com/file/d/1v3rzB_Yge_J1-aHAe8oMkOrKzoKXvyIA/view', linkLabel: 'Read Study', image: 'https://drive.google.com/thumbnail?id=1v3rzB_Yge_J1-aHAe8oMkOrKzoKXvyIA&sz=w800' },
  { title: 'Holyoke Scoping Study', section: '3', sectionTag: 'Section 3.2', description: 'Draft scoping study for Dean Vocational Technical High School.', href: 'https://docs.google.com/document/d/1Yoxx31KkQi2m5eqVbcWDrRzUbv8O9y1G/edit', linkLabel: 'Read Draft', image: 'https://drive.google.com/thumbnail?id=1Yoxx31KkQi2m5eqVbcWDrRzUbv8O9y1G&sz=w800' },
  { title: 'MassDEP Well Database Demo', section: '3', sectionTag: 'Section 3.2', description: 'Video walkthrough of the Massachusetts DEP well database.', href: 'https://drive.google.com/file/d/1yDqL1-bzs07pKMgrSB9RFTgmXlZnorcI/view', linkLabel: 'Watch Video', image: 'https://drive.google.com/thumbnail?id=1yDqL1-bzs07pKMgrSB9RFTgmXlZnorcI&sz=w800' },
  { title: 'Compatible HVAC Systems', section: '3', sectionTag: 'Section 3.3', description: 'Fact sheet describing HVAC systems compatible with district energy.', href: 'https://drive.google.com/file/d/1uQo95_VNW2uTRIyVWuzAO4NGusYydTfW/view', linkLabel: 'View Fact Sheet', image: 'https://drive.google.com/thumbnail?id=1uQo95_VNW2uTRIyVWuzAO4NGusYydTfW&sz=w800' },
  { title: 'Building Stock Assessment', section: '3', sectionTag: 'Section 3.3', description: 'Key things to look for in candidate buildings.', href: 'https://docs.google.com/document/d/1o3qwXv4C1WnlDXuW1lEwid898bIw3i1or9ilpq68jP4/edit', linkLabel: 'View Document', image: 'https://drive.google.com/thumbnail?id=1o3qwXv4C1WnlDXuW1lEwid898bIw3i1or9ilpq68jP4&sz=w800' },
  { title: 'Engagement Plan Framework', section: '3', sectionTag: 'Section 3.4', description: 'Sample framework for developing a community engagement plan.', href: 'https://drive.google.com/file/d/1aJvFYNUCO3gtakPggRvfTAyqOpR62Jbn/view', linkLabel: 'Download Plan', image: 'https://drive.google.com/thumbnail?id=1aJvFYNUCO3gtakPggRvfTAyqOpR62Jbn&sz=w800' },
  { title: 'Stakeholder Analysis', section: '3', sectionTag: 'Section 3.4', description: 'Sample analysis document from the MIT Renewable Energy Clinic.', href: 'https://drive.google.com/file/d/1uv0toEIAjkFZWi2XOh-0AHsMeaI8j1ng/view', linkLabel: 'View Sample', image: 'https://drive.google.com/thumbnail?id=1uv0toEIAjkFZWi2XOh-0AHsMeaI8j1ng&sz=w800' },
  { title: 'Networked Geo FAQs', section: '3', sectionTag: 'Section 3.5', description: 'Frequently Asked Questions document for community outreach.', href: 'https://drive.google.com/file/d/1icc5zYkCH_YYcbDisq7bUUG-5av-4Ysb/view', linkLabel: 'View FAQs', image: 'https://drive.google.com/thumbnail?id=1icc5zYkCH_YYcbDisq7bUUG-5av-4Ysb&sz=w800' },
  { title: 'Messaging Flyer', section: '3', sectionTag: 'Section 3.5', description: 'Visual poster for TENs messaging and public communication.', href: 'https://drive.google.com/file/d/1wdBZO7obPq0lO9qxDP0i--zgMLw8JMKf/view', linkLabel: 'View Flyer', image: 'https://drive.google.com/thumbnail?id=1wdBZO7obPq0lO9qxDP0i--zgMLw8JMKf&sz=w800' },
  { title: 'VCTN Case Studies', section: '4', sectionTag: 'Section 4.1', description: 'Collection of case studies from diverse communities.', href: 'https://drive.google.com/file/d/1GpQfC7EQXascLwjGq2r5nyPHyC9sI-bE/view', linkLabel: 'Read Report', image: 'https://drive.google.com/thumbnail?id=1GpQfC7EQXascLwjGq2r5nyPHyC9sI-bE&sz=w800' },
  { title: 'Policy Recommendations', section: '4', sectionTag: 'Section 4.3', description: 'Report on creating a hospitable environment for heat pumps.', href: 'https://drive.google.com/file/d/1EXElZ0g9tJaF6b7rMcLEqb_01w3pIGAp/view', linkLabel: 'Read Report', image: 'https://drive.google.com/thumbnail?id=1EXElZ0g9tJaF6b7rMcLEqb_01w3pIGAp&sz=w800' },
  { title: 'Legal Barriers in NY', section: '4', sectionTag: 'Section 4.3', description: 'Analysis of regulatory challenges for district geothermal.', href: 'https://drive.google.com/file/d/1TOfBsP6xiVWQ80D649L9IRsjrOApXeKP/view', linkLabel: 'Read Analysis', image: 'https://drive.google.com/thumbnail?id=1TOfBsP6xiVWQ80D649L9IRsjrOApXeKP&sz=w800' },
  { title: 'Annotated Bibliography', section: '4', sectionTag: 'Section 4.3', description: 'Reference document from the HEET charrette.', href: 'https://drive.google.com/file/d/1_AHAoSbPmnIWye4M-MWs9WieXCgbO9ig/view', linkLabel: 'View Bibliography', image: 'https://drive.google.com/thumbnail?id=1_AHAoSbPmnIWye4M-MWs9WieXCgbO9ig&sz=w800' },
  { title: 'Geothermal Neighborhoods', section: '4', sectionTag: 'Section 4.2', description: 'Database of district energy projects (Coming Soon).', href: '#', linkLabel: 'Coming Soon', placeholder: '🗄️', placeholderClass: styles.darkPlaceholder, disabled: true },
];

const filters: Array<{ value: SectionFilter; label: string }> = [
  { value: 'all', label: 'Show All' },
  { value: '1', label: 'Ch 1: Foundations' },
  { value: '2', label: 'Ch 2: Process' },
  { value: '3', label: 'Ch 3: Physical' },
  { value: '4', label: 'Ch 4: Cases' },
];

export function StaticResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<SectionFilter>('all');

  const filteredResources = useMemo(() => {
    if (activeFilter === 'all') {
      return resources;
    }

    return resources.filter((resource) => resource.section === activeFilter);
  }, [activeFilter]);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.pageContainer}>
          <h1 className={styles.heroTitle}>Resource Library</h1>
          <p className={styles.heroCopy}>
            Access the complete collection of research, templates, and guides. Use the filters
            below to find specific topics.
          </p>

          <div className={styles.filterContainer}>
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`${styles.filterButton} ${
                  activeFilter === filter.value ? styles.filterButtonActive : ''
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className={styles.pageContainer}>
        <div className={styles.resourceGrid}>
          {filteredResources.map((resource) => (
            <article key={`${resource.section}-${resource.title}`} className={styles.resourceCard}>
              {resource.image ? (
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url('${resource.image}')` }}
                />
              ) : (
                <div className={`${styles.cardImage} ${resource.placeholderClass ?? ''}`}>
                  <span className={styles.placeholderIcon}>{resource.placeholder}</span>
                </div>
              )}
              <div className={styles.cardContent}>
                <h3>{resource.title}</h3>
                <span className={styles.sectionTag}>{resource.sectionTag}</span>
                <p>{resource.description}</p>
                {resource.disabled ? (
                  <span className={`${styles.cardLink} ${styles.cardLinkDisabled}`}>
                    {resource.linkLabel}
                  </span>
                ) : (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cardLink}
                  >
                    {resource.linkLabel} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
