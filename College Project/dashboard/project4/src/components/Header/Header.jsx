/* Stroke line cap error fix */
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <header className="text-gray-400 bg-gray-800 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

            {/* SVG Removed */}

            <span className="ml-3 text-xl cursor-pointer"><a href="https://www.linkedin.com/in/alok-tiwari-518478253/">Alok Tiwari</a>
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Home</a>
            <a className="mr-5 hover:text-white">About</a>
            <a className="mr-5 hover:text-white">Contact Us</a>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/alok-tiwari-518478253/">Linked In</a>
            
            <svg
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
