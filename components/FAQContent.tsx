export function FAQContent() {
  const faqs = [
    {
      question: "How do I request time off?",
      answer: "Submit a time-off request through the HR portal at least 2 weeks in advance for vacation time, or as soon as possible for sick leave."
    },
    {
      question: "Who do I contact for payroll questions?",
      answer: "Contact the Payroll team at payroll@nexgov.com or call extension 1234 for all payroll-related inquiries."
    },
    {
      question: "How do I update my emergency contact information?",
      answer: "Log into the employee portal and navigate to the 'Personal Information' section to update your emergency contacts."
    },
    {
      question: "What should I do if I can't access the employee portal?",
      answer: "Contact IT Support at itsupport@nexgov.com or call extension 5678 for technical assistance."
    }
  ];

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
          FAQs & Support
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
          Get quick answers to common questions and find support resources.
        </p>
      </div>

      {/* Contact Information */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px',
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
            margin: '0 0 16px 0'
          }}
        >
          Need Help? Contact Us
        </h4>
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div>
            <p style={{ color: '#1C3354', fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0' }}>
              HR Department
            </p>
            <p style={{ color: '#477E9F', fontSize: '14px', margin: '0' }}>
              hr@nexgov.com<br />
              Ext. 1111
            </p>
          </div>
          <div>
            <p style={{ color: '#1C3354', fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0' }}>
              IT Support
            </p>
            <p style={{ color: '#477E9F', fontSize: '14px', margin: '0' }}>
              itsupport@nexgov.com<br />
              Ext. 5678
            </p>
          </div>
          <div>
            <p style={{ color: '#1C3354', fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0' }}>
              Payroll
            </p>
            <p style={{ color: '#477E9F', fontSize: '14px', margin: '0' }}>
              payroll@nexgov.com<br />
              Ext. 1234
            </p>
          </div>
          <div>
            <p style={{ color: '#1C3354', fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0' }}>
              Emergency
            </p>
            <p style={{ color: '#477E9F', fontSize: '14px', margin: '0' }}>
              security@nexgov.com<br />
              Ext. 9999
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ marginBottom: '32px' }}>
        <h4 
          style={{ 
            color: '#0C1C33',
            fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
            fontSize: '24px',
            fontWeight: '300',
            lineHeight: '1.5',
            margin: '0 0 24px 0'
          }}
        >
          Frequently Asked Questions
        </h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 1px 6px rgba(28, 51, 84, 0.08)',
                border: '1px solid rgba(167, 198, 219, 0.2)'
              }}
            >
              <h5 
                style={{ 
                  color: '#0C1C33',
                  fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
                  fontSize: '18px',
                  fontWeight: '300',
                  lineHeight: '1.5',
                  margin: '0 0 12px 0'
                }}
              >
                {faq.question}
              </h5>
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
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Request */}
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
          Submit a Support Request
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
          Can't find what you're looking for? Submit a support request and our team will get back to you within 24 hours.
        </p>
        <button
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
            minHeight: '44px'
          }}
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}