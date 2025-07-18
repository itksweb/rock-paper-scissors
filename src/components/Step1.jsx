import { GameOption } from "./GameBits";

const Step1 = ({ setUPicked, mode }) => {
  const Rps = () => {
    return (
      <div className="translate-y-1/5 px-[20%] ">
        <div className="relative flex ">
          <img
            src="images/bg-triangle.svg"
            alt="game triangle background"
            className=""
          />
          <GameOption
            name="paper"
            colo="bg-bluep-l"
            cls="left-0 -translate-y-1/2 -translate-x-1/2"
            setUPicked={setUPicked}
          />
          <GameOption
            name="scissors"
            colo="bg-gold-l"
            cls="right-0 -translate-y-1/2 translate-x-1/2"
            setUPicked={setUPicked}
          />
          <GameOption
            name="rock"
            colo="bg-red-l"
            cls="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/5"
            setUPicked={setUPicked}
          />
        </div>
      </div>
    );
  };
  const Rpssl = () => {

    return (
      <div className=" ">
        <div className="relative ">
          <img
            src="images/bg-pentagon.svg"
            alt="game pentagon background"
            className=""
          />
          <span
            style={{
              "--angle": "0deg",
              "--x-offset": "-10px",
              "--y-offset": "-130px",
              "--radius": "0px",
            }}
            className="point size-24 rounded-full ring-2 ring-amber-300 "
          ></span>

          
          <span
            style={{
              "--angle": "72deg",
              "--x-offset": "-10px",
              "--y-offset": "-130px",
              "--radius": "140px",
            }}
            className="point1 size-24 rounded-full ring-2 ring-green-600 "
          ></span>
          <span
            style={{
              "--angle": "144deg",
              "--x-offset": "-10px",
              "--y-offset": "-130px",
              "--radius": "140px",
            }}
            className="point size-24 rounded-full ring-2 ring-blue-600 "
          ></span>
          {/* <span
            style={{
              "--angle": "216deg",
              "--x-offset": "-10px",
              "--y-offset": "-130px",
              "--radius": "0px",
            }}
            className="point size-24 rounded-full ring-2 ring-amber-300 "
          ></span>
          <span
            style={{
              "--angle": "288deg",
              "--x-offset": "-10px",
              "--y-offset": "-130px",
              "--radius": "0px",
            }}
            className="point size-24 rounded-full ring-2 ring-amber-300 "
          ></span> */}
        </div>
      </div>
    );
  };

  return (
    <>
      {mode === "RPS" ? <Rps />: <Rpssl />}
    </>
  );
};


export default Step1;
