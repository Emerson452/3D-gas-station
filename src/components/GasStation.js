import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

// based on "Porsche 911 C4S 2020 Aerokit" (https://sketchfab.com/3d-models/porsche-911-c4s-2020-aerokit-ee69c474a1cc4085944cde4cb7ae87db)
// by JK3Dstudios (https://sketchfab.com/JK3Dstudio) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
export function GasStation() {
    //chargement du modèle 3D
        const gltf = useLoader(
          GLTFLoader,
          process.env.PUBLIC_URL + "models/gasstation/gaz4save.gltf"
        );

  //config du modèle 
  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
