

const Header = ({score}) => {
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
}

export default Header
