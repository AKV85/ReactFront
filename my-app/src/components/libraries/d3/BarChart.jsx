import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BarChart() {
    const chartRef = useRef();

    useEffect(() => {
        const data = [10, 20, 30, 40, 50];

        const svg = d3.select(chartRef.current)
            .append('svg')
            .attr('width', 400)
            .attr('height', 200)
            .style('background-color', '#f2f2f2');

        const bars = svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 70)
            .attr('y', (d, i) => 200 - 10 * d)
            .attr('width', 65)
            .attr('height', (d, i) => d * 10)
            .attr('fill', 'blue');

    }, []);

    return (
        <div ref={chartRef}></div>
    );
}

export default BarChart;
