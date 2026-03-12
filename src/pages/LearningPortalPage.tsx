import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { Introduction } from '../components/Introduction';
import { IndividualHomeHeating } from '../components/IndividualHomeHeating';
import { DistrictHeating } from '../components/DistrictHeating';
import { ElectricityGeneration } from '../components/ElectricityGeneration';
import { Benefits } from '../components/Benefits';
import { Costs } from '../components/Costs';
import { BuildCoalition } from '../components/BuildCoalition';
import { CommunityOpportunities } from '../components/CommunityOpportunities';
import { DesignProcess } from '../components/DesignProcess';
import { SiteSelection } from '../components/SiteSelection';
import { ScopingStudies } from '../components/ScopingStudies';
import { BuildingRetrofits } from '../components/BuildingRetrofits';
import { CommunityEngagement } from '../components/CommunityEngagement';
import { InteractiveMap } from '../components/InteractiveMap';
import { TableOfContents } from '../components/TableOfContents';

export function LearningPortalPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'introduction',
        'individual-heating',
        'district-heating',
        'electricity-generation',
        'benefits',
        'costs',
        'build-coalition',
        'community-opportunities',
        'design-process',
        'site-selection',
        'scoping-studies',
        'building-retrofits',
        'community-engagement',
        'homeowner-faqs',
        'global-map',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) {
        return;
      }

      const target = document.getElementById(hash.slice(1));
      if (target) {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    scrollToHash();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Hero />
      <TableOfContents activeSection={activeSection} />
      <div className="relative">
        <Introduction />
        <IndividualHomeHeating />
        <DistrictHeating />
        <ElectricityGeneration />
        <Benefits />
        <Costs />
        <BuildCoalition />
        <CommunityOpportunities />
        <DesignProcess />
        <SiteSelection />
        <ScopingStudies />
        <BuildingRetrofits />
        <CommunityEngagement />
        <InteractiveMap />
      </div>
    </div>
  );
}
