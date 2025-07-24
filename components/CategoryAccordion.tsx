import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface CategoryAccordionProps {
  categories: Array<{
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
  }>;
  onCategoryClick: (categoryId: string) => void;
}

export function CategoryAccordion({ categories, onCategoryClick }: CategoryAccordionProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (categoryId: string) => {
    setOpenSection(openSection === categoryId ? null : categoryId);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {categories.map((category) => {
        const isOpen = openSection === category.id;
        
        return (
          <div
            key={category.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              boxShadow: '0 1px 6px rgba(28, 51, 84, 0.08)',
              border: '1px solid rgba(167, 198, 219, 0.2)',
              overflow: 'hidden'
            }}
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleSection(category.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '20px 16px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
              }}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${category.id}`}
            >
              {/* Icon Container */}
              <div 
                className="flex items-center justify-center flex-shrink-0"
                style={{ 
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#A7C6DB',
                  marginRight: '16px'
                }}
              >
                {category.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 
                  style={{ 
                    color: '#0C1C33',
                    fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
                    fontSize: '20px',
                    fontWeight: '300',
                    lineHeight: '1.5',
                    margin: '0'
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Chevron */}
              <div 
                style={{
                  marginLeft: '12px',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <ChevronDown 
                  size={20} 
                  style={{ color: '#477E9F' }}
                />
              </div>
            </button>

            {/* Accordion Content */}
            <div
              id={`accordion-content-${category.id}`}
              style={{
                maxHeight: isOpen ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease'
              }}
            >
              <div 
                style={{
                  padding: '0 16px 20px 80px'
                }}
              >
                <p 
                  style={{ 
                    color: '#1C3354',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.5',
                    margin: '0 0 16px 0'
                  }}
                >
                  {category.description}
                </p>
                
                <button
                  onClick={() => onCategoryClick(category.id)}
                  style={{
                    backgroundColor: '#477E9F',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '16px',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: '500',
                    cursor: 'pointer',
                    minHeight: '44px',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.backgroundColor = '#1C3354';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.backgroundColor = '#477E9F';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#477E9F';
                  }}
                >
                  View Policies
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}