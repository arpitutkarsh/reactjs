import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white border-t-2 border-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Copyright */}
          <div>
            <div className="mb-4 flex items-center">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-400">
              &copy; Copyright 2025. All Rights reserved by Arpit.
            </p>
          </div>

          {/* First Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-300 tracking-wide">Company</h3>
            <ul>
              {["Add Post", "Pricing", "Affiliate Program", "Press Kit"].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <Link to="/add-post" className="text-base text-gray-100 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-300 tracking-wide">Support</h3>
            <ul>
              {["Support", "Account", "Help", "Contact Us", "Customer Support"].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <Link to="/" className="text-base text-gray-100 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-300 tracking-wide">Legal</h3>
            <ul>
              {["Legals", "Terms & Conditions", "Privacy Policy", "Licensing", "Customer Support"].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <Link to="/" className="text-base text-gray-100 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
