const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="logo">
            <img src="/logowithtext.svg" alt="logo" />
        </div>
        <div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div>
            <button>Call Center</button>
        </div>
      </div>
    </>
  );
};

export default Header;
