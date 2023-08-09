import React, { useState, useEffect } from "react";

function LoadingScreen() {
  const [loadingBars, setLoadingBars] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingBars(prevBars => {
        const updatedBars = prevBars.map((bar, index) => {
          const offset = index * 25; // Appliquer le décalage de 25% à chaque barre
          return bar >= 100 - offset ? 0 : bar + 25;
        });
        return updatedBars;
      });
    }, 1000); // Intervalle en millisecondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="bar-container">
        {loadingBars.map((progress, index) => (
          <div className="ldBar" key={index}>
            <div className="ldBar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;
