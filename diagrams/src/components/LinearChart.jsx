import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

export const LinearChart = () => {
  const [data] = useState([30, 18, 124, 15, 145, 129, 69, 125]);
  const svgRef = useRef();

  useEffect(() => {
    //setting up svg
    const w = 800;
    const h = 200;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "orange")
      .style("matgin-top", "50")
      .style("overflow", "visible");

    //setting the scaling
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generateScaleLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    //setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1);

    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);
    svg.append("g").call(yAxis);
    //setting up the data for the svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaleLine(d))
      .attr("fill", "teal")
      .attr("stroke", "darkblue");
  }, [data]);

  return (
    <>
      <h3>Linear Chart Sample</h3>
      <svg ref={svgRef}></svg>
    </>
  );
};
