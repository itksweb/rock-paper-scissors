import { useEffect, useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Rules from "./components/Modal";
import Header from "./components/Header";

const App = () => {
  const [uPicked, setUPicked] = useState("");
  const [hPicked, setHPicked] = useState("");
  const [verdict, setVerdict] = useState("");
  const [score, setScore] = useState(12);
  const [showRules, setShowRules] = useState(false);
  const [mode, setMode] = useState("RPS")

  useEffect(() => {
    switch (verdict) {
      case "WIN":
        setScore((prev) => prev + 1);
        break;
      case "LOSE":
        setScore((prev) => prev - 1);
        break;
      default:
        break;
    }
  }, [verdict]);

  useEffect(
    () => localStorage.setItem("score", JSON.stringify(score)),
    [score]
  );

  useEffect(() => {
    const getVerdict = (uPicked, hPicked) => {
      if (uPicked === hPicked) {
        return setVerdict("DRAW");
      }
      if (
        (uPicked === "scissors" && hPicked === "paper") ||
        (uPicked === "paper" && hPicked === "scissors")
      ) {
        return setVerdict(uPicked === "scissors" ? "WIN" : "LOSE");
      }
      if (
        (uPicked === "paper" && hPicked === "rock") ||
        (uPicked === "rock" && hPicked === "paper")
      ) {
        return setVerdict(uPicked === "paper" ? "WIN" : "LOSE");
      }
      if (
        (uPicked === "rock" && hPicked === "scissors") ||
        (uPicked === "scissors" && hPicked === "rock")
      ) {
        return setVerdict(uPicked === "rock" ? "WIN" : "LOSE");
      }
    };
    if (uPicked && hPicked && !verdict) {
      setTimeout(() => {
        getVerdict(uPicked, hPicked);
      }, 2500);
    }
  }, [uPicked, hPicked, verdict]);

  const handlePlayAgain = () => {
    setHPicked("");
    setUPicked("");
    setVerdict("");
    if (localStorage.getItem(score)) {
      setScore(JSON.parse(localStorage.getItem("score")));
    }
  };

  return (
    <div className={`w-full h-full flex flex-col items-center p-5 `}>
      <Header score={score} />
      <main className="flex-1 py-6 w-full flex items-center justify-center ">
        {!uPicked ? (
          <Step1 setUPicked={setUPicked} mode = {mode} />
        ) : (
          <Step2
            uPicked={uPicked}
            hPicked={hPicked}
            setHPicked={setHPicked}
            verdict={verdict}
            handlePlayAgain={handlePlayAgain}
          />
        )}
      </main>
      <footer className=" w-full flex max-sm:flex-col-reverse justify-center sm:justify-between pt-6 items-center">
        <button
          type="button"
          onClick={() => setMode(mode === "RPS" ? "RPSSL" : "RPS")}
          className=" cursor-pointer px-7 py-1.5 text-white italic text-sm "
        >
          Play Rock Paper Scissors{mode === "RPS" ? " Spock Lizard" : ""}{" "}
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
      {showRules ? <Rules setShowRules={setShowRules} /> : <></>}
    </div>
  );
};

export default App;
