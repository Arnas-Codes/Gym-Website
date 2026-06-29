import React, { useState } from "react";

const Navlinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contacts", href: "#contacts" },
  { name: "Join Us", href: "#join-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black h-20 text-white relative px-4 md:px-8">
      <div className="max-w-7xl h-17.5 flex items-center mx-auto justify-between">
        
        {/* Logo Section */}
        <div className="flex flex-col bg-[linear-gradient(90deg,#F66844_0%,rgba(250,120,52,0.804926)_39.01%,rgba(255,146,27,0.5)_100%)] bg-clip-text text-transparent select-none">
          <h1 className="text-2xl font-bold leading-tight">Bodyshape</h1>
          <h3 className="text-xs tracking-wider opacity-80">Unleash your inner athlete</h3>
        </div>

        {/* Hamburger Menu Button */}
        <div>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex items-center gap-2 px-3 py-2 border rounded border-neutral-700 hover:border-[#F66844] transition-colors"
          >
            {/*CSS Hamburger Icon */}
            <div className="flex flex-col gap-1 w-5">
              <span className={`h-0.5 w-full bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
            <span className="text-sm font-medium">{isOpen ? "Close" : "Menu"}</span>
          </button>
        </div>

        <div className={`fixed top-20 right-0 w-64 bg-neutral-950 border-l border-neutral-800 h-[calc(100vh-5rem)] transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="flex flex-col gap-6 p-6">
            {Navlinks.map(({ name, href }, i) => (
              <li key={i}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-[#F66844] transition-colors duration-200 block text-lg font-medium"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;