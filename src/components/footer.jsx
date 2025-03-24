import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import Logo from "../assests/ASR CINEMAS 3.png"; // Ensure correct path

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Address */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={Logo} alt="ASR Cinemas" width={180} height={60} />
          <p className="text-sm text-gray-400 mt-3 text-center md:text-left">
            6th Floor, Ambition Business Park, More, Bailey Rd, <br />
            near Saguna, Patna, Bihar 801503
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-yellow-400">Now Showing</a></li>
            <li><a href="#" className="hover:text-yellow-400">Upcoming Movies</a></li>
            <li><a href="#" className="hover:text-yellow-400">Cinemas</a></li>
            <li><a href="#" className="hover:text-yellow-400">Offers</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Social & App Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition">
              <FaInstagram size={20} />
            </a>
          </div>
          
          <h3 className="text-lg font-semibold mt-6">Download Our App</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
              <SiGoogleplay size={24} />
              <span>Google Play</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
              <SiAppstore size={24} />
              <span>App Store</span>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} ASR Cinemas. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
