import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows> 

      </Canvas>
    </Suspense>
  );
}

export default App;
