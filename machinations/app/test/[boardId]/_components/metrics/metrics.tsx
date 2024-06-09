"use client";

import { Panel } from "reactflow";
import { useChangeEdgeType } from "@/app/store/use-custom-edge";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./../../style-test.css";
import { MetricsData } from "./metricsData";

const data = [
  {
    name: 0,
    game1: 0,
    game2: 0,
    game3: 0,
    game4: 0,
    game5: 0,
  },
  {
    name: 1,
    game1: 10,
    game2: 5,
    game3: 5,
    game4: 2,
    game5: 10,
  },
  {
    name: 2,
    game1: 20,
    game2: 10,
    game3: 10,
    game4: 4,
    game5: 20,
  },
  {
    name: 3,
    game1: 30,
    game2: 15,
    game3: 15,
    game4: 9,
    game5: 20,
  },
  {
    name: 4,
    game1: 40,
    game2: 15,
    game3: 20,
    game4: 11,
    game5: 30,
  },
  {
    name: 5,
    game1: 50,
    game2: 15,
    game3: 25,
    game4: 13,
    game5: 40,
  },
  {
    name: 6,
    game1: 70,
    game2: 20,
    game3: 30,
    game4: 18,
    game5: 50,
  },
  {
    name: 7,
    game1: 90,
    game2: 25,
    game3: 25,
    game4: 28,
    game5: 60,
  },
  {
    name: 8,
    game1: 110,
    game2: 27,
    game3: 30,
    game4: 38,
    game5: 70,
  },
  {
    name: 9,
    game1: 130,
    game2: 37,
    game3: 25,
    game4: 48,
    game5: 80,
  },
  {
    name: 10,
    game1: 150,
    game2: 47,
    game3: 30,
    game4: 58,
    game5: 90,
  },
];

export const Metrics = () => {
  const { analytics, setAnalytics } = useChangeEdgeType();
  return (
    <Panel position="top-right" className="analytics_panel">
      <button
        className="bg-black rounded py-1 px-2 text-white absolute top-2 right-2"
        onClick={() => setAnalytics(false)}
      >
        &#x2716;
      </button>
      {/* <Chart data={data} title="Max(wood)" key="qw" />
      <Chart data={data} title="Min(wood)" key="qw2" />
      <Chart data={data} title="AVR(wood)" key="qw3" />
      <Chart data={data} title="Median(wood)" key="qw4" /> */}
      <h2 className="pt-2 pb-4 text-center">
        <strong>Node statistics</strong>
      </h2>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="game1" stroke="#82ca9d" />
        <Line type="monotone" dataKey="game2" stroke="#8884d8" />
        <Line type="monotone" dataKey="game3" stroke="pink" />
        <Line type="monotone" dataKey="game4" stroke="blue" />
        <Line type="monotone" dataKey="game5" stroke="purple" />
      </LineChart>
      <div className="values_analytics">
        <div className="analytics__title">
          <h2>
            <strong>Metrics</strong>
          </h2>
          <h2>
            <strong>Value</strong>
          </h2>
        </div>
        <hr />
        <div className="analytics__title">
          <h2>Average value (AVR)</h2>
          <h2>50</h2>
        </div>
        <div className="analytics__title">
          <h2>Median (MEDIAN)</h2>
          <h2>47</h2>
        </div>
        <div className="analytics__title">
          <h2>Minimum value (MIN)</h2>
          <h2>1</h2>
        </div>
        <div className="analytics__title">
          <h2>Maximum value (MAX)</h2>
          <h2>100</h2>
        </div>
      </div>
      <h2 className="pt-2 pb-4 text-center">Game 1</h2>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="game1" stroke="#82ca9d" />
      </LineChart>
      <MetricsData average={100} median={50} min={1} max={100} />
      <h2 className="pt-2 pb-4 text-center">Game 2</h2>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="game2" stroke="#8884d8" />
      </LineChart>
      <MetricsData average={100} median={50} min={1} max={100} />
      <h2 className="pt-2 pb-4 text-center">Game 3</h2>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="game3" stroke="pink" />
      </LineChart>
      <MetricsData average={100} median={50} min={1} max={100} />
      <h2 className="pt-2 pb-4 text-center">Game 4</h2>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="game4" stroke="blue" />
      </LineChart>
      <MetricsData average={100} median={50} min={1} max={100} />
      <h2 className="pt-2 pb-4 text-center">Game 5</h2>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="game5" stroke="purple" />
      </LineChart>
      <MetricsData average={100} median={50} min={1} max={100} />
    </Panel>
  );
};
