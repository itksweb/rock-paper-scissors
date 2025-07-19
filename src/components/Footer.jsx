import React from "react";

const Footer = ({ setMode, setShowRules, mode }) => {
  return (
    <footer className=" w-full flex max-sm:flex-col-reverse justify-center sm:justify-between pt-6 items-center">
      <button
        type="button"
        onClick={() => setMode(mode === "triangle" ? "pentagon" : "triangle")}
        className=" cursor-pointer px-7 py-1.5 text-white italic text-sm "
      >
        Play Rock Paper Scissors{mode === "triangle" ? " Spock Lizard" : ""}{" "}
        instead
      </button>
      <button
        type="button"
        onClick={() => setShowRules(true)}
        className=" outline-2 outline-header-out cursor-pointer rounded-lg px-7 py-1.5 text-white"
      >
        RULES
      </button>
    </footer>
  );
};

export default Footer;
