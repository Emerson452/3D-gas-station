import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Porsche() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "models/porsche_singer/scene.gltf"
    );

     // Modifier la position initiale de la voiture
     if (gltf.scene) {
        gltf.scene.position.x = 15; // Nouvelle position en coordonnées X
        gltf.scene.position.y = 0; // Nouvelle position en coordonnées Y
        gltf.scene.position.z = 4; // Nouvelle position en coordonnées Z
    }

    return <primitive object={gltf.scene} />
}