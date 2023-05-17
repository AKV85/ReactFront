import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

function Box(props) {
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.02;
    });

    return (
        <mesh {...props} ref={mesh}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
}


export default Box;
