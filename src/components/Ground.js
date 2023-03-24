import React, { useEffect } from "react";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";


export function Ground() {

    //Obtenir les textures
    const [roughness, normal] = useLoader(TextureLoader, [
        process.env.PUBLIC_URL + "textures/sand-roughness.png",
        process.env.PUBLIC_URL + "textures/sand-normal.jpg",
    ]);

    //Applliquer propriété aux textures
    //chaque texture est bouclée et configurée pour être répétée avec une valeur de 5
    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(2, 2);
        });
        //LinearEncoding = garantit que les couleurs et les valeurs des pixels de la texture sont interprétées correctement lorsqu'elles sont appliquées à l'objet 3D.
        //Normalement on applique pour les deux textures
        normal.encoding = LinearEncoding;
    }, [normal, roughness]);

    return (
        // pivoter un maillage sur l'axe x (mesh.rotation.x = -Math.PI * 0.5) / projeter et recevoir la lumière
        <mesh position={[12, 0, 6]} rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
            {/* plane avec pour args width et length */}
            <planeGeometry args={[30, 30]} />
            {/* propriétés du matériau réflecteur  */}
            <MeshReflectorMaterial 
            envMapIntensity={1}
            // utilisation des textures à l'intérieur du réflecteur maillé avec les 3 propriété en dessous
            normalMap={normal}
            normalScale={[1.15, 1.15]}
            roughnessMap={roughness}
            
            dithering={true}
            color={[0.01, 0.01, 0.01]}
            roughness={0.7}
            blur={[1000, 400]}
            mixBlur={30}
            mixStrength={80}
            mixContrast={1}
            resolution={1024}
            mirror={0}
            depthScale={0.01}
            minDepthThreshold={0.9}
            maxDepthThreshold={1}
            depthToBlurRatioBias={0.25}
            debug={0}
            reflectorOffset={0.2}
            />

        </mesh>
    );
}