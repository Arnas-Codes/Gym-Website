import React from "react";
import logoIcon from "../../assets/CommonIcons/logoIcon.png";

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Careers", "Blogs"],
  },
  {
    title: "Contact",
    links: ["Help / FAQ", "Press"],
  },
  {
    title: "More",
    links: ["Program", "Plan", "Method"],
  },
];

const popularTags = [
  { name: "Abs", active: false },
  { name: "Workout", active: false },
  { name: "Nutrition", active: false },
  { name: "Boxing", active: false },
  { name: "Gym", active: false },
  { name: "Facilities", active: true },
  { name: "Plans", active: false },
  { name: "Trainers", active: false },
];

const Contact = () => {
  return (
    <footer
      id="contacts"
      className="bg-[linear-gradient(180deg,rgba(57,57,57,0.25)_0%,rgba(217,217,217,0)_100%,rgba(57,57,57,0.25)_100%)] 
    border text-white border-t border-neutral-800"
    >
      <div class=""></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 select-none">
              <img src={logoIcon} alt="" className="-scale-x-100 w-7 h-7" />

              <h1 className="text-3xl font-bold bg-[linear-gradient(90deg,#F66844_0%,rgba(250,120,52,.8)_40%,rgba(255,146,27,.5)_100%)] bg-clip-text text-transparent">
                Bodyshape
              </h1>

              <img src={logoIcon} alt="" className="w-7 h-7" />
            </div>

            <p className="text-[#FF921B] mt-2 tracking-wide">
              Unleash your inner athlete
            </p>

            <h2 className="text-3xl font-bold mt-8 leading-snug">
              Support Your Need To Reach Every Fitness Goal
            </h2>

            <p className="mt-5 text-gray-400 leading-7 max-w-md">
              Achieve your fitness goals with expert trainers, personalized
              programs and a community that keeps you motivated every step of
              the way.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-12">
            {/* Links */}
            <div className="grid grid-cols-3 gap-8">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h3 className="text-xl font-semibold mb-5">{column.title}</h3>

                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-gray-400 hover:text-[#FF921B] transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Popular Tags */}
            <div>
              <h3 className="text-xl font-semibold mb-5">Popular Tags</h3>

              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag) => (
                  <button
                    key={tag.name}
                    className={`px-4 py-2 rounded-md text-sm transition-all ${
                      tag.active
                        ? "bg-[#FF921B] text-black"
                        : "bg-neutral-800 text-gray-300 hover:bg-[#FF921B] hover:text-black"
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[linear-gradient(90deg,#F66844_0%,#FF921B_100%)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col  items-center  gap-3">
          <p className="font-semibold text-black text-center md:text-left">
            © 2026 Bodyshape. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
