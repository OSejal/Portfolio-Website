const Header = () => {
  return (
    <header className="w-full py-4 xl:py-5 fixed top-0 z-50 flex justify-center">
      <nav className="bg-slate-100 shadow-md px-6 py-2 rounded-full flex items-center gap-10">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#skills" className="nav-item">
          Skills
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header; 