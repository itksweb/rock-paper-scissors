import { useState, useEffect, useRef, useCallback } from "react";
import { GameOption } from "./GameBits";

// A simple utility to debounce a function for performance on resize
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const pentagonVertices = [
  [50, 0, "scissors"], // Top vertex
  [96, 35, "paper"], // Top-right
  [78, 90, "rock"], // Bottom-right
  [22, 90, "lizard"], // Bottom-left
  [4, 35, "spock"], // Top-left
];

const triangleVertices = [
  ["0%", "0%", "paper"], // Top-left
  [100, 0, "scissors"], //top-right
  [50, 100, "rock"], // Bottom
];

const Step1 = ({ setUPicked, mode }) => {
  const [circlePositions, setCirclePositions] = useState([]);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const verticesData =
    mode === "triangle" ? triangleVertices : pentagonVertices;

  // Memoize the position calculation function
  const getCirclePositions = useCallback(() => {
    if (!imgRef.current || !containerRef.current) {
      return;
    }
    const imgRect = imgRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    // Calculate the offset of the image relative to its container's top-left corner
    // This is crucial if the image is centered within a larger container
    const imgOffsetX = imgRect.left - containerRect.left;
    const imgOffsetY = imgRect.top - containerRect.top;

    const newPositions = verticesData.map(([relX, relY, name]) => {
      const absX = imgRect.width * (relX / 100) + imgOffsetX;
      const absY = imgRect.height * (relY / 100) + imgOffsetY;
      return { left: absX, top: absY, name };
    });

    setCirclePositions(newPositions);
  }, [verticesData]); // Recalculate if verticesData changes

  // Debounced version for resize events
  const debouncedgetCirclePositions = useCallback(
    debounce(getCirclePositions, 100),
    [getCirclePositions]
  );

  // Effect for initial positioning and handling image load
  useEffect(() => {
    const imgElement = imgRef.current;

    // Ensure positions are calculated once the image is loaded
    // and also for cases where image might be cached
    if (imgElement) {
      if (imgElement.complete) {
        getCirclePositions();
      } else {
        imgElement.addEventListener("load", getCirclePositions);
      }
    }

    // Cleanup: remove event listener if component unmounts
    return () => {
      if (imgElement) {
        imgElement.removeEventListener("load", getCirclePositions);
      }
    };
  }, [getCirclePositions]); // Only re-run if getCirclePositions changes

  // Effect for handling window resize
  useEffect(() => {
    window.addEventListener("resize", debouncedgetCirclePositions);
    return () => {
      window.removeEventListener("resize", debouncedgetCirclePositions);
    };
  }, [debouncedgetCirclePositions]); // Only re-run if debounced function changes

  const shapeStyle = {
    maxWidth: mode === "triangle" ? "313px" : "329px",
    width: "100%",
  };

  return (
    <div
      style={shapeStyle}
      id={`${mode}-container`}
      className="flex items-center justify-center relative"
      ref={containerRef}
    >
      <img
        src={`images/bg-${mode}.svg`}
        alt={`${mode} base`}
        className="max-w-full block h-auto"
        ref={imgRef}
      />
      {circlePositions.map((position) => (
        <GameOption
          key={position.name}
          name={position.name}
          left={position.left}
          top={position.top}
          setUPicked={setUPicked}
          cirWidth={mode === "pentagon" && "40%"}
        />
      ))}
    </div>
  );
};

export default Step1;
