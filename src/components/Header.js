import React from "react";
import { isAuth, signout } from "../helpers/auth";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 sticky top-0"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="/"
          >
            Beautiful Beach
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
            <li className="flex items-center">
              <a
                className={
                    (props.transparent ? "text-white" : "text-gray-800") +
                    " text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase"
                }
                href="/"
                style={{ transition: "all .15s ease" }}
              >
                Home
              </a>
            </li>
            {
              isAuth()
              ?
              <>
              <li className="flex items-center">
              <a
              onClick={() => signout()}
                className={
                    (props.transparent ? "text-white" : "text-gray-800") +
                    " text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase"
                }
                href="/"
                style={{ transition: "all .15s ease" }}
              >
                Logout
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                    (props.transparent ? "text-white" : "text-gray-800") +
                    " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                }
                href="/dashboard"
                style={{ transition: "all .15s ease" }}
              >
                Dashboard
              </a>
            </li>
            </>
            :
            <>
            <li className="flex items-center">
              <a
                className={
                    (props.transparent ? "text-white" : "text-gray-800") +
                    " text-sm font-bold leading-relaxed inline-block mr-8 py-2 whitespace-nowrap uppercase"
                }
                href="/register"
                style={{ transition: "all .15s ease" }}
              >
                Register
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                    (props.transparent ? "text-white" : "text-gray-800") +
                    " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                }
                href="/login"
                style={{ transition: "all .15s ease" }}
              >
                Login
              </a>
            </li>
            </>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}