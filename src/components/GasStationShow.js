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
  
  export function GasStationShow() {

    return (
      <>
        <Environment 
            files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
            background={"both"}
            // both = afficher l'environnement HDR comme fond et comme réflexion de la scène
        />
        
        <OrbitControls target={[10, 1, 7]} maxPolarAngle={1.60} maxDistance={100} enableDamping/>
        {/* target = point d'interet, maxPolarAngle = angle max par rapport au sol*/}
  
        <PerspectiveCamera makeDefault fov={8} position={[75, 25, -25]} />
  
        <Background />
  
        <GasStationWithEnvironment />
  
      </>
    );
  }