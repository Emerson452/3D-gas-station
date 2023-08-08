import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function GasStation() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/gasstation/gaz4save.gltf"
  );

  useEffect(() => {
    const pumpObject = gltf.scene.getObjectByName("Pilier");

    if (pumpObject) {
      pumpObject.traverse(function (child) {
        if (child.isMesh) {
          child.material.color.set(0x000000); // Modifier la couleur du matériau de l'objet
        }
      });
    }
  }, [gltf]);



  useEffect(() => {
    const pumpObject = gltf.scene.getObjectByName("Pompe");

    if (pumpObject) {
      pumpObject.traverse(function (child) {
        if (child.isMesh) {
          child.material.color.set(0x000000); // Modifier la couleur du matériau de l'objet
        }
      });
    }
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
