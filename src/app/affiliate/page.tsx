import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckIcon, CurrencyDollarIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Affiliate Program | Infused Canna Drops',
  description: 'Join our affiliate program and earn commissions by promoting Infused Canna Drops.',
};

export default function AffiliatePage() {
  return (
    <div className="bg-white">
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Affiliate <span className="text-brand">Program</span>
          </h1>
          <p className="text-neutral-700">
            Join our community of influencers, content creators, and cannabis enthusiasts. Earn generous commissions by promoting Infused Canna Drops to your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Why Become an <span className="text-brand">Affiliate</span>
            </h2>
            <p className="text-neutral-700 mb-6">
              Our affiliate program offers competitive commissions, dedicated support, and marketing resources to help you maximize your earnings while promoting products you believe in.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Earn 20% commission on all sales you refer',
                'Receive monthly payments via PayPal or direct deposit',
                'Access exclusive promotions and discount codes',
                'Get personalized affiliate dashboard and tracking',
                'Utilize professional marketing materials and assets',
                'Benefit from 90-day cookie duration',
              ].map((benefit, index) => (
                <li key={index} className="flex items-center text-neutral-700">
                  <CheckIcon className="h-5 w-5 text-brand mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="#signup-form" className="btn btn-primary">
              Apply Now
            </Link>
          </div>

          <div className="bg-neutral-50 p-8 rounded-xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <CurrencyDollarIcon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">20% Commission</h3>
                <p className="text-sm text-neutral-600">
                  Earn industry-leading 20% commission on every sale you refer.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Dedicated Support</h3>
                <p className="text-sm text-neutral-600">
                  Get personalized assistance from our affiliate management team.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">90-Day Cookies</h3>
                <p className="text-sm text-neutral-600">
                  Extended tracking period to maximize your earning potential.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Custom Codes</h3>
                <p className="text-sm text-neutral-600">
                  Create unique discount codes for your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
            How It <span className="text-brand">Works</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Apply</h3>
              <p className="text-sm text-neutral-600">
                Fill out our affiliate application form with details about your platform and audience.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Get Approved</h3>
              <p className="text-sm text-neutral-600">
                Our team will review your application and respond within 48 hours.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">
                3
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Share Links</h3>
              <p className="text-sm text-neutral-600">
                Access your unique affiliate links and promotional materials.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold">
                4
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Earn</h3>
              <p className="text-sm text-neutral-600">
                Get paid monthly for all qualifying purchases made through your links.
              </p>
            </div>
          </div>
        </div>

        <div id="signup-form" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
            Become an <span className="text-brand">Affiliate</span>
          </h2>
          
          <form className="bg-white rounded-xl shadow-soft p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-1">
                  Website/Blog URL *
                </label>
                <input
                  type="url"
                  id="website"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="social" className="block text-sm font-medium text-neutral-700 mb-1">
                  Social Media Handles
                </label>
                <input
                  type="text"
                  id="social"
                  className="form-input"
                  placeholder="Instagram: @username, TikTok: @username"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="platform-type" className="block text-sm font-medium text-neutral-700 mb-1">
                  Platform Type *
                </label>
                <select id="platform-type" className="form-input" required>
                  <option value="">Select your primary platform</option>
                  <option value="blog">Blog</option>
                  <option value="youtube">YouTube</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="twitter">Twitter</option>
                  <option value="facebook">Facebook</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="audience" className="block text-sm font-medium text-neutral-700 mb-1">
                  Audience Size *
                </label>
                <select id="audience" className="form-input" required>
                  <option value="">Select your audience size</option>
                  <option value="1000-5000">1,000 - 5,000</option>
                  <option value="5001-10000">5,001 - 10,000</option>
                  <option value="10001-50000">10,001 - 50,000</option>
                  <option value="50001-100000">50,001 - 100,000</option>
                  <option value="100001+">100,001+</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Why do you want to join our affiliate program? *
              </label>
              <textarea
                id="message"
                rows={4}
                className="form-input"
                placeholder="Tell us about your audience and how you plan to promote Infused Canna Drops..."
                required
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 text-brand focus:ring-brand border-neutral-300 rounded"
                  required
                />
                <span className="ml-2 text-sm text-neutral-600">
                  I agree to the <Link href="/terms" className="text-brand hover:underline">Terms and Conditions</Link> and <Link href="/privacy" className="text-brand hover:underline">Privacy Policy</Link>.
                </span>
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Submit Application
            </button>
            
            <p className="text-sm text-neutral-500 text-center mt-4">
              Applications are typically reviewed within 48 hours. You'll receive an email notification once your application has been processed.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
} 