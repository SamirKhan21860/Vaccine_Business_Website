const Footer = () => {
  return (
    <>
      <footer className="footer relative">
        <div className="bg-gradient-to-tr from-blue-400 to-blue-600 relative top-40 mx-10 p-12 md:mx-40 md:p-32 rounded-[32px] md:rounded-[64px] text-center">
          <div className="text-white mb-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-1 md:mb-4">
              Get a vaccine invitation
            </h3>
            <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Drop your email here to get vaccine invitation
            </p>
          </div>
          <div className="input max-w-[24rem] flex mx-auto">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Myemail@gmail.com"
              className="bg-white rounded-l-full md:text-xl text-blue-950 font-semibold outline-none md:py-4 py-3 px-4 md:px-8 md:h-20 w-full placeholder:text-gray-500 placeholder:font-semibold text-xs md:placeholder:text-xl"
            />
            <button
              type="submit"
              className="bg-gradient-to-br inline hover:from-blue-700 hover:to-blue-900 transition-colors duration-500 ease-in-out from-blue-900 to-blue-950 md:py-4 py-3 px-5 text-xs md:px-16 md:text-base text-white md:h-20 rounded-r-full"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="bg-black py-64 text-gray-300 font-semibold flex justify-center">
          <div className="absolute gap-8 md:gap-1 bottom-2 md:bottom-20 md:mx-32 md:space-x-72 grid lg:grid-flow-col items-center mb-10">
            <div className="">
              <img src="/logowithtext64x64.svg" alt="Vaccine logo" />
            </div>
            <div className="text-lg hidden md:block">
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
              <ul className="flex flex-col items-center lg:flex-row gap-4 md:space-x-12">
                <li id="youtube">
                  <a href="#Youtube" rel="noopener noreferrer">
                    <img src="" alt="YouTube" />
                  </a>
                </li>
                <li id="twitter">
                  <a href="#twitter" rel="noopener noreferrer">
                    <img src="twitter" alt="Twitter" />
                  </a>
                </li>
                <li id="instagram">
                  <a href="#instagram">
                    <img src="instagram" alt="Instagram" />
                  </a>
                </li>
                <li id="linkedin">
                  <a href="#linkedin" rel="noopener noreferrer">
                    <img src="linkedin" alt="LinkedIn" />
                  </a>
                </li>
                <li id="facebook">
                  <a href="#facebook" rel="noopener noreferrer">
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
