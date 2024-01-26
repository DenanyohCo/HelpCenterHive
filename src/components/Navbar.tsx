"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      aria-label="Main navigation"
      className="container top-0 z-50 mx-auto bg-white  max-w-7xl md:sticky md:top-4"
    >
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center justify-between w-full">
          <NameLogo />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-white pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]"
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          <div className="container ml-auto flex flex-col items-center mr-6">
            <Button variant={"ghost"} className="p-6">
              <Link className="text-xl font-light w-full" href="/buyCoffee">
                Buy me a coffee
              </Link>
            </Button>
            <Button className="p-6 w-full">
              <Link className="text-xl font-light" href="/submitSite">
                Submit a site
              </Link>
            </Button>
          </div>
        </div>
        <DesktopMenu />
      </div>
    </nav>
  );
};
function NameLogo() {
  return (
    <Link href="/" className="flex flex-row items-center justify-center">
      <Image
        src="/HelpCenterDesignsLogo.svg"
        width="50"
        height="50"
        alt="Help Center Designs Logo"
      />
      <h1 className="text-4xl">HCD</h1>
    </Link>
  );
}
function DesktopMenu() {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 py-0 md:flex">
      <div className="ml-auto flex items-center">
        <Button variant={"ghost"} className="p-6 mr-6">
          <Link className="text-xl font-light" href="/buyCoffee">
            Buy me a coffee
          </Link>
        </Button>
        <Button className="p-6">
          <Link className="text-xl font-light" href="/submitSite">
            Submit a site
          </Link>
        </Button>
      </div>
    </div>
  );
}
export default Navbar;
