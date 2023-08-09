import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GasStationShow } from "./components/GasStationShow";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with a setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Change this value to the desired loading time in milliseconds
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <div className="text-container">Made by Emerson</div>

          <div className="canvas-container">
            <Canvas shadows>
              <Suspense fallback={null}>
                <GasStationShow />
              </Suspense>
            </Canvas>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
