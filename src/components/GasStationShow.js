import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { GasStation } from "./GasStation";
import { Ground } from "./Ground";
import { Porsche } from "./Porsche";



export function GasStationShow() {
  return (
    <>


      <OrbitControls
        target={[10, 1, 7]}
        maxPolarAngle={1.5}
        maxDistance={100}
        enableDamping
      />
      {/* target = point d'interet, maxPolarAngle = angle max par rapport au sol*/}

      <PerspectiveCamera makeDefault fov={8} position={[75, 25, -25]} />
      <spotLight color={0xffffff} intensity={0.6} position={[30, 10, 10]} />
      <GasStation />
      <Porsche />
      <Ground />
    </>
  );
}
