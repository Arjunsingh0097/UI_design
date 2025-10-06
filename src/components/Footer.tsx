export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info & News */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">
              Native Teams
            </div>
            
            {/* News Section */}
            <div>
              <h3 className="text-sm font-medium text-white mb-4">
                GET THE LATEST NEWS:
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="border border-white text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-gray-900 transition-colors">
                  Blog
                </button>
                <button className="border border-white text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-gray-900 transition-colors">
                  Country Guides
                </button>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="text-white font-bold text-sm">f</span>
              </a>
              
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="text-white font-bold text-xs">in</span>
              </a>
              
              {/* X (Twitter) */}
              <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="text-white font-bold text-sm">X</span>
              </a>
            </div>
          </div>
          
          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase">
              SOLUTIONS
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Employment
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase">
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Helpsite
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Employment Verification
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Book a Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Glossary
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Mobile App Download */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase">
              DOWNLOAD OUR MOBILE APP
            </h3>
            
            {/* App Store Badges */}
            <div className="space-y-4">
              {/* Google Play Badge */}
              <div className="flex flex-col items-start">
                <a href="#" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play"
                    className="h-12 w-auto"
                  />
                </a>
                {/* QR Code Placeholder */}
                <div className="mt-2 bg-white p-2 rounded-lg">
                  <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-600">QR Code</span>
                  </div>
                </div>
              </div>
              
              {/* App Store Badge */}
              <div className="flex flex-col items-start">
                <a href="#" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store"
                    className="h-12 w-auto"
                  />
                </a>
                {/* QR Code Placeholder */}
                <div className="mt-2 bg-white p-2 rounded-lg">
                  <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-600">QR Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center text-sm text-gray-400">
            © 2024 Native Teams. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
