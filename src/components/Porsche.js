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
        gltf.scene.position.x = 16; // Nouvelle position en coordonnées X
        gltf.scene.position.y = 0; // Nouvelle position en coordonnées Y
        gltf.scene.position.z = 4; // Nouvelle position en coordonnées Z

        // Ajouter une rotation à la voiture
        gltf.scene.rotation.x = 0; // Rotation en radians autour de l'axe X
        gltf.scene.rotation.y = 4; // Rotation en radians autour de l'axe Y (Math.PI / 2 = 90 degrés)
        gltf.scene.rotation.z = 0; // Rotation en radians autour de l'axe Z
    }
    

    return <primitive object={gltf.scene} />
}