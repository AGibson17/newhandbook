import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
  'Wisconsin', 'Wyoming'
];

interface WorkStateSelectorProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

export function WorkStateSelector({ selectedState, onStateChange }: WorkStateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateSelect = (state: string) => {
    onStateChange(state);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', marginBottom: '24px' }}>
      <label
        style={{
          display: 'block',
          color: '#0C1C33',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.5',
          marginBottom: '8px'
        }}
      >
        Work State
      </label>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          maxWidth: '300px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          backgroundColor: '#FFFFFF',
          border: `2px solid ${isOpen ? '#C72C34' : '#0C1C33'}`,
          borderRadius: '16px',
          color: '#0C1C33',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: isOpen 
            ? '0 4px 20px rgba(199, 44, 52, 0.15)' 
            : '0 1px 6px rgba(12, 28, 51, 0.08)'
        }}
      >
        <span>{selectedState}</span>
        <ChevronDown 
          size={20} 
          style={{ 
            color: isOpen ? '#C72C34' : '#0C1C33',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'all 0.2s ease'
          }}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10
            }}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              maxWidth: '300px',
              maxHeight: '300px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #0C1C33',
              borderRadius: '16px',
              marginTop: '4px',
              overflowY: 'auto',
              zIndex: 20,
              boxShadow: '0 4px 20px rgba(12, 28, 51, 0.15)'
            }}
          >
            {US_STATES.map((state) => (
              <button
                key={state}
                onClick={() => handleStateSelect(state)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: selectedState === state ? '#F0F8F9' : 'transparent',
                  border: 'none',
                  color: selectedState === state ? '#C72C34' : '#0C1C33',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  fontWeight: selectedState === state ? '500' : '400',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedState !== state) {
                    e.currentTarget.style.backgroundColor = '#A7C6DB';
                    e.currentTarget.style.color = '#0C1C33';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedState !== state) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#0C1C33';
                  }
                }}
              >
                {state}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}