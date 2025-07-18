import React from "react";

const Step3 = ({ uPicked, hPicked }) => {
  const JudgeWinner = (uPicked, hPicked) => {
    if (uPicked === hPicked) {
      return 0;
    }
    if (
      (uPicked === "scissors" && hPicked === "paper") ||
      (uPicked === "paper" && hPicked === "scissors")
    ) {
      return uPicked === "scissors" ? 1 : -1;
    }
    if (
      (uPicked === "paper" && hPicked === "rock") ||
      (uPicked === "rock" && hPicked === "paper")
    ) {
      return uPicked === "paper" ? 1 : -1;
    }
    if (
      (uPicked === "rock" && hPicked === "scissors") ||
      (uPicked === "scissors" && hPicked === "rock")
    ) {
      return uPicked === "rock" ? 1 : -1;
    }
  };

  return <div>
    <div className="verdict">
        <h3 className="text-white text-5xl font-bold uppercase">you win</h3>
        <button type="button" className="bg-white rounded-md py-2 w-full"></button>
    </div>
  </div>;
};

export default Step3;


