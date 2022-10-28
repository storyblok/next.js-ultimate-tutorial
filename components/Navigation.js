import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

const Navigation = ({locales, locale, defaultLocale}) => {
  const router = useRouter()

  const [openMenu, setOpenMenu] = useState(false);

  const changeLocale = (loc) => {
    router.push(router.asPath, router.asPath ,{locale: loc})
  }

  return (
    <div className="relative bg-white border-b-2 border-gray-100 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Storyblok</span>
                <img
                  className="h-20 w-auto sm:h-10 hidden sm:block"
                  src='https://a.storyblok.com/f/88751/251x53/0d3909fe96/storyblok-primary.png'
                  alt="Storyblok"
                />
                <img
                  className="h-20 w-auto sm:h-10 sm:hidden"
                  src='https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png'
                  alt="Storyblok"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10">
            <Link href="/about">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                
                About
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                
                Blog
              </a>
            </Link>
            <Link href="/services">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                
                Services
              </a>
            </Link>
            {locales.map(loc => (     
                <span key={loc} onClick={ () => changeLocale(loc)}
                    className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 cursor-pointer ${
                      locale === loc ? "bg-black text-white" : ""
                    }`}>
                    {loc}
              </span>
              ))}
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, show/hide based on mobile menu state.
      --> */}
      {openMenu && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://a.storyblok.com/f/88751/92x106/835caf912a/storyblok-logo.png"
                    alt="Storyblok"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/about">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      {/* <!-- Heroicon name: outline/chart-bar --> */}
                      <span className="ml-3 text-base font-medium text-gray-900">
                        
                        About
                      </span>
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      {/* <!-- Heroicon name: outline/cursor-click --> */}
                      <span className="ml-3 text-base font-medium text-gray-900">
                        
                        Blog
                      </span>
                    </a>
                  </Link>
                  <Link href="/services">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        
                        Services
                      </span>
                    </a>
                  </Link>
                  {locales.map(loc => (     
                <span key={loc} onClick={ () => changeLocale(loc)}
                    className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 cursor-pointer ${
                      locale === loc ? "bg-black text-white" : ""
                    }`}>
                    {loc}
              </span>
              ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
