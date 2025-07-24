import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface MainTabAccordionProps {
  tabs: Array<{
    id: string;
    title: string;
    icon: ReactNode;
    content: ReactNode;
  }>;
  defaultOpen?: string;
}

export function MainTabAccordion({ tabs, defaultOpen }: MainTabAccordionProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultOpen || tabs[0]?.id);

  const toggleTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        gap: '2px',
        overflow: 'hidden'
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        
        return (
          <div
            key={tab.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              boxShadow: isActive 
                ? '0 4px 20px rgba(28, 51, 84, 0.15)' 
                : '0 1px 6px rgba(28, 51, 84, 0.08)',
              border: isActive 
                ? '2px solid #0C1C33' 
                : '1px solid rgba(167, 198, 219, 0.2)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              minHeight: isActive ? '0' : '60px',
              maxHeight: isActive ? 'none' : '60px',
              flex: isActive ? '1' : '0 0 60px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              width: '100%'
            }}
          >
            {/* Tab Header */}
            <button
              onClick={() => toggleTab(tab.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                backgroundColor: isActive ? '#0C1C33' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                minHeight: '60px',
                maxHeight: '60px',
                transition: 'background-color 0.3s ease',
                position: 'relative'
              }}
              aria-expanded={isActive}
              aria-controls={`tab-content-${tab.id}`}
            >
              {/* Icon Container */}
              <div 
                style={{ 
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: isActive ? '#C72C34' : '#A7C6DB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px',
                  transition: 'background-color 0.3s ease',
                  flexShrink: 0
                }}
              >
                {tab.icon}
              </div>
              
              {/* Title */}
              <h2 
                style={{ 
                  color: isActive ? '#FFFFFF' : '#0C1C33',
                  fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
                  fontSize: '20px',
                  fontWeight: '300',
                  lineHeight: '1.2',
                  margin: '0',
                  flex: 1,
                  transition: 'color 0.3s ease'
                }}
              >
                {tab.title}
              </h2>

              {/* Chevron - Only show if not active */}
              {!isActive && (
                <div 
                  style={{
                    marginLeft: '12px',
                    flexShrink: 0
                  }}
                >
                  <ChevronDown 
                    size={24} 
                    style={{ color: '#0C1C33' }}
                  />
                </div>
              )}

              {/* Active indicator */}
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    right: '24px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '24px',
                    backgroundColor: '#C72C34',
                    borderRadius: '2px'
                  }}
                />
              )}
            </button>

            {/* Tab Content */}
            {isActive && (
              <div
                id={`tab-content-${tab.id}`}
                style={{
                  flex: '1',
                  overflow: 'auto',
                  padding: '24px',
                  backgroundColor: '#F0F8F9',
                  minHeight: '0' // Important for flex child to shrink
                }}
              >
                {tab.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}