import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Face of Innovator",
  description: "How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-foi-blue transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-900 leading-[1.1] mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 font-medium mb-8">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-12">
          <article className="prose prose-slate max-w-none">
            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect information you provide directly to us when you register for events, subscribe to our newsletter, or contact us. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Name and email address</li>
              <li>Student status and institution</li>
              <li>Project ideas or interests you share</li>
              <li>Communication preferences</li>
            </ul>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Manage event registrations and communications</li>
              <li>Send build night invites and community updates</li>
              <li>Improve our events and community experience</li>
              <li>Respond to your inquiries</li>
            </ul>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">3. Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Event partners and sponsors (only with your consent for specific events)</li>
              <li>Service providers who help us operate (email, forms, analytics)</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">4. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We retain your information only as long as necessary for the purposes outlined in this policy, or as required by law. You can request deletion of your data at any time by contacting us.
            </p>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">5. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">6. Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">7. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>Email:</strong> hello@faceofinnovator.in<br />
              <strong>Address:</strong> PW IOI Pune, Viman Nagar, Pune
            </p>
          </article>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-sm text-slate-500">
          © 2026 Face of Innovator. Built by student builders.
        </div>
      </footer>
    </main>
  );
}