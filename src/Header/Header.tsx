const Header = () => {
  return (
    <>
      <header className="Header my-5 flex justify-between">
        <div className="logo ">
          <img src="/logowithtext.svg" alt="logo" className="w-24 lg:w-32" />
        </div>
        <div className="text-gray-500 font-semibold text-lg hidden md:block">
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
        <div className="hidden md:block">
          <button className="shadow-2xl font-semibold shadow-blue-950 active:bg-bule-900 hover:bg-blue-800 hover:shadow-blue-800 transition-colors hover:transition-shadow hover:ease-in-out hover:duration-300 ease-in-out duration-300 cursor-pointer px-4 py-2 bg-blue-950 text-white rounded-full">
            Call Center
          </button>
        </div>
        <div className="block md:hidden">
          <img src="/menu.svg" alt="menu" />
        </div>
      </header>
    </>
  );
};

export default Header;
