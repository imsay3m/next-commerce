import Image from "next/image";
import logo from "../../../public/assets/images/home-1/logo.png"

const Header = () => {
    return (
        <>
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Jesco</span>
                            <Image className="h-8 w-auto"
                                   src={logo} alt="Jesco Logo"/>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <div className="relative flex content-center">
                            <button type="button"
                                    className="flex items-center gap-x-1 text-sm text-[#4c4c4c] text-[14px] font-[600] leading-[100px] uppercase"
                                    aria-expanded="false">
                                Home
                                <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </div>

                        <a href="#"
                           className="flex items-center gap-x-1 text-sm text-[#4c4c4c] text-[14px] font-[600] leading-[100px] uppercase">Shop
                            <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a href="#"
                           className="flex items-center gap-x-1 text-sm text-[#4c4c4c] text-[14px] font-[600] leading-[100px] uppercase">Blogs
                            <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                        <a href="#"
                           className="flex items-center gap-x-1 text-sm text-[#4c4c4c] text-[14px] font-[600] leading-[100px] uppercase">About
                            Us
                        </a>
                        <a href="#"
                           className="flex items-center gap-x-1 text-sm text-[#4c4c4c] text-[14px] font-[600] leading-[100px] uppercase">Contact
                            Us
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#"
                           className="flex items-center gap-x-1 text-sm text-[#4c4c4c] text-[14px] font-[600] leading-[100px]">Sign
                            in
                        </a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;