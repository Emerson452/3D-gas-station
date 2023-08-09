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
  spotlightOn,
  lightColor
}) {
  return (
    <group onClick={onClick} position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[1, 0.2, 1]} />
        <meshBasicMaterial color="white" />
      </mesh>
      {children}
      {spotlightOn && (
        <spotLight color={lightColor} intensity={0.2} position={[0, 1, 0]} />
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
        position={[15, 0.01, -2]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        spotlightOn={spotlight1On}
        lightColor={0xffff00}
      >
        {spotlight1On ? "Off 1" : "On 1"}
      </CustomButton>
      <CustomButton
        onClick={() => setSpotlight2On(!spotlight2On)}
        position={[14, 0.01, -2]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        spotlightOn={spotlight2On}
        lightColor={0xff00ff}
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

      <spotLight
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
      />

      <spotLight color={0xffffff} intensity={0.6} position={[30, 10, 10]} />
      <GasStation />
      <Porsche />
      <Ground />
    </>
  );
}
