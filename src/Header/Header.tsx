const Header = () => {
  return (
    <>
      <header className="Header my-5 flex justify-between">
        <div className="logo ">
          <img src="/logowithtext.svg" alt="logo" className="w-32" />
        </div>
        <div className="text-gray-500 font-medium text-lg">
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
        <div className="">
          <button className="shadow-2xl font-semibold shadow-blue-900 px-4 py-2 bg-blue-950 text-white rounded-full">
            Call Center
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
