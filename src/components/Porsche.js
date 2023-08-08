import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Porsche() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "models/porsche_singer/scene.gltf"
    );

    return <primitive object={gltf.scene} />
}