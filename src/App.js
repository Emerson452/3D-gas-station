import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GasStationShow } from './components/GasStationShow';
import "./index.css";

function App() {
  return (

      <Canvas shadows> 
      <Suspense fallback={null}>
          <GasStationShow />
        </Suspense>
      </Canvas>

  );
}

export default App;
