import { ArrowLeft } from 'lucide-react';

interface CategoryViewProps {
  selectedState: string;
  onBack: () => void;
}

export function GettingPaidView({ selectedState, onBack }: CategoryViewProps) {
  const policies = [
    {
      title: 'Payment of Wages',
      content: 'Your regular wages are paid bi-weekly on Fridays. All employees are paid via direct deposit to the bank account specified in your employment paperwork.',
      stateSpecific: selectedState === 'California' 
        ? 'California law requires final wages to be paid immediately upon termination if you are fired, or within 72 hours if you quit without notice.'
        : selectedState === 'New York'
        ? 'New York law requires wage payments to be made at least semi-monthly for most employees.'
        : null
    },
    {
      title: 'Your Paycheck',
      content: 'Your paycheck stub shows gross pay, deductions, and net pay. You can access electronic pay stubs through the employee portal.',
      stateSpecific: selectedState === 'Texas'
        ? 'Texas law requires that pay stubs include specific information about hours worked and pay rates.'
        : null
    },
    {
      title: 'Garnishment Deductions',
      content: 'If we receive a court order for wage garnishment, we are legally required to withhold the specified amount from your pay.',
      stateSpecific: null
    },
    {
      title: 'Timekeeping Procedures',
      content: 'All non-exempt employees must accurately record their time using the company timekeeping system. Time must be recorded in 15-minute increments.',
      stateSpecific: null
    },
    {
      title: 'Overtime',
      content: 'Non-exempt employees are paid overtime at 1.5 times their regular rate for hours worked over 40 in a workweek.',
      stateSpecific: selectedState === 'California'
        ? 'California requires overtime pay for work over 8 hours in a day and double time for work over 12 hours in a day.'
        : null
    },
    {
      title: 'Safe Harbor for Exempt Employees',
      content: 'Exempt employees receive their full salary for any week in which they perform work, regardless of the number of hours worked.',
      stateSpecific: null
    },
    {
      title: 'Travel Time for Non-Exempt Employees',
      content: 'Travel time during normal work hours is compensable. Travel outside normal work hours for business purposes may also be compensable.',
      stateSpecific: null
    },
    {
      title: 'Business Expense Reimbursement',
      content: 'Employees will be reimbursed for reasonable business expenses incurred with proper approval and documentation.',
      stateSpecific: selectedState === 'California'
        ? 'California law requires employers to reimburse employees for all necessary business expenses.'
        : null
    }
  ];

  return (
    <div style={{ padding: '0', maxWidth: '800px' }}>
      {/* Back Navigation */}
      <button
        onClick={onBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#0C1C33',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          padding: '8px 0',
          marginBottom: '24px',
          transition: 'color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#C72C34';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#0C1C33';
        }}
      >
        <ArrowLeft size={20} />
        Back to Categories
      </button>

      {/* Category Header */}
      <div style={{ marginBottom: '32px' }}>
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}
        >
          <div 
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#477E9F',
              borderRadius: '4px'
            }}
          />
          <h3 
            style={{ 
              color: '#0C1C33',
              fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
              fontSize: '28px',
              fontWeight: '300',
              lineHeight: '1.5',
              margin: '0'
            }}
          >
            Getting Paid
          </h3>
        </div>
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
          Learn how and when you get paid, what shows up on your paycheck, and how to manage things like timekeeping, direct deposit, and pay adjustments.
        </p>
      </div>

      {/* Policies */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {policies.map((policy, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(12, 28, 51, 0.12)',
              border: '2px solid #0C1C33'
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
              {policy.title}
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
              {policy.content}
            </p>

            {/* State-specific notice */}
            {policy.stateSpecific && (
              <div
                style={{
                  backgroundColor: '#C72C34',
                  color: '#FFFFFF',
                  padding: '16px',
                  borderRadius: '12px',
                  marginTop: '16px'
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '0 0 4px 0'
                  }}
                >
                  {selectedState} Law Applies
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    margin: '0'
                  }}
                >
                  {policy.stateSpecific}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TakingTimeOffView({ selectedState, onBack }: CategoryViewProps) {
  const policies = [
    {
      title: 'Paid Time Off (PTO)',
      content: 'All full-time employees accrue PTO based on years of service. PTO requests must be submitted at least two weeks in advance.',
      stateSpecific: selectedState === 'California'
        ? 'California requires PTO to be paid out upon termination as earned wages.'
        : null
    },
    {
      title: 'Holidays',
      content: 'NexGov observes the following holidays: New Year\'s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, and Christmas Day.',
      stateSpecific: null
    },
    {
      title: 'Bereavement Leave',
      content: 'Employees may take up to three days of paid bereavement leave for the death of an immediate family member.',
      stateSpecific: null
    },
    {
      title: 'Jury Duty',
      content: 'Employees are granted unpaid leave for jury duty. You must provide a copy of your jury summons to HR.',
      stateSpecific: selectedState === 'New York'
        ? 'New York law requires employers to pay the first $40 of daily wages for the first three days of jury service.'
        : null
    },
    {
      title: 'Voting Leave',
      content: 'Employees may take time off to vote if their work schedule does not provide sufficient time.',
      stateSpecific: selectedState === 'California'
        ? 'California provides up to two hours of paid time off to vote if you don\'t have sufficient time outside work hours.'
        : selectedState === 'Texas'
        ? 'Texas provides paid time off to vote, but only if you don\'t have two consecutive hours of non-work time while polls are open.'
        : null
    },
    {
      title: 'Avenu Volunteer Day',
      content: 'NexGov provides one paid volunteer day per year for employees to participate in community service activities.',
      stateSpecific: null
    },
    {
      title: 'Leaves of Absence',
      content: 'Unpaid leaves of absence may be granted for personal reasons with manager and HR approval.',
      stateSpecific: null
    },
    {
      title: 'Family and Medical Leave Act (FMLA)',
      content: 'Eligible employees may take up to 12 weeks of unpaid, job-protected leave for qualifying family and medical reasons.',
      stateSpecific: selectedState === 'California'
        ? 'California Family Rights Act (CFRA) provides additional leave protections and may run concurrently with FMLA.'
        : null
    },
    {
      title: 'Personal Leave',
      content: 'Short-term personal leave may be available for non-FMLA qualifying situations with manager approval.',
      stateSpecific: null
    },
    {
      title: 'Military Leave',
      content: 'Leave is provided for military service in accordance with federal and state laws.',
      stateSpecific: null
    },
    {
      title: 'Paid Pregnancy Disability Benefits',
      content: 'Eligible employees may receive short-term disability benefits during pregnancy-related disability periods.',
      stateSpecific: selectedState === 'California'
        ? 'California Pregnancy Disability Leave (PDL) provides up to 4 months of unpaid leave for pregnancy-related disabilities.'
        : null
    },
    {
      title: 'Lactation Accommodations',
      content: 'NexGov provides reasonable break time and a private space for nursing mothers to express breast milk.',
      stateSpecific: null
    }
  ];

  return (
    <div style={{ padding: '0', maxWidth: '800px' }}>
      {/* Back Navigation */}
      <button
        onClick={onBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#0C1C33',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          padding: '8px 0',
          marginBottom: '24px',
          transition: 'color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#C72C34';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#0C1C33';
        }}
      >
        <ArrowLeft size={20} />
        Back to Categories
      </button>

      {/* Category Header */}
      <div style={{ marginBottom: '32px' }}>
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}
        >
          <div 
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#8B5C9F',
              borderRadius: '4px'
            }}
          />
          <h3 
            style={{ 
              color: '#0C1C33',
              fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif',
              fontSize: '28px',
              fontWeight: '300',
              lineHeight: '1.5',
              margin: '0'
            }}
          >
            Taking Time Off
          </h3>
        </div>
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
          Find out how to request time off, understand your leave options, and review policies for holidays, sick days, PTO, and special types of leave.
        </p>
      </div>

      {/* Policies */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {policies.map((policy, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 2px 8px rgba(12, 28, 51, 0.12)',
              border: '2px solid #0C1C33'
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
              {policy.title}
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
              {policy.content}
            </p>

            {/* State-specific notice */}
            {policy.stateSpecific && (
              <div
                style={{
                  backgroundColor: '#C72C34',
                  color: '#FFFFFF',
                  padding: '16px',
                  borderRadius: '12px',
                  marginTop: '16px'
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500',
                    margin: '0 0 4px 0'
                  }}
                >
                  {selectedState} Law Applies
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    margin: '0'
                  }}
                >
                  {policy.stateSpecific}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// I'll continue with the other category views in the same pattern...
export function DoingYourJobView({ selectedState, onBack }: CategoryViewProps) {
  return (
    <div style={{ padding: '0', maxWidth: '800px' }}>
      <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: 'none', color: '#0C1C33', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '500', cursor: 'pointer', padding: '8px 0', marginBottom: '24px' }}>
        <ArrowLeft size={20} />
        Back to Categories
      </button>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#5C9F5C', borderRadius: '4px' }} />
          <h3 style={{ color: '#0C1C33', fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif', fontSize: '28px', fontWeight: '300', lineHeight: '1.5', margin: '0' }}>Doing Your Job</h3>
        </div>
        <p style={{ color: '#1C3354', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.5', margin: '0' }}>Explore policies that shape your everyday work experience — from job expectations and conduct to remote work, equipment, and scheduling.</p>
      </div>
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(12, 28, 51, 0.12)', border: '2px solid #0C1C33' }}>
        <p style={{ color: '#1C3354', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.5', margin: '0' }}>Policies for this category are being developed and will be available soon.</p>
      </div>
    </div>
  );
}

export function StayingSafeView({ selectedState, onBack }: CategoryViewProps) {
  return (
    <div style={{ padding: '0', maxWidth: '800px' }}>
      <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: 'none', color: '#0C1C33', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '500', cursor: 'pointer', padding: '8px 0', marginBottom: '24px' }}>
        <ArrowLeft size={20} />
        Back to Categories
      </button>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#C72C34', borderRadius: '4px' }} />
          <h3 style={{ color: '#0C1C33', fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif', fontSize: '28px', fontWeight: '300', lineHeight: '1.5', margin: '0' }}>Staying Safe</h3>
        </div>
        <p style={{ color: '#1C3354', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.5', margin: '0' }}>Review safety practices, injury reporting, drug and alcohol guidelines, and health-related policies that keep you and others protected at work.</p>
      </div>
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(12, 28, 51, 0.12)', border: '2px solid #0C1C33' }}>
        <p style={{ color: '#1C3354', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.5', margin: '0' }}>Policies for this category are being developed and will be available soon.</p>
      </div>
    </div>
  );
}

export function GettingSupportView({ selectedState, onBack }: CategoryViewProps) {
  return (
    <div style={{ padding: '0', maxWidth: '800px' }}>
      <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: 'none', color: '#0C1C33', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '500', cursor: 'pointer', padding: '8px 0', marginBottom: '24px' }}>
        <ArrowLeft size={20} />
        Back to Categories
      </button>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#FF8C42', borderRadius: '4px' }} />
          <h3 style={{ color: '#0C1C33', fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif', fontSize: '28px', fontWeight: '300', lineHeight: '1.5', margin: '0' }}>Getting Support</h3>
        </div>
        <p style={{ color: '#1C3354', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.5', margin: '0' }}>Learn who to contact, how to request accommodations, and where to go for help with HR questions, benefits, or workplace concerns.</p>
      </div>
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(12, 28, 51, 0.12)', border: '2px solid #0C1C33' }}>
        <p style={{ color: '#1C3354', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.5', margin: '0' }}>Policies for this category are being developed and will be available soon.</p>
      </div>
    </div>
  );
}

export function LeavingChangingView({ selectedState, onBack }: CategoryViewProps) {
  return (
    <div style={{ padding: '0', maxWidth: '800px' }}>
      <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', border: 'none', color: '#0C1C33', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '500', cursor: 'pointer', padding: '8px 0', marginBottom: '24px' }}>
        <ArrowLeft size={20} />
        Back to Categories
      </button>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#2C2C2C', borderRadius: '4px' }} />
          <h3 style={{ color: '#0C1C33', fontFamily: 'Runda, "Aptos Light", system-ui, sans-serif', fontSize: '28px', fontWeight: '300', lineHeight: '1.5', margin: '0' }}>Leaving or Changing Roles</h3>
        </div>
        <p style={{ color: '#1C3354', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.5', margin: '0' }}>Understand what happens if you resign, transfer, or experience a change in your role — plus key exit procedures and employment classification info.</p>
      </div>
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 8px rgba(12, 28, 51, 0.12)', border: '2px solid #0C1C33' }}>
        <p style={{ color: '#1C3354', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.5', margin: '0' }}>Policies for this category are being developed and will be available soon.</p>
      </div>
    </div>
  );
}