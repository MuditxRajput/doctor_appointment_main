
const EmailTemplate = ({ firstName, date ,doctorName}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
    <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '15px' }}>Dear {firstName}!</h1>
    <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>We are pleased to confirm your appointment scheduled for:</p>
    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <p style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Appointment Details:</p>
      <p style={{ color: '#666', fontSize: '16px', marginBottom: '5px' }}>Date: {date}</p>
      <p style={{ color: '#666', fontSize: '16px', marginBottom: '5px' }}>Doctor: {doctorName}</p>
    </div>
    <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>If you have any questions or need to reschedule, please contact us at 999999999999.</p>
    <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>We look forward to seeing you!</p>

  </div>
);

export default EmailTemplate;
