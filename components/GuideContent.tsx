export function GuideContent() {
  return (
    <div style={{ padding: '0', maxWidth: '800px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h3 
          style={{ 
            color: '#0C1C33',
            fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
            fontSize: '28px',
            fontWeight: '300',
            lineHeight: '1.5',
            margin: '0 0 16px 0'
          }}
        >
          Using the Handbook
        </h3>
        <p 
          style={{ 
            color: '#1C3354',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.6',
            margin: '0 0 24px 0'
          }}
        >
          Learn how to navigate and make the most of your employee handbook.
        </p>
      </div>

      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 1px 6px rgba(28, 51, 84, 0.08)',
          border: '1px solid rgba(167, 198, 219, 0.2)'
        }}
      >
        <h4 
          style={{ 
            color: '#0C1C33',
            fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
            fontSize: '20px',
            fontWeight: '300',
            lineHeight: '1.5',
            margin: '0 0 12px 0'
          }}
        >
          Navigation
        </h4>
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
          The handbook is organized into expandable sections. Click on any section header to open it and view the content.
        </p>
        <ul style={{ margin: '0', padding: '0 0 0 20px', color: '#1C3354' }}>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}>Only one section can be open at a time</li>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}>Use the search feature in the Employee Handbook to find specific topics</li>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}>Scroll within each section to see all available content</li>
        </ul>
      </div>

      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 1px 6px rgba(28, 51, 84, 0.08)',
          border: '1px solid rgba(167, 198, 219, 0.2)'
        }}
      >
        <h4 
          style={{ 
            color: '#0C1C33',
            fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
            fontSize: '20px',
            fontWeight: '300',
            lineHeight: '1.5',
            margin: '0 0 12px 0'
          }}
        >
          Finding Information
        </h4>
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
          The Employee Handbook section contains six main categories organized by topic:
        </p>
        <ul style={{ margin: '0', padding: '0 0 0 20px', color: '#1C3354' }}>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}><strong>Getting Paid</strong> - Payroll, benefits, and compensation</li>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}><strong>Taking Time Off</strong> - Leave policies and procedures</li>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}><strong>Doing Your Job</strong> - Work expectations and conduct</li>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}><strong>Staying Safe</strong> - Safety and health guidelines</li>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}><strong>Getting Support</strong> - HR resources and assistance</li>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}><strong>Leaving or Changing Roles</strong> - Exit and transition procedures</li>
        </ul>
      </div>

      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 1px 6px rgba(28, 51, 84, 0.08)',
          border: '1px solid rgba(167, 198, 219, 0.2)'
        }}
      >
        <h4 
          style={{ 
            color: '#0C1C33',
            fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
            fontSize: '20px',
            fontWeight: '300',
            lineHeight: '1.5',
            margin: '0 0 12px 0'
          }}
        >
          Updates and Changes
        </h4>
        <p 
          style={{ 
            color: '#1C3354',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '1.5',
            margin: '0'
          }}
        >
          This handbook is updated regularly to reflect current policies and procedures. Check back periodically for the most current information, or contact HR if you have questions about recent changes.
        </p>
      </div>
    </div>
  );
}