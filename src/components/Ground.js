import React, { useEffect } from "react";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

export function Ground() {
  const alphaMap = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + "/textures/alpha-map.png"
  );

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
    <mesh
      position={[12, 0, 6]}
    //   mettre le sol sur l'axe x
      rotation-x={-Math.PI * 0.5}
      castShadow
      receiveShadow
    >
      {/* plane avec pour args width et length */}
      <circleGeometry args={[20, 20]}/>
      {/* propriétés du matériau réflecteur  */}
      <MeshReflectorMaterial
        alphaMap={alphaMap}
        envMapIntensity={0.2}
        
        // utilisation des textures à l'intérieur du réflecteur maillé avec les 3 propriété en dessous
        transparent={true}
        color={[0.05, 0.05, 0.05]}
        
        metalness={0.05}
        roughness={0.4}

        dithering={true}
        blur={[1024, 512]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={3} // How much blur mixes with surface roughness (default = 1)
        mixStrength={30} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [bl
        debug={0}
        reflectorOffset={0.02} // Offsets the virtual camera that projects the reflection. Useful when the reflective
      />
    </mesh>
  );
}
