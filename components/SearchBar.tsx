import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search categories..." }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
  };

  return (
    <div 
      className="relative w-full"
      style={{ marginBottom: '24px' }}
    >
      <div 
        className="relative flex items-center"
        style={{
          backgroundColor: '#FFFFFF',
          border: `2px solid ${isFocused ? '#C72C34' : '#0C1C33'}`,
          borderRadius: '16px',
          transition: 'border-color 0.2s ease',
          boxShadow: isFocused 
            ? '0 4px 20px rgba(199, 44, 52, 0.15)' 
            : '0 1px 6px rgba(12, 28, 51, 0.08)'
        }}
      >
        {/* Search Icon */}
        <div 
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: '44px',
            height: '44px'
          }}
        >
          <Search 
            size={20} 
            style={{ color: isFocused ? '#C72C34' : '#0C1C33' }}
          />
        </div>

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontSize: '16px',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '400',
            color: '#0C1C33',
            height: '44px',
            paddingRight: value ? '44px' : '16px'
          }}
          className="placeholder:text-[#1C3354]"
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={handleClear}
            type="button"
            style={{
              position: 'absolute',
              right: '0',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F0F8F9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Clear search"
          >
            <X 
              size={18} 
              style={{ color: '#C72C34' }}
            />
          </button>
        )}
      </div>
    </div>
  );
}