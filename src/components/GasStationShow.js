import {
    CubeCamera,
    Environment,
    OrbitControls,
    PerspectiveCamera,
  } from "@react-three/drei";
  import { GasStation } from "./GasStation";
  

  function Background() {
    return <color args={[10, 0, 0]} attach="background" />;
  }
  
  function GasStationWithEnvironment() {
    return (
      <CubeCamera resolution={25} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <GasStation />
          </>
        )}
      </CubeCamera>
    );
  }
  
  export function GasStationShow(props) {
    const { cameraPosition } = props;
  
    return (
      <>
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
  
        <PerspectiveCamera makeDefault fov={50} position={cameraPosition} />
  
        <Background />
  
        <GasStationWithEnvironment />
  
      </>
    );
  }