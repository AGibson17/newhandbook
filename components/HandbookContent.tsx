import { useState, useMemo } from 'react';
import { SearchBar } from './SearchBar';
import { CategoryCard } from './CategoryCard';
import { WorkStateSelector } from './WorkStateSelector';
import { 
  GettingPaidView,
  TakingTimeOffView,
  DoingYourJobView,
  StayingSafeView,
  GettingSupportView,
  LeavingChangingView
} from './CategoryViews';
import { 
  PayIcon, 
  TimeOffIcon, 
  JobIcon, 
  SafetyIcon, 
  SupportIcon, 
  TransitionIcon 
} from './CategoryIcons';

const categories = [
  {
    id: 'getting-paid',
    title: 'Getting Paid',
    description: 'Learn how and when you get paid, timekeeping, and direct deposit.',
    icon: <PayIcon />,
    keywords: ['pay', 'salary', 'wage', 'paycheck', 'direct deposit', 'timekeeping', 'money', 'compensation']
  },
  {
    id: 'time-off',
    title: 'Taking Time Off',
    description: 'Find out how to request time off and understand your leave options.',
    icon: <TimeOffIcon />,
    keywords: ['vacation', 'sick', 'leave', 'holiday', 'pto', 'time off', 'absence', 'break']
  },
  {
    id: 'your-job',
    title: 'Doing Your Job',
    description: 'Explore policies that shape your everyday work experience.',
    icon: <JobIcon />,
    keywords: ['work', 'job', 'duties', 'responsibilities', 'performance', 'conduct', 'remote', 'schedule']
  },
  {
    id: 'staying-safe',
    title: 'Staying Safe',
    description: 'Review safety practices, injury reporting, and health guidelines.',
    icon: <SafetyIcon />,
    keywords: ['safety', 'health', 'injury', 'accident', 'protection', 'guidelines', 'security', 'wellness']
  },
  {
    id: 'getting-support',
    title: 'Getting Support',
    description: 'Learn who to contact and how to request accommodations.',
    icon: <SupportIcon />,
    keywords: ['help', 'support', 'contact', 'hr', 'accommodation', 'assistance', 'benefits', 'questions']
  },
  {
    id: 'leaving-changing',
    title: 'Leaving or Changing Roles',
    description: 'Understand what happens with resignations, transfers, and role changes.',
    icon: <TransitionIcon />,
    keywords: ['resign', 'quit', 'transfer', 'promotion', 'exit', 'termination', 'change', 'role']
  }
];

export function HandbookContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('California');
  const [currentView, setCurrentView] = useState<string | null>(null);

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    
    const query = searchQuery.toLowerCase();
    return categories.filter(category => 
      category.title.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const handleCategoryClick = (categoryId: string) => {
    setCurrentView(categoryId);
  };

  const handleBackToCategories = () => {
    setCurrentView(null);
  };

  // Render category view if one is selected
  if (currentView) {
    const categoryViewProps = {
      selectedState,
      onBack: handleBackToCategories
    };

    switch (currentView) {
      case 'getting-paid':
        return <GettingPaidView {...categoryViewProps} />;
      case 'time-off':
        return <TakingTimeOffView {...categoryViewProps} />;
      case 'your-job':
        return <DoingYourJobView {...categoryViewProps} />;
      case 'staying-safe':
        return <StayingSafeView {...categoryViewProps} />;
      case 'getting-support':
        return <GettingSupportView {...categoryViewProps} />;
      case 'leaving-changing':
        return <LeavingChangingView {...categoryViewProps} />;
      default:
        return null;
    }
  }

  // Render category overview
  return (
    <div style={{ padding: '0', maxWidth: '800px' }}>
      {/* Work State Selector */}
      <WorkStateSelector
        selectedState={selectedState}
        onStateChange={setSelectedState}
      />

      {/* Instructions */}
      <p 
        style={{ 
          color: '#1C3354',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '1.5',
          margin: '0 0 24px 0'
        }}
      >
        Select a category to explore policies and procedures. Policies will display relevant information for {selectedState}.
      </p>

      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search categories..."
      />

      {/* No Results Message */}
      {filteredCategories.length === 0 && searchQuery && (
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center',
            boxShadow: '0 1px 6px rgba(28, 51, 84, 0.08)',
            border: '1px solid rgba(167, 198, 219, 0.2)',
            marginBottom: '24px'
          }}
        >
          <p 
            style={{
              color: '#477E9F',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              margin: '0'
            }}
          >
            No categories found for "{searchQuery}". Try a different search term.
          </p>
        </div>
      )}

      {/* Categories Grid */}
      {filteredCategories.length > 0 && (
        <div 
          style={{ 
            display: 'grid',
            gap: '16px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}
        >
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              description={category.description}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}