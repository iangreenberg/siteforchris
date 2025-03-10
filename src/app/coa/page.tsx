import { Metadata } from 'next';
import Link from 'next/link';
import { DocumentTextIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Certificates of Analysis | Infused Canna Drops',
  description: 'View and download lab testing results for all Infused Canna Drops products.',
};

// Sample COA data
const coas = [
  {
    id: 'THC-2023-Q4-001',
    product: 'THC Canna Drops',
    batch: 'TCH2023Q4001',
    date: '2023-10-15',
    lab: 'CannaLabs',
    type: 'thc',
    file: '/coas/thc-drops-2023-q4-001.pdf',
  },
  {
    id: 'THC-2023-Q4-002',
    product: 'THC Canna Drops',
    batch: 'TCH2023Q4002',
    date: '2023-11-20',
    lab: 'CannaLabs',
    type: 'thc',
    file: '/coas/thc-drops-2023-q4-002.pdf',
  },
  {
    id: 'CBD-2023-Q4-001',
    product: 'CBD Canna Drops',
    batch: 'CBD2023Q4001',
    date: '2023-10-18',
    lab: 'CannaLabs',
    type: 'cbd',
    file: '/coas/cbd-drops-2023-q4-001.pdf',
  },
  {
    id: 'CBD-2023-Q4-002',
    product: 'CBD Canna Drops',
    batch: 'CBD2023Q4002',
    date: '2023-11-22',
    lab: 'CannaLabs',
    type: 'cbd',
    file: '/coas/cbd-drops-2023-q4-002.pdf',
  },
  {
    id: 'CBG-2023-Q4-001',
    product: 'CBG Canna Drops',
    batch: 'CBG2023Q4001',
    date: '2023-10-20',
    lab: 'CannaLabs',
    type: 'cbg',
    file: '/coas/cbg-drops-2023-q4-001.pdf',
  },
  {
    id: 'CBN-2023-Q4-001',
    product: 'CBN Canna Drops',
    batch: 'CBN2023Q4001',
    date: '2023-10-25',
    lab: 'CannaLabs',
    type: 'cbn',
    file: '/coas/cbn-drops-2023-q4-001.pdf',
  },
  {
    id: 'THC-CBD-2023-Q4-001',
    product: 'THC:CBD 1:1 Canna Drops',
    batch: 'THCBD2023Q4001',
    date: '2023-11-05',
    lab: 'CannaLabs',
    type: 'thc',
    file: '/coas/thc-cbd-drops-2023-q4-001.pdf',
  },
  {
    id: 'CBD-CBG-2023-Q4-001',
    product: 'CBD:CBG 2:1 Canna Drops',
    batch: 'CBDCBG2023Q4001',
    date: '2023-11-10',
    lab: 'CannaLabs',
    type: 'cbd',
    file: '/coas/cbd-cbg-drops-2023-q4-001.pdf',
  },
];

export default function COAPage() {
  return (
    <div className="bg-white">
      <div className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Certificates of <span className="text-brand">Analysis</span>
          </h1>
          <p className="text-neutral-700">
            We believe in complete transparency. Every batch of Infused Canna Drops is tested by third-party laboratories to ensure potency, purity, and safety.
          </p>
        </div>

        <div className="mb-12">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                className="form-input pl-10 py-3"
                placeholder="Search by batch number, product name, or date..."
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-brand text-white">
              All COAs
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              THC
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              CBD
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              CBG
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-neutral-700 hover:bg-neutral-100">
              CBN
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Batch #
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Test Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Lab
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                {coas.map((coa) => (
                  <tr key={coa.id} className="hover:bg-neutral-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                      {coa.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      {coa.batch}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      {coa.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      {coa.lab}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        coa.type === 'thc' ? 'bg-purple-100 text-purple-800' :
                        coa.type === 'cbd' ? 'bg-green-100 text-green-800' :
                        coa.type === 'cbg' ? 'bg-blue-100 text-blue-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {coa.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a 
                        href={coa.file} 
                        className="text-brand hover:text-brand-dark flex items-center justify-end"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <DocumentTextIcon className="h-5 w-5 mr-1" />
                        PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-neutral-50 rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            How to Read Our COAs
          </h2>
          <p className="text-neutral-700 mb-6">
            Our certificates of analysis provide detailed information about the cannabinoid content, terpene profile, and safety testing results for each batch of Canna Drops.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <h3 className="font-bold text-neutral-900 mb-1">Cannabinoid Profile</h3>
              <p className="text-sm text-neutral-600">
                Shows the concentration of each cannabinoid (THC, CBD, CBG, CBN, etc.) in milligrams per serving and as a percentage.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <h3 className="font-bold text-neutral-900 mb-1">Terpene Profile</h3>
              <p className="text-sm text-neutral-600">
                Lists the aromatic compounds that contribute to the flavor and effects of the product.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <h3 className="font-bold text-neutral-900 mb-1">Contaminant Testing</h3>
              <p className="text-sm text-neutral-600">
                Confirms the absence of pesticides, heavy metals, residual solvents, and microbial contaminants.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <h3 className="font-bold text-neutral-900 mb-1">Batch Information</h3>
              <p className="text-sm text-neutral-600">
                Includes production date, testing date, and unique batch identifier for traceability.
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-neutral-500">
              Have questions about our testing procedures or results? <Link href="/contact" className="text-brand hover:underline">Contact us</Link> for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 