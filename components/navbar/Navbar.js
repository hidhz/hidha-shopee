import { useState, useRef } from "react";
import { FaHamburger } from "react-icons/fa";
import { TfiBackRight } from "react-icons/tfi";

import Container from "@/components/Container";
import NavLogo from "./NavLogo";
import NavItem from "./NavItem";
import { motion } from "framer-motion";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-100%" },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef("");
  const [isKlik, setIsKlik] = useState(false);
  const hamburgerClick = () => {
    setIsKlik((state) => !state);
    navRef.current.classList.toggle("hidden");
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <Container padding="py-4">
      <nav className="flex items-center justify-between">
        <NavLogo>hidhz.</NavLogo>
        <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
          <div className="flex items-center space-x-4">
            <button
              onClick={hamburgerClick}
              className="text-2xl -mr-[22px] text-slate-600 rounded p-2 hover:bg-slate-200 rounded-full"
            >
              {!isKlik ? <FaHamburger /> : <TfiBackRight />}
            </button>
            {/*
            <button
              onClick={hamburgerClick}
              className="text-2xl -mr-[22px] md:hidden text-slate-600 rounded p-2 hover:bg-slate-200 rounded-full"
            >
              {!isKlik ? <FaHamburger /> : <TfiBackRight />}
            </button>
            <div ref={navRef} className="hidden flex md:flex space-x-4">
            */}
            <div ref={navRef} className="hidden flex space-x-4">
              <NavItem href="/">home</NavItem>
              <NavItem href="/">dashboard</NavItem>
              <NavItem href="/">list</NavItem>
              <NavItem href="/">about</NavItem>
              <NavItem href="/">contact</NavItem>
            </div>
          </div>
        </motion.nav>
      </nav>
    </Container>
  );
}
