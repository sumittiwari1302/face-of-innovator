import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Face of Innovator",
  description: "Terms and conditions for using Face of Innovator services and attending events.",
};

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-foi-blue transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="font-heading font-black text-4xl md:text-6xl text-slate-900 leading-[1.1] mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-600 font-medium mb-8">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-12">
          <article className="prose prose-slate max-w-none">
            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing or using the Face of Innovator website, registering for events, or participating in our community, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
            </p>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">2. Event Participation</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Face of Innovator events are free for students. By registering, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Attend the event you registered for or cancel in advance</li>
              <li>Follow the Code of Conduct at all times</li>
              <li>Respect the venue, equipment, and other participants</li>
              <li>Bring your own laptop and necessary equipment unless stated otherwise</li>
            </ul>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">3. Code of Conduct</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We are committed to providing a harassment-free experience for everyone. Participants must:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Be respectful and inclusive</li>
              <li>No harassment, discrimination, or offensive behavior</li>
              <li>No illegal activities</li>
              <li>Respect intellectual property rights</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              Violations may result in removal from events and future bans.
            </p>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You retain ownership of projects you build at our events. By participating, you grant Face of Innovator a non-exclusive license to showcase your project on our website, social media, and event materials for promotional purposes.
            </p>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Face of Innovator is a student-run community. We provide events and resources as is without warranties of any kind. We are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed mb-4">
              <li>Loss of data, equipment, or personal belongings</li>
              <li>Injuries or accidents at events</li>
              <li>Third-party actions or content</li>
              <li>Service interruptions or cancellations</li>
            </ul>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">6. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may update these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms. We will notify registered users of significant changes via email.
            </p>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">7. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These terms are governed by the laws of India. Any disputes will be resolved in the courts of Pune, Maharashtra.
            </p>

            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">8. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Questions about these Terms? Contact us at:
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