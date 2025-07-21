import { Rules } from "./GameBits";

export const Header = ({ score }) => {
  return (
    <header className="rounded-md flex justify-between items-center p-5 w-full lg:w-[70%] outline-4 outline-header-out">
      <img
        src="/images/logo.svg"
        alt="logo"
        className="w-[97.2px] h-[59.4px] md:w-[162px] md:h-[99px]"
      />
      <div className="text-center rounded-md h-full py-4 px-5 md:px-10 bg-gray-100">
        <p className="text-score-text uppercase font-semibold text-sm">score</p>
        <p className="text-dark-text font-bold text-4xl md:text-6xl">{score}</p>
      </div>
    </header>
  );
};

export const Footer = ({ setMode, setShowRules, mode, uPicked, showRules }) => {
  return (
    <>
      <footer
        className={` w-full flex max-sm:flex-col-reverse justify-center ${
          !uPicked ? "sm:justify-between" : "sm:justify-end"
        }  pt-6 items-center`}
      >
        {!uPicked ? (
          <button
            type="button"
            onClick={() => setMode(mode === "rps" ? "rpssl" : "rps")}
            className=" cursor-pointer px-7 py-1.5 text-white italic text-sm "
          >
            Play Rock Paper Scissors{mode === "rps" ? " Spock Lizard" : ""}{" "}
            instead
          </button>
        ) : (
          <></>
        )}
        <button
          type="button"
          onClick={() => setShowRules(true)}
          className=" outline-2 outline-header-out cursor-pointer rounded-lg px-7 py-1.5 text-white"
        >
          RULES
        </button>
      </footer>
      {showRules ? <Rules setShowRules={setShowRules} mode={mode} /> : <></>}
    </>
  );
};

