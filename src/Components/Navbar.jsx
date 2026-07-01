import React, { useEffect, useState } from "react";
import logoIcon from "../assets/CommonIcons/logoIcon.png";

const Navlinks = [
  { name: "Home", href: "#home" },
  { name: "Plan", href: "#plan" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contacts", href: "#contacts" },
  { name: "Join Us", href: "#join-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    const home = document.getElementById("home").offsetTop;
    const plan = document.getElementById("plan").offsetTop;
    const services = document.getElementById("services").offsetTop - 500;
    const about = document.getElementById("about").offsetTop;
    const contacts = document.getElementById("contacts").offsetTop;

    const handleScroll = () => {
      const y = window.scrollY + 120;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        setIsActive(4);
      } else if (y >= contacts) {
        setIsActive(4);
      } else if (y >= about) {
        setIsActive(3);
      } else if (y >= services) {
        setIsActive(2);
      } else if (y >= plan) {
        setIsActive(1);
      } else {
        setIsActive(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="bg-black h-24 text-white relative px-4 lg:px-8">
      <div className="fixed top-0 left-0 right-0 z-40 h-24 bg-black">
        <div className="max-w-7xl h-full mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col gap-1 select-none">
            <div className="flex items-center gap-2">
              <img
                className="-scale-x-100 h-7 lg:h-8 w-auto"
                src={logoIcon}
                alt="Logo"
              />

              <h1 className="text-3xl lg:text-4xl font-bold leading-tight bg-[linear-gradient(90deg,#F66844_0%,rgba(250,120,52,0.8)_39%,rgba(255,146,27,0.5)_100%)] bg-clip-text text-transparent">
                Bodyshape
              </h1>

              <img className="h-7 lg:h-8 w-auto" src={logoIcon} alt="Logo" />
            </div>

            <h3 className="text-sm lg:text-base mx-auto tracking-wider text-amber-50 opacity-80">
              Unleash your inner athlete
            </h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-8 lg:gap-10">
              {Navlinks.map(({ name, href }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors duration-200 block font-medium text-lg lg:text-xl  ${
                      i === 5
                        ? "bg-[linear-gradient(90deg,#F66844_0%,#FF921B_100%)] text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        : "text-neutral-300 hover:text-[#F66844]"
                    } ${isActive === i ? "border-b-4 pb-2 border-[#F66844] scale-105 transition-all duration-300" : ""}`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 px-4 py-3 border border-neutral-700 rounded-lg hover:border-[#F66844] transition-colors"
            >
              <div className="flex flex-col gap-1 w-5">
                <span
                  className={`h-0.5 w-full bg-white transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>

                <span
                  className={`h-0.5 w-full bg-white transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>

                <span
                  className={`h-0.5 w-full bg-white transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>

              <span className="text-base font-medium">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-24 right-0 w-72 bg-black border-l border-neutral-800 h-[calc(100vh-6rem)] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-8 p-8">
            {Navlinks.map(({ name, href }, i) => (
              <li key={i}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-200 block font-medium text-lg lg:text-xl  ${
                    i === 5
                      ? "bg-[linear-gradient(90deg,#F66844_0%,#FF921B_100%)] text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
                      : "text-neutral-300 hover:text-[#F66844]"
                  } ${isActive === i ? "border-b-2 border-[#F66844] scale-105 transition-all duration-300" : ""}`}
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
