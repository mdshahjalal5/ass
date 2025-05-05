import { logo } from "../assets";
import Button from "./Button";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import Menu from "./Menu";
import Brand from "./Brand";
import { Link } from "react-router";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="p-4  max-container sticky z-10 top-2">
      <nav className="flex-between border p-2 rounded-xl sticky z-[1000]  bg-gray-200">
        <Brand />
        {/* desktop device menu */}
        <Menu
          className={`max-sm:hidden flex gap-5 text-gray-600 font-semibold text-lg`}
        />

        <div className="relative">
          <div className="max-sm:hidden">
            <Link to="/auth/login">
              <Button label={"Login"} className={"text-white"} />
            </Link>
          </div>
          <div onClick={() => setOpen(!open)} className="sm:hidden border">
            <button>
              {/* <AlignJustify /> */}
              {open ? (
                <span className="text-2xl font-semibold p-1">X</span>
              ) : (
                <AlignJustify />
              )}
            </button>
          </div>
          <div
            className={`bg-gray-300  rounded-lg absolute -left-[124px] sm:hidden ${open ? "" : "hidden"}`}
          >
            {/* mobile device menu */}
            <Menu className="p-4  flex flex-col gap-1 text-gray-600 font-semibold text-lg" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
