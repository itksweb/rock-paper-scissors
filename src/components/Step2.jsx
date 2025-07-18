import { Picked } from "./GameBits";

const Step2 = ({ uPicked, hPicked, setHPicked, verdict, handlePlayAgain }) => {
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

export default Step2;
