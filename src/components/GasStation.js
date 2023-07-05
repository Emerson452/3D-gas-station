import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";

export function GasStation() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/gasstation/gaz4save.gltf"
  );

  useEffect(() => {
    const tvObject = gltf.scene.getObjectByName("Pilier");

    if (tvObject) {
      const textureLoader = new TextureLoader();
      const texture = textureLoader.load("textures/popoyoko.png");

      tvObject.traverse(function (child) {
        if (child.isMesh) {
          child.material.map = texture;
        }
      });
    }
  }, [gltf]);

  useEffect(() => {
    const pumpObject = gltf.scene.getObjectByName("Pompe");

    let animationId;
    const animateRotation = () => {
      pumpObject.rotation.y += 0.01; // Modifier la vitesse de rotation selon vos besoins
      animationId = requestAnimationFrame(animateRotation);
    };

    animateRotation(); // Lancer l'animation

    return () => cancelAnimationFrame(animationId);
  }, [gltf]);

  useEffect(() => {
    const pumpObject = gltf.scene.getObjectByName("Pompe");

    if (pumpObject) {
      pumpObject.traverse(function (child) {
        if (child.isMesh) {
          child.material.color.set(0xff0000); // Modifier la couleur du matériau de l'objet
        }
      });
    }
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
