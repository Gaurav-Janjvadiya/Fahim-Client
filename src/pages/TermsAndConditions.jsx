import { useNavigate } from 'react-router-dom';
import { Button } from '../components';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleBackToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
      }}
    >
      <Button onClick={handleBackToSignUp} style={'mb-2'}>
        Go Back to Sign Up
      </Button>
      <h1>Terms and Conditions</h1>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Fahim! We are an AI-powered course recommendation platform
          designed to assist university students in navigating their academic
          journey. By using our services, you agree to comply with and be bound
          by these terms and conditions.
        </p>
      </section>

      <section>
        <h2>2. User Accounts</h2>
        <h3>Eligibility</h3>
        <p>
          Only students are eligible to register and create an account on Fahim.
        </p>
        <h3>Account Security</h3>
        <p>
          You are responsible for maintaining the confidentiality of your
          account information, including your password. Notify us immediately if
          you suspect any unauthorized access.
        </p>
      </section>

      <section>
        <h2>3. Privacy and Data Usage</h2>
        <h3>Data Collection</h3>
        <p>
          We collect personal information such as your academic profile and
          course preferences to enhance your experience on Fahim.
        </p>
        <h3>Data Usage</h3>
        <p>
          Your data is used strictly for providing personalized services and
          improving your user experience.
        </p>
        <h3>Data Security</h3>
        <p>
          We implement robust security measures to protect your personal
          information from unauthorized access, use, or disclosure.
        </p>
      </section>

      <section>
        <h2>4. Services Provided</h2>
        <ul>
          <li>
            Personalized course recommendations based on your academic profile
            and preferences.
          </li>
          <li>Academic tracking to provide insights into your progress.</li>
          <li>
            Professor suggestions based on user feedback and course
            prerequisites.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. User Conduct and Accountability</h2>
        <h3>Respectful Communication</h3>
        <p>
          Users must maintain respectful communication when posting comments or
          feedback.
        </p>
        <h3>Prohibited Behavior</h3>
        <p>
          Rude, offensive, or inappropriate comments are strictly prohibited.
          Violations may result in warnings, account suspension, or banning.
        </p>
        <h3>Reporting Violations</h3>
        <p>
          Violations can be reported through our support channels for review and
          necessary action.
        </p>
      </section>

      <section>
        <h2>6. Handling Negative Reviews</h2>
        <p>
          Both positive and negative reviews are allowed as long as they are
          respectful and objective. Offensive comments will be removed, and
          necessary actions will be taken against violators.
        </p>
      </section>

      <section>
        <h2>7. Intellectual Property</h2>
        <p>
          All content on Fahim, including logos, graphics, and software, is the
          property of Fahim or its licensors. Unauthorized copying,
          distribution, or derivative works are prohibited.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          Fahim provides recommendations based on algorithms and user input. We
          do not guarantee the accuracy or suitability of these recommendations
          and are not liable for any damages arising from the use of our
          services.
        </p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <h3>Termination by You</h3>
        <p>You may terminate your account at any time by contacting us.</p>
        <h3>Termination by Us</h3>
        <p>
          We reserve the right to suspend or terminate your account for
          violations of these terms.
        </p>
      </section>

      <section>
        <h2>10. Changes to Terms</h2>
        <p>
          Fahim may update these terms periodically. Continued use of our
          services constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2>11. Contact Information</h2>
        <p>
          For any questions or feedback regarding these terms, please contact us
          at:
          <a href='mailto:support@fahim.com'>support@fahim.com</a>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
