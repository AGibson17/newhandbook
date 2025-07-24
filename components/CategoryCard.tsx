import { ReactNode } from 'react';

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

export function CategoryCard({ icon, title, description, onClick }: CategoryCardProps) {
  return (
    <div 
      className="cursor-pointer transition-all duration-200 min-h-[88px] flex items-center"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '24px 16px',
        gap: '16px',
        boxShadow: '0 2px 8px rgba(12, 28, 51, 0.12)',
        border: '2px solid #0C1C33',
        transition: 'all 0.2s ease'
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#F0F8F9';
        e.currentTarget.style.borderColor = '#C72C34';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(199, 44, 52, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#FFFFFF';
        e.currentTarget.style.borderColor = '#0C1C33';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(12, 28, 51, 0.12)';
      }}
    >
      {/* Icon Container - 48x48px with 12px radius */}
      <div 
        className="flex items-center justify-center flex-shrink-0"
        style={{ 
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: '#0C1C33',
          border: '2px solid #C72C34'
        }}
      >
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 
          style={{ 
            color: '#0C1C33',
            fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
            fontSize: '20px',
            fontWeight: '300',
            lineHeight: '1.4',
            margin: '0 0 6px 0'
          }}
        >
          {title}
        </h3>
        <p 
          style={{ 
            color: '#1C3354',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '1.4',
            margin: '0'
          }}
        >
          {description}
        </p>
      </div>

      {/* Arrow indicator */}
      <div 
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '24px',
          height: '24px'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path 
            d="M6 4l4 4-4 4" 
            stroke="#C72C34" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}