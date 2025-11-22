import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white min-h-screen font-sans text-slate-800 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link to="/" className="inline-flex items-center text-slate-500 hover:text-primary mb-8 text-sm font-medium">
                <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-primary mb-2">{title}</h1>
            <p className="text-slate-500 mb-12 text-sm">Last Updated: October 15, 2023</p>
            
            <div className="prose prose-slate max-w-none">
                {children}
            </div>
        </div>
    </div>
);

export const Privacy: React.FC = () => (
    <LegalLayout title="Privacy Policy">
        <h3>1. Introduction</h3>
        <p>Midocean Technologies ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
        
        <h3>2. Data We Collect</h3>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
        <ul>
            <li><strong>Identity Data</strong>: includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong>: includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong>: includes internet protocol (IP) address, your login data, browser type and version.</li>
        </ul>

        <h3>3. How We Use Your Data</h3>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
        </ul>

        <h3>4. Contact Us</h3>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: business@midocean.tech</p>
    </LegalLayout>
);

export const Terms: React.FC = () => (
    <LegalLayout title="Terms of Service">
        <h3>1. Agreement to Terms</h3>
        <p>By accessing our website or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
        
        <h3>2. Intellectual Property Rights</h3>
        <p>Unless otherwise indicated, the Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Midocean Technologies.</p>
        
        <h3>3. Services</h3>
        <p>Midocean Technologies provides ERP implementation, software development, and consulting services. Specific terms regarding deliverables, timelines, and payments will be outlined in individual Master Services Agreements (MSA) or Statements of Work (SOW).</p>
        
        <h3>4. Limitation of Liability</h3>
        <p>In no event will Midocean Technologies, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website or any services.</p>
    </LegalLayout>
);