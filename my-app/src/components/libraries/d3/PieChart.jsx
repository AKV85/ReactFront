import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function PieChart() {
    const chartRef = useRef();

    useEffect(() => {
        const data = [10, 20, 30, 40, 50];

        const svg = d3.select(chartRef.current)
            .append('svg')
            .attr('width', 400)
            .attr('height', 400)
            .style('background-color', '#f2f2f2');

        const pie = d3.pie()(data);

        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(150);

        const colors = d3.scaleOrdinal(d3.schemeCategory10);

        const arcs = svg.selectAll('g.arc')
            .data(pie)
            .enter()
            .append('g')
            .attr('class', 'arc')
            .attr('transform', 'translate(200,200)');

        arcs.append('path')
            .attr('d', arc)
            .attr('fill', (d, i) => colors(i));

        arcs.append('text')
            .attr('transform', (d) => `translate(${arc.centroid(d)})`)
            .attr('text-anchor', 'middle')
            .text((d) => d.value);

    }, []);

    return (
        <div ref={chartRef}></div>
    );
}

export default PieChart;
