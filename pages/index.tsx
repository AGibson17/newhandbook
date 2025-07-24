import React from 'react';
import { MainTabAccordion } from '../components/MainTabAccordion';
import { WelcomeContent } from '../components/WelcomeContent';
import { GuideContent } from '../components/GuideContent';
import { HandbookContent } from '../components/HandbookContent';
import { FAQContent } from '../components/FAQContent';
import { 
  WelcomeIcon,
  GuideIcon,
  HandbookIcon,
  FAQIcon
} from '../components/MainTabIcons';

const mainTabs = [
  {
    id: 'welcome',
    title: 'Welcome',
    icon: <WelcomeIcon />,
    content: <WelcomeContent />
  },
  {
    id: 'guide',
    title: 'Using the Handbook',
    icon: <GuideIcon />,
    content: <GuideContent />
  },
  {
    id: 'handbook',
    title: 'Employee Handbook',
    icon: <HandbookIcon />,
    content: <HandbookContent />
  },
  {
    id: 'support',
    title: 'FAQs/Support',
    icon: <FAQIcon />,
    content: <FAQContent />
  }
];

export default function Home() {
  return (
    <div 
      style={{ 
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#F0F8F9'
      }}
    >
      {/* Reduced Header */}
      <header 
        style={{
          backgroundColor: '#0C1C33',
          borderBottom: '2px solid #C72C34',
          padding: '16px 24px',
          boxShadow: '0 2px 8px rgba(12, 28, 51, 0.2)',
          flexShrink: 0
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 
            style={{ 
              color: '#FFFFFF',
              fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
              fontSize: '24px',
              fontWeight: '300',
              lineHeight: '1.2',
              margin: '0 0 4px 0'
            }}
          >
            NexGov Employee Handbook
          </h1>
          <p 
            style={{ 
              color: '#A7C6DB',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '1.3',
              margin: '0'
            }}
          >
            Your comprehensive guide to policies, procedures, and workplace resources
          </p>
        </div>
      </header>

      {/* Main Content Container - 100vh minus header */}
      <main 
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          padding: '16px',
          minHeight: '0' // Important for flex child
        }}
      >
        {/* Tab Container with full viewport management */}
        <div 
          style={{ 
            flex: '1',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          <MainTabAccordion 
            tabs={mainTabs}
            defaultOpen="welcome"
          />
        </div>
      </main>
    </div>
  );
}
