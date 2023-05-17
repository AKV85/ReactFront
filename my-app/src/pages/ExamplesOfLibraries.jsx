import React from 'react';
import '../App.css';
import LibrariesPage from "../components/LibrariesPage";
import Cube from "../components/libraries/three/Cube";
import { Canvas } from "react-three-fiber";
import Sphere from "../components/libraries/three/Sphere";
import Box from "../components/libraries/three/Box";
import BarChart from "../components/libraries/d3/BarChart";
import PieChart from "../components/libraries/d3/PieChart";
import Example1 from "../components/libraries/framerMotion/Example1";
import Example2 from "../components/libraries/framerMotion/Example2";
import Example3 from "../components/libraries/framerMotion/Example3";

function ExamplesOfLibraries() {
    return (
        <div className="ExamplesOfLibraries">
            <LibrariesPage/>
            <Canvas>
                <Cube />
            </Canvas>
            <Canvas>
                <Sphere />
            </Canvas>
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
            <BarChart/>
            <PieChart/>
            <Example1/>
            <Example2/>
            <Example3/>

        </div>

    );
}

export default ExamplesOfLibraries;
