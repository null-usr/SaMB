import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-dancing font-bold text-bakery-900 mb-4">
              Sweet As Me Bakery
            </h3>
            <p className="text-bakery-700 mb-4">
              Bringing the joy of fresh, homemade baked goods to your table.
            </p>
            <p className="text-bakery-700 text-sm">
              &copy; {currentYear} Sweet As Me Bakery. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-bakery-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-bakery-700 hover:text-bakery-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-bakery-700 hover:text-bakery-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-bakery-700 hover:text-bakery-500 transition-colors"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#order"
                  className="text-bakery-700 hover:text-bakery-500 transition-colors"
                >
                  Place an Order
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-bakery-700 hover:text-bakery-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full max-w-md box-border">
            <h3 className="text-lg font-semibold text-bakery-900 mb-4">
              Newsletter
            </h3>
            <p className="text-bakery-700 mb-4">
              Subscribe to get updates on new seasonal specials and promotions.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email"
                className="w-0 flex-grow py-2 px-3 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-bakery-400 border border-cream-300"
              />
              <button className="flex-shrink-0 bg-bakery-600 hover:bg-bakery-700 text-white py-2 px-4 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
