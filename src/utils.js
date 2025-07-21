export const pentagon = [
  { left: "50%", top: "0%", name: "scissors" }, // Top-vertex
  { left: "96%", top: "35%", name: "paper" }, //top-right
  { left: "78%", top: "90%", name: "rock" }, // Bottom-right
  { left: "22%", top: "90%", name: "lizard" }, //bottom-left
  { left: "4%", top: "35%", name: "spock" }, //top-left
];
export const triangle = [
  { left: "0%", top: "0%", name: "paper" }, // Top-left
  { left: "100%", top: "0%", name: "scissors" }, //top-right
  { left: "50%", top: "100%", name: "rock" }, // Bottom
];

export const rulesBasis = [
  "Scissors beats Paper",
  "paper beats rock",
  "Rock beats Lizard",
  "Lizard beats Spock",
  "Spock beats Scissors",
  "Scissors beats Lizard",
  "Paper beats Spock",
  "Rock beats Scissors",
  "Lizard beats Paper",
  "Spock beats Rock",
];

export const getElement = (name) => {
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
  return colo;
};
