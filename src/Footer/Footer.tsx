const Footer = () => {
  return (
    <>
      <footer className="footer relative">
        <div className="bg-gradient-to-tr from-blue-400 to-blue-600 relative top-40 mx-40 p-32 rounded-[64px] text-center">
          <div className="text-white mb-10">
            <h3 className="text-6xl mb-8 font-semibold">
              Get a vaccine invitation
            </h3>
            <p className="text-2xl">
              Drop your email here to get vaccine invitation
            </p>
          </div>
          <div className="input max-w-[34rem] flex mx-auto">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Myemail@gmail.com"
              className="bg-white rounded-l-full text-xl text-blue-950 font-semibold outline-none py-4 px-8 h-20 w-full placeholder:text-gray-500 placeholder:font-semibold placeholder:text-xl"
            />
            <button
              type="submit"
              className="bg-gradient-to-br inline hover:from-blue-700 hover:to-blue-900 transition-colors duration-500 ease-in-out from-blue-900 to-blue-950 py-4 px-16 text-white h-20 rounded-r-full"
            >
              Submit
            </button>
          </div>
          {/* <input
            type="email"
            name="email"
            id="email"
            placeholder="myemail@gmail.com"
          /> */}
        </div>
        <div className="bg-black py-64 text-gray-300 font-semibold flex justify-center">
          <div className="absolute bottom-20 mx-32 space-x-72 grid grid-flow-col items-center mb-10">
            <div className="">
              <img src="/logowithtext64x64.svg" alt="Vaccine logo" />
            </div>
            <div className="text-lg">
              <ul className="nav-links flex space-x-10">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/service">Service</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="soicla-links">
              <ul className="flex space-x-12">
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="" alt="YouTube" />
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="twitter" alt="Twitter" />
                  </a>
                </li>
                <li>
                  <img src="instagra" alt="Instagram" />
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="linkedin" alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="facebook" alt="Facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
