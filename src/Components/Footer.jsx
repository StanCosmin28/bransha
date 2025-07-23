export default function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-300 text-black ">
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
            <a href="tel:+40232250885">
              <button className="ml-4 lg:ml-0 px-6 py-2 bg-transparent border border-black rounded-full text-black hover:bg-gray-100 transition-colors cursor-pointer">
                Contact us
              </button>
            </a>
          </div>
        </div>

        <div className="h-auto w-full justify-between items-center ">
          {/* Contact Information */}
          <div className="text-left  mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <a
                href="https://maps.app.goo.gl/xSuS9PQWr271wbb5A"
                target="_blank"
                className="flex items-center justify-center lg:justify-start space-x-2 hover:text-gray-400"
              >
                <span className="text-red-500">📍</span>
                <span>Romania, Iași Aleea Rozelor 6A Demisol</span>
              </a>
              <a
                href="tel:+40232250885"
                className="space-x-2 hover:text-gray-400"
              >
                <span className="text-blue-500">📞</span>
                <span>+4023 225 0885</span>
              </a>

              <a
                href="mailto:info@bransha.ro"
                className="space-x-2 hover:text-gray-400"
              >
                <span className="text-green-500">📧</span>
                <span>info@bransha.ro</span>
              </a>
            </div>
            {/* Slogan */}
            <div className="flex text-center items-right justify-center flex-col">
              <p className="text-lg font-semibold">Technologically, we care!</p>
              {/* Socials */}
              <div className="flex space-x-4 mt-4 justify-end items-center">
                <a
                  href="https://www.facebook.com/bransharomania/?locale=ro_RO"
                  target="_blank"
                  className="text-black hover:text-gray-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/bransha-romania-30093725a/"
                  target="_blank"
                  className="text-black hover:text-gray-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.96 0-1.74-.78-1.74-1.74s.78-1.74 1.74-1.74 1.74.78 1.74 1.74-.78 1.74-1.74 1.74zm13.5 11.3h-3v-5.5c0-1.31-.47-2.2-1.65-2.2-.9 0-1.43.61-1.67 1.2-.09.22-.11.53-.11.84v5.66h-3v-10h3v1.33c.43-.66 1.2-1.6 2.92-1.6 2.14 0 3.74 1.4 3.74 4.41v5.86z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bransharomania/"
                  target="_blank"
                  className="text-black hover:text-gray-400"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                  >
                    <path d="M17.34,5.46a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46ZM21.94,7.88a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47,4.78,4.78,0,0,0-1.77,1.15,4.7,4.7,0,0,0-1.15,1.77,7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06a5.73,5.73,0,0,1-1.86-.34,3.27,3.27,0,0,1-1.15-.75,3,3,0,0,1-.74-1.15,5.54,5.54,0,0,1-.34-1.86c0-1-.06-1.37-.06-4s0-3,.06-4a5.54,5.54,0,0,1,.34-1.86,3,3,0,0,1,.74-1.15,3.14,3.14,0,0,1,1.15-.75,5.73,5.73,0,0,1,1.86-.34c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34,3.06,3.06,0,0,1,1.15.75,3.06,3.06,0,0,1,.75,1.15,5.61,5.61,0,0,1,.34,1.86c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87a5.13,5.13,0,1,0,5.13,5.13A5.12,5.12,0,0,0,12,6.87Zm0,8.46a3.33,3.33,0,1,1,3.33-3.33A3.33,3.33,0,0,1,12,15.33Z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@bransha.technologies"
                  target="_blank"
                  className="text-black hover:text-gray-400"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    width="800px"
                    height="800px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>tiktok</title>
                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
                  </svg>
                </a>
              </div>
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
