import Link from 'next/link';
import { FaEnvelope, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '/about#policies-guidelines', label: 'Policies and Guidelines' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Description - Left Side */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-green-600 mb-4">CHADET ETHIOPIA</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              CHADET Ethiopia is a dedicated non-governmental organization committed to empowering children and communities across Ethiopia. Since our establishment, we have been working tirelessly to create sustainable change through education, healthcare, and community development initiatives. Our mission is to build a brighter future for vulnerable children and their families, fostering hope and opportunity in every community we serve.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/cha_org" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://instagram.com/cha_org" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Navigation & Contact - Middle */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Navigation Links */}
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-4">Quick Links</h4>
                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className="block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-4">Contact Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="text-green-600 mr-3 flex-shrink-0" />
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaPhone className="text-green-600 mr-3 flex-shrink-0" />
                    <span>+251 911 123 456</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaEnvelope className="text-green-600 mr-3 flex-shrink-0" />
                    <a href="mailto:info@chadet.org" className="hover:text-green-600 transition-colors">
                      info@chadet.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map - Right Side */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-green-600 mb-4">Our Location</h4>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-64 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246.28495571415607!2d38.741103!3d9.012636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b856de2eceaf5%3A0x618a01b22c98f20c!2sBGI%20Ethiopia%20Plc!5e0!3m2!1sen!2set!4v1752343706446!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CHADET Ethiopia Headquarters"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <a 
                href="https://maps.app.goo.gl/Cq8NKVBr2f4tfmkX8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-600 transition-colors"
              >
                View on Google Maps →
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CHADET Ethiopia. All rights reserved. | Empowering children, transforming communities.
          </p>
        </div>
      </div>
    </footer>
  );
} 