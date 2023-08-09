import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GasStation } from "./GasStation";
import { Ground } from "./Ground";
import { Porsche } from "./Porsche";
import { useState } from "react";

export function CustomButton({
  onClick,
  children,
  position,
  rotation,
  lightColor,
  spotlightOn,
  onPointerOver, // survol de la souris
  onPointerOut, // sortie de la souris
}) {
  return (
    <group
      onClick={onClick}
      position={position}
      rotation={rotation}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <mesh>
        <boxGeometry args={[1, 0.2, 1]} />
        <meshBasicMaterial color="white" />
      </mesh>
      {children}
      {spotlightOn && (
        <pointLight
          color={0xffffff}
          intensity={1}
          position={[0, 0.1, 0]} // Adjust this position based on the button
          distance={10} // Adjust the distance of light propagation
          decay={2} // Adjust the light decay
        />
      )}
    </group>
  );
}

export function GasStationShow() {
  const [spotlight1On, setSpotlight1On] = useState(false);
  const [spotlight2On, setSpotlight2On] = useState(false);

  return (
    <>
      {/* Boutons pour contrôler les spotlights */}
      <CustomButton
        onClick={() => setSpotlight1On(!spotlight1On)}
        position={[15, 1, -2]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        spotlightOn={spotlight1On}
        onPointerOver={() => setSpotlight1On(true)}
        onPointerOut={() => setSpotlight1On(false)}
      >
        {spotlight1On
          ? "Off 1tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
          : "On 1"}
      </CustomButton>
      <CustomButton
        onClick={() => setSpotlight2On(!spotlight2On)}
        position={[14, 1, -2]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        spotlightOn={spotlight2On}
        onPointerOver={() => setSpotlight1On(true)}
        onPointerOut={() => setSpotlight1On(false)}
      >
        {spotlight2On ? "Off 2" : "On 2"}
      </CustomButton>

      <OrbitControls
        target={[10, 1, 7]}
        maxPolarAngle={1.5}
        maxDistance={100}
        enableDamping
      />
      {/* target = point d'interet, maxPolarAngle = angle max par rapport au sol*/}

      <PerspectiveCamera makeDefault fov={8} position={[75, 25, -25]} />

      {/* <spotLight
        color={0xffffff}
        intensity={0.6}
        position={[30, 10, 10]}
        visible={spotlight1On}
      />
      <spotLight
        color={0xffffff}
        intensity={0.6}
        position={[20, 10, 30]}
        visible={spotlight2On}
      /> */}

      <spotLight color={0xffffff} intensity={0.8} position={[30, 10, 10]} />
      <GasStation />
      <Porsche />
      <Ground />
    </>
  );
}
