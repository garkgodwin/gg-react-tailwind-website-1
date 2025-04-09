
// PrivacyPolicy.jsx
import React from 'react';
import Page from '../../container/Page'

const PrivacyPolicy = () => (
  <Page>
  <div className="max-w-screen-xl mx-auto px-6 py-12 text-text-body">
      <h1 className="text-4xl font-bold text-text-heading mb-8">Privacy Policy</h1>

      <p className="mb-6">Your privacy is important to us at <span className="text-brand font-semibold">Gark Edge</span>. This policy explains how we collect, use, and protect your personal information.</p>
  import Page from './../../container/Page';

      <h2 className="text-2xl font-semibold text-text-heading mb-4">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Personal details provided voluntarily when submitting inquiries or requests.</li>
        <li>Non-personal data collected automatically through cookies and analytics.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-text-heading mb-4">2. How We Use Information</h2>
      <ul className="list-disc list-inside mb-6">
        <li>To respond to inquiries and provide requested services.</li>
        <li>To improve our website and personalize your experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-text-heading mb-4">3. Information Sharing</h2>
      <p className="mb-6">We do not sell, trade, or rent your personal data to third parties. Information may be shared with trusted service providers under confidentiality agreements.</p>

      <h2 className="text-2xl font-semibold text-text-heading mb-4">4. Security</h2>
      <p className="mb-6">We employ security measures to protect your data but cannot guarantee absolute security due to the nature of internet transmission.</p>

      <h2 className="text-2xl font-semibold text-text-heading mb-4">5. Cookies</h2>
      <p className="mb-6">Our website uses cookies to enhance user experience. Users may disable cookies through their browser settings, although some website features may be limited.</p>

      <h2 className="text-2xl font-semibold text-text-heading mb-4">6. Third-Party Links</h2>
      <p className="mb-6">Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>

      <h2 className="text-2xl font-semibold text-text-heading mb-4">7. Changes to Privacy Policy</h2>
      <p className="mb-6">Gark Edge may update this policy periodically. Users are encouraged to review this policy regularly.</p>

      <h2 className="text-2xl font-semibold text-text-heading mb-4">8. Contact Information</h2>
      <p>For questions or concerns, contact us at <a href="mailto:info@garkedge.com" className="text-brand">info@garkedge.com</a>.</p>
    </div>
  </Page>
);

export default PrivacyPolicy;
