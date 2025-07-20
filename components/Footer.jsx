import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-gray-300 py-10 mt-20 shadow-inner border-t border-gray-700">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-6 text-center">

        <p className="text-lg font-medium tracking-wide">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Pranav Abhimanyu</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-xl text-blue-400" />
            <a
              href="mailto:dpranav504@gmail.com"
              className="text-blue-400 hover:text-white transition duration-200"
            >
              dpranav504@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlinePhone className="text-xl text-green-400" />
            <a
              href="tel:+918092599674"
              className="text-green-400 hover:text-white transition duration-200"
            >
              +91 8092599674
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-400 italic">
          Let's build something amazing together.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
