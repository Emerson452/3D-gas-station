import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GasStation } from "./GasStation";
import { Ground } from "./Ground";
import { Porsche } from "./Porsche";
import { useState } from "react";

export function CustomButton({ onClick, children, position, rotation }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const [isOn, setIsOn] = useState(false);
  const buttonSize = isOn ? [1, 1, 1] : [1, 1, 1]; // Ajuster la taille

  const handleButtonClick = () => {
    setIsAnimating(true);
    onClick();
    setIsOn(!isOn);
    // Réinitialiser l'animation après un certain délai
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Temps en millisecondes
  };

  return (
    <group
      onClick={handleButtonClick}
      position={position}
      rotation={rotation}
      scale={buttonSize}
    >
      <mesh>
        <boxGeometry args={buttonSize} />{" "}
        <meshPhysicalMaterial
          color={isOn ? (isAnimating ? "blue" : "green") : "gray"}
          roughness={isOn ? 0.2 : 0.9} // Ajustez la rugosité pour simuler le volume
          metalness={isOn ? 0.6 : 0.1} // Ajustez la réflexion métallique pour simuler le volume
        />{" "}
      </mesh>
      {children}
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
      >
        {spotlight1On ? "Off 1" : "On 1"}
      </CustomButton>
      <CustomButton
        onClick={() => setSpotlight2On(!spotlight2On)}
        position={[14, 0.01, -2]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
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
