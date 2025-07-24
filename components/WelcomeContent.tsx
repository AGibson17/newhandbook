export function WelcomeContent() {
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
          Welcome to NexGov
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
          Your comprehensive guide to policies, procedures, and everything you need to know as a NexGov employee.
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
          Getting Started
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
          This handbook contains all the essential information you need to understand your role, responsibilities, and benefits at NexGov.
        </p>
        <ul style={{ margin: '0', padding: '0 0 0 20px', color: '#1C3354' }}>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}>Review the "Using the Handbook" section to understand how to navigate</li>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}>Explore the "Employee Handbook" for detailed policies</li>
          <li style={{ marginBottom: '8px', fontSize: '16px', lineHeight: '1.5' }}>Check "FAQs/Support" for quick answers and contact information</li>
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
          Important Reminders
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
          Please take time to familiarize yourself with our policies and procedures. If you have any questions, don't hesitate to reach out to HR or your supervisor for clarification.
        </p>
      </div>
    </div>
  );
}