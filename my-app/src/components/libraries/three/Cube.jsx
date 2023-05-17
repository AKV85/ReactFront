import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

function Cube() {
    const mesh = useRef();

    useFrame(() => {
        // Update the position of the cube every frame
        mesh.current.position.x -= 0.01;
        mesh.current.position.y -= 0.01;
    });

    return (
        <mesh ref={mesh}>
            <boxBufferGeometry />
            <meshStandardMaterial color="#fff" />
        </mesh>
    );
}

export default Cube;
