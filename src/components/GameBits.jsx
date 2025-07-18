import { useEffect, useState } from "react";

const getElement = (name) => {
  let colo = "";

  switch (name) {
    case "scissors":
      colo = "bg-gold-l";
      break;
    case "paper":
      colo = "bg-bluep-l";
      break;
    case "rock":
      colo = "bg-red-l";
      break;
    case "lizard":
      colo = "bg-purple-l";
      break;
    case "spock":
      colo = "bg-cyan-l";
      break;

    default:
      break;
  }
  return { colo };
};

export const GameOption = ({ name, setUPicked, cls, colo }) => {
  const outer = `bg-${colo}-d`;
  const inner = `bg-${colo}-l`;

  const cooo = colo.slice(3).slice(0, -1);
  const outShadow = {
    boxShadow: `0 1em 0 -0.5em var(--${cooo}d)`,
    fontSize: "clamp(8px, 2vw, 30px)",
  };

  return (
    <button
      type="button"
      style={outShadow}
      onClick={() => setUPicked(name)}
      className={`cursor-pointer absolute w-[64%] aspect-square ${colo} flex items-center justify-center rounded-full ${
        cls ? cls : ""
      }`}
    >
      <span className=" bg-white shadow-[inset_0_20px_0_-12px_rgba(0,0,0,0.1)] flex items-center justify-center rounded-full w-[80%] aspect-square">
        <img
          src={`/images/icon-${name}.svg`}
          alt={`${name} icon`}
          className="w-[50%]"
        />
      </span>
    </button>
  );
};

export const Picked = ({ picked, label, setHPicked, wrap, cls }) => {
  const { colo } = getElement(picked);
  const [show, setShow] = useState(false);
  const cooo = colo.slice(3).slice(0, -1);

  useEffect(() => {
    if (label === "house") {
      const els = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * els.length);
      return setHPicked(els[randomIndex]);
    }
    if (label === "you") {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    if (label === "house" && picked) setTimeout(() => setShow(true), 2000);
  }, [picked]);
  const outerGlow = {
    boxShadow: `0 0 0 60px rgba(43, 56, 87, 0.7), 0 0 0 150px rgba(43, 56, 87, 0.5), 0 0 0 180px rgba(43, 56, 87, 0.3)`,
  };

  const circShad = {
    backgroundColor: `var(--${cooo}d`,
    zIndex: !wrap ? "unset" : "-999",
    boxShadow: !wrap
      ? ""
      : `0 0 0 60px rgba(43, 56, 87, 0.7), 0 0 0 150px rgba(43, 56, 87, 0.5), 0 0 0 180px rgba(43, 56, 87, 0.3)`,
  };

  return (
    <div
      className={` ${
        cls ? cls : ""
      } flex max-md:w-[40%] flex-col-reverse justify-center sm:flex-col items-center gap-10 lg:gap-20 `}
    >
      <h2 className="sm:text-xl text-white uppercase font-bold">{`${
        label === "you" ? "You" : "The House"
      } picked`}</h2>
      {show ? (
        <div
          style={circShad}
          className={`relative size-40 sm:size-60 lg:size-72 rounded-full`}
        >
          <span
            className={`size-40 sm:size-60 lg:size-72 ${colo}  flex items-center justify-center rounded-full bottom-[4%] absolute`}
          >
            <span
              className={`inner size-32 sm:size-48 lg:size-56 bg-white flex items-center justify-center rounded-full`}
            >
              <img
                src={`/images/icon-${picked}.svg`}
                alt={`${picked} icon`}
                className="sm:w-[73.5px] lg:w-[98px] lg:h-[118px] sm:h-[88.5px] "
              />
            </span>
          </span>
        </div>
      ) : (
        <div className="l size-48 rounded-full bg-dark-bg"></div>
      )}
    </div>
  );
};
