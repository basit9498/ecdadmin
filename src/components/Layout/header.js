import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Logo from "../../assets/img/logo.svg";
import Bell from "../../assets/img/bell.svg";
import { Link, useNavigate } from "react-router-dom";
import User from "../../assets/img/user2.png";
import Down from "../../assets/img/down.svg";

const Header = () => {
  const nag = useNavigate();
  return (
    <>
      <header className="border-b shadow h-16">
        <section className="container mx-auto h-full flex justify-between items-center ">
          <img src={Logo} alt="" className="w-12" />
          <div className="flex items-center">
            <div className="relative mr-10">
              <img src={Bell} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 inline-block rounded-full"></span>
            </div>
            <div>
              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  <Menu.Button className="flex items-center">
                    <img
                      src={User}
                      alt=""
                      className="w-9 h-9 object-cover rounded-full mr-2"
                    />
                    <img src={Down} alt="" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 bg-white rounded-md shadow border">
                    <div className="py-1">
                      <h1 className="border-b border-darkblue text-base text-darkblue text-center font-medium py-2">
                        Muhammad Usama
                      </h1>
                      <ul className="mt-2">
                        <Link
                          to="#"
                          className="block py-2 px-2.5 text-sm font-medium transition-all duration-300 text-darkblue hover:text-secondry hover:bg-darkblue"
                        >
                          Profile
                        </Link>
                        <Link
                          to="#"
                          className="block py-2 px-2.5 text-sm font-medium transition-all duration-300 text-darkblue hover:text-secondry hover:bg-darkblue"
                        >
                          Setting
                        </Link>
                        <button
                          onClick={() => {
                            nag("/");
                          }}
                          className="block py-2 px-2.5 text-sm font-medium transition-all duration-300 text-darkblue hover:text-secondry hover:bg-darkblue"
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
