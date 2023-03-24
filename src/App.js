import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GasStationShow } from './components/GasStationShow';

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows> 
        <GasStationShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
