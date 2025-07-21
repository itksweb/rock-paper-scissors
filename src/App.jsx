import { useEffect, useState } from "react";
import { Header, Footer } from "./components/template-parts";
import { Step1, Step2 } from "./components/steps";
import { rulesBasis } from "./utils";
const scor = localStorage.getItem("score");


const App = () => {
  const [uPicked, setUPicked] = useState("");
  const [hPicked, setHPicked] = useState("");
  const [verdict, setVerdict] = useState("");
  const [score, setScore] = useState(scor ? +scor : 12);
  const [showRules, setShowRules] = useState(false);
  const [mode, setMode] = useState("rps");

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
    const getVerdict = (x, y) => {
      if (x === y) {
        return setVerdict("DRAW");
      }
      const pick = rulesBasis
        .map((item) => item.toLowerCase())
        .filter(
          (item) =>
            (item.startsWith(x) && item.endsWith(y)) ||
            (item.startsWith(y) && item.endsWith(x))
        );
      if (pick.length === 1) {
        return setVerdict(pick[0].startsWith(x) ? "WIN" : "LOSE");
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
      <main className="flex-1 py-6 w-full flex items-center justify-center max-sm:px-[20%] ">
        {!uPicked ? (
          <Step1 setUPicked={setUPicked} mode={mode} />
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
      <Footer
        setMode={setMode}
        setShowRules={setShowRules}
        mode={mode}
        uPicked={uPicked}
        showRules={showRules}
      />
    </div>
  );
};

export default App;
