import { Picked, GameOption } from "./GameBits";
import { triangle, pentagon } from "../utils";

export const Step1 = ({ setUPicked, mode }) => {
  //rock paper scissors component
  const Rps = () => {
    return (
      <div className="flex items-center justify-center max-w-[313px] w-full relative">
        <img
          src="images/bg-triangle.svg"
          alt="triangle"
          className="max-w-full block h-auto"
        />
        {triangle.map((pos) => (
          <GameOption
            key={pos.name}
            name={pos.name}
            left={pos.left}
            top={pos.top}
            setUPicked={setUPicked}
            width="60%"
          />
        ))}
      </div>
    );
  };
  //rock paper scissors spock lizard component
  const Rpssl = () => {
    return (
      <div className="flex items-center justify-center max-w-[329px] w-full relative">
        <img
          src="images/bg-pentagon.svg"
          alt="pentagon"
          className="max-w-full block h-auto"
        />
        {pentagon.map((pos) => (
          <GameOption
            key={pos.name}
            name={pos.name}
            left={pos.left}
            top={pos.top}
            setUPicked={setUPicked}
            width="40%"
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {mode === "rps" ? (
        <Rps setUPicked={setUPicked} />
      ) : (
        <Rpssl setUPicked={setUPicked} />
      )}
    </>
  );
};

export const Step2 = ({
  uPicked,
  hPicked,
  setHPicked,
  verdict,
  handlePlayAgain,
}) => {
  return (
    <div className=" w-full flex gap-y-16 items-center flex-wrap justify-evenly">
      <Picked
        picked={uPicked}
        label="you"
        wrap={verdict === "WIN"}
        cls="max-md:order-1"
      />
      {verdict ? (
        <div className="verdict min-w-48 max-md:order-3 ">
          <h3 className="text-white text-center text-4xl font-bold uppercase">{`you ${verdict}`}</h3>
          <button
            type="button"
            onClick={() => handlePlayAgain()}
            className="bg-white uppercase font-semibold text-lg cursor-pointer min-w-max px-5 rounded-md py-2.5 mt-5 w-full"
          >
            Play Again
          </button>
        </div>
      ) : (
        <></>
      )}
      <Picked
        cls="max-md:order-2"
        picked={hPicked}
        wrap={verdict === "LOSE"}
        setHPicked={setHPicked}
        label="house"
      />
    </div>
  );
};
