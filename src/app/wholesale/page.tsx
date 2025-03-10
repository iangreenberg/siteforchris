import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Wholesale | Infused Canna Drops',
  description: 'Wholesale information for dispensaries, retailers, and bulk buyers of Infused Canna Drops.',
};

export default function WholesalePage() {
  return (
    <div className="bg-white">
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Wholesale <span className="text-brand">Partners</span>
          </h1>
          <p className="text-neutral-700">
            Join our network of retailers and offer your customers the premium nano cannabinoid experience with Infused Canna Drops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Why Partner With <span className="text-brand">Infused</span>
            </h2>
            <p className="text-neutral-700 mb-6">
              Our innovative nano-emulsification technology delivers a superior cannabis experience that your customers will love. With fast onset times, precise dosing, and versatile application, Canna Drops stand out in the crowded cannabis market.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Industry-leading profit margins',
                'Attractive retail packaging and displays',
                'Marketing support and educational materials',
                'Consistent product availability',
                'Batch-specific COAs for every product',
                'Dedicated wholesale account manager',
              ].map((benefit, index) => (
                <li key={index} className="flex items-center text-neutral-700">
                  <CheckIcon className="h-5 w-5 text-brand mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="#inquiry-form" className="btn btn-primary">
              Become a Partner
            </Link>
          </div>

          <div className="bg-neutral-50 p-8 rounded-xl">
            {/* This would normally have a real image */}
            <div className="aspect-video bg-brand/10 rounded-lg flex items-center justify-center mb-6">
              <div className="text-brand font-bold">Wholesale Partner Image</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-brand mb-1">200+</div>
                <div className="text-neutral-700 text-sm">Retail Partners</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-brand mb-1">98%</div>
                <div className="text-neutral-700 text-sm">Partner Retention</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-brand mb-1">45%</div>
                <div className="text-neutral-700 text-sm">Average Margin</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-brand mb-1">24hr</div>
                <div className="text-neutral-700 text-sm">Order Processing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
            Wholesale <span className="text-brand">Pricing</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="p-6 border-b border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Starter</h3>
                <p className="text-neutral-600 text-sm mb-4">Perfect for small retailers and boutiques</p>
                <div className="text-3xl font-bold text-brand">$500</div>
                <div className="text-neutral-500 text-sm">Minimum order</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    '25 units minimum',
                    '30% discount off MSRP',
                    'Basic display materials',
                    'Net 30 payment terms',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-neutral-700 text-sm">
                      <CheckIcon className="h-4 w-4 text-brand mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-elevated overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-brand text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6 border-b border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Premium</h3>
                <p className="text-neutral-600 text-sm mb-4">Ideal for established dispensaries</p>
                <div className="text-3xl font-bold text-brand">$1,500</div>
                <div className="text-neutral-500 text-sm">Minimum order</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    '75 units minimum',
                    '40% discount off MSRP',
                    'Custom display materials',
                    'Staff training materials',
                    'Net 45 payment terms',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-neutral-700 text-sm">
                      <CheckIcon className="h-4 w-4 text-brand mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="p-6 border-b border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Enterprise</h3>
                <p className="text-neutral-600 text-sm mb-4">For multi-location retailers and chains</p>
                <div className="text-3xl font-bold text-brand">$5,000+</div>
                <div className="text-neutral-500 text-sm">Minimum order</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    '250+ units',
                    '50% discount off MSRP',
                    'Custom branded displays',
                    'Exclusive product variants',
                    'Marketing co-op funds',
                    'Net 60 payment terms',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-neutral-700 text-sm">
                      <CheckIcon className="h-4 w-4 text-brand mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="inquiry-form" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
            Wholesale <span className="text-brand">Inquiry</span>
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="business-type" className="block text-sm font-medium text-neutral-700 mb-1">
                  Business Type *
                </label>
                <select id="business-type" className="form-input" required>
                  <option value="">Select an option</option>
                  <option value="dispensary">Dispensary</option>
                  <option value="retail-store">Retail Store</option>
                  <option value="online-retailer">Online Retailer</option>
                  <option value="distributor">Distributor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="locations" className="block text-sm font-medium text-neutral-700 mb-1">
                  Number of Locations *
                </label>
                <select id="locations" className="form-input" required>
                  <option value="">Select an option</option>
                  <option value="1">1</option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11+">11+</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Additional Information
              </label>
              <textarea
                id="message"
                rows={4}
                className="form-input"
                placeholder="Tell us about your business and what products you're interested in..."
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
                  I confirm that I am a licensed business owner or authorized representative and agree to the <Link href="/terms" className="text-brand hover:underline">Terms and Conditions</Link>.
                </span>
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 