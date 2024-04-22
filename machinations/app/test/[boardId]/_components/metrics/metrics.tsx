"use client";

import { Panel } from "reactflow";
import { Chart } from "./chart";
import { useChangeEdgeType } from "@/app/store/use-custom-edge";
import { ResponsiveContainer } from "recharts";
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 0,
    resources: 0,
    game2: 0,
    game3: 0,
    game4: 0,
    game5: 0,
  },
  {
    name: 1,
    resources: 10,
    game2: 5,
    game3: 5,
    game4: 2,
    game5: 10,
  },
  {
    name: 2,
    resources: 20,
    game2: 10,
    game3: 10,
    game4: 4,
    game5: 20,
  },
  {
    name: 3,
    resources: 30,
    game2: 15,
    game3: 15,
    game4: 9,
    game5: 20,
  },
  {
    name: 4,
    resources: 40,
    game2: 15,
    game3: 20,
    game4: 11,
    game5: 30,
  },
  {
    name: 5,
    resources: 50,
    game2: 15,
    game3: 25,
    game4: 13,
    game5: 40,
  },
  {
    name: 6,
    resources: 70,
    game2: 20,
    game3: 30,
    game4: 18,
    game5: 50,
  },
  {
    name: 7,
    resources: 90,
    game2: 25,
    game3: 25,
    game4: 28,
    game5: 60,
  },
  {
    name: 8,
    resources: 110,
    game2: 27,
    game3: 30,
    game4: 38,
    game5: 70,
  },
  {
    name: 9,
    resources: 130,
    game2: 37,
    game3: 25,
    game4: 48,
    game5: 80,
  },
  {
    name: 10,
    resources: 150,
    game2: 47,
    game3: 30,
    game4: 58,
    game5: 90,
  },
];


export const Metrics = () => {
  const { analytics, setAnalytics } = useChangeEdgeType();
  return (
    <Panel
      position="top-right"
      className="bg-white p-2 rounded overflow-y-auto h-[750px]"
    >
      <button className="bg-black rounded py-1 px-2 text-white" onClick={() => setAnalytics(false)}>Close analytics</button>
      {/* <Chart data={data} title="Max(wood)" key="qw" />
      <Chart data={data} title="Min(wood)" key="qw2" />
      <Chart data={data} title="AVR(wood)" key="qw3" />
      <Chart data={data} title="Median(wood)" key="qw4" /> */}
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <h2 className="pt-2 pb-4 text-center">Node(wood)</h2>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="game1" stroke="#82ca9d" />
          <Line type="monotone" dataKey="game2" stroke="#8884d8"/>
          <Line type="monotone" dataKey="game3" stroke="pink" />
          <Line type="monotone" dataKey="game4" stroke="blue"/>
          <Line type="monotone" dataKey="game5" stroke="purple"/>
        </LineChart>
      {/* </ResponsiveContainer> */}
      <div className="px-10 pt-5 pb-2">
        <h2>AVR(wood) = 50</h2>
        <h2>MEDIAN(wood) = 47</h2>
        <h2>MIN(wood) = 1</h2>
        <h2>MAX(wood) = 100</h2>
      </div>
      <h2 className="pt-2 pb-4 text-center">Game 1</h2>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="resources" stroke="#82ca9d" />
        </LineChart>
      {/* </ResponsiveContainer> */}
      <div className="px-10 py-5">
        <h2>AVR(wood) = 50</h2>
        <h2>MEDIAN(wood) = 70</h2>
        <h2>MIN(wood) = 10</h2>
        <h2>MAX(wood) = 150</h2>
      </div>
      <h2 className="pt-2 pb-4 text-center">Game1</h2>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="resources" stroke="#82ca9d" />
        </LineChart>
      {/* </ResponsiveContainer> */}
      <div className="px-10 py-5">
        <h2>AVR(wood) = 50</h2>
        <h2>MEDIAN(wood) = 47</h2>
        <h2>MIN(wood) = 1</h2>
        <h2>MAX(wood) = 100</h2>
      </div>
    </Panel>
  );
};
