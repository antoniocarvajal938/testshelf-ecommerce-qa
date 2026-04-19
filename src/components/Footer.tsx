export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black to-gray-600 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* BRAND */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">TestShelf</h3>
          <p className="text-sm">
            Discover your next favorite book. From fantasy to thrillers.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-white font-medium mb-3">Navigation</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <a
            href="mailto:support@bookstore.com"
            className="block text-sm hover:text-orange-500 transition"
          >
            📩 support@bookstore.com
          </a>

          <a
            href="https://www.google.com/maps?q=Málaga,Spain"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm hover:text-orange-500 transition"
          >
            📍 Málaga, Spain
          </a>
          <a
            href="tel:+34600000000"
            className="block text-sm hover:text-orange-500 transition"
          >
            ☎️ +34 600 000 000
          </a>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-800 py-4">
        © 2026 TestShelf. All rights reserved.
      </div>
    </footer>
  );
}
