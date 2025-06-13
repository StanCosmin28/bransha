export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t border-gray-300 text-black">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 ">
        <div className="h-auto w-full justify-between items-center">
          {/* Logo and Contact Button */}
          <div className="flex items-center justify-between w-full lg:w-auto mb-4 lg:mb-0">
            <div className="flex items-center space-x-2">
              <span className="border-l-4 border-black pl-2 font-bold text-xl">
                BRANSHA
              </span>
              {/* <span className="text-xl font-semibold">
                BRANSHA SPATII INTELIGENTE
              </span> */}
            </div>
            <button className="ml-4 lg:ml-0 px-6 py-2 bg-transparent border border-black rounded-full text-black hover:bg-gray-100 transition-colors">
              Contact us
            </button>
          </div>
        </div>

        <div className="h-auto w-full justify-between items-center ">
          {/* Contact Information */}
          <div className="text-left  mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center  gap-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="text-red-500">📍</span>
                <span>Romania, Iași Aleea Rozelor 6A Demisol</span>
              </p>
              <p className="space-x-2">
                <span className="text-blue-500">📞</span>
                <span>+4023 225 0885</span>
              </p>
              <p className="space-x-2">
                <span className="text-green-500">📧</span>
                <span>info@bransha.ro</span>
              </p>
            </div>
            {/* Slogan */}
            <div className="flex text-center items-center justify-center">
              <p className="text-lg font-semibold">Technologically, we care!</p>
            </div>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="text-center w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex justify-start">
            <p className="text-sm">
              © 2025 BRANSHA. Toate drepturile rezervate.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-black hover:underline">
              Termeni și condiții.
            </a>
            <a href="#" className="text-sm text-black hover:underline">
              Politica de confidențialitate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
