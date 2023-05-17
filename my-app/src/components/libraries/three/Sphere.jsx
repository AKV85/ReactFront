import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

function Sphere() {
    const mesh = useRef();

    useFrame(() => {
        mesh.current.position.x += 0.01;
        mesh.current.position.y += 0.01;
    });

    return (
        <mesh ref={mesh}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#fff" />
        </mesh>
    );
}



export default Sphere;
