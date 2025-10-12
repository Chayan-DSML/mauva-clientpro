
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import logo from '@/assets/mauva-logo.png';

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="bg-white">
       <div className="sticky top-0 z-10 bg-white px-4 py-4 border-b border-gray-200 flex items-center gap-3 shadow-sm">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">About Us</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-block border border-pink-300 rounded-lg p-2 mb-4">
            <div className="bg-gray-100 px-4 py-2 rounded">
              <img src={logo} alt="MAUVA Logo" className="w-32 h-32" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            About <span className="text-pink-600">MAUVA</span>
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            DRESS. EXPRESS. IMPRESS.
          </p>
        </div>

        <hr className="my-12 border-gray-200" />

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="text-gray-600 text-lg space-y-6">
            <p>
              We are wholesalers and manufacturers of kurtis, readymades and unstitched dress materials. Our objective is to provide consumers with the best quality products and most trending designs at manufacturing rates.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
          <p className="text-lg text-gray-800">
            <span className="font-bold text-pink-600">Core Value:</span> Quality and customer service is our top priority—more important than selling a product.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
