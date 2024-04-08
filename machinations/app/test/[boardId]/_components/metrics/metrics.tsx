"use client";

import { Panel } from "reactflow";
import { Chart } from "./chart";
import { nanoid } from "nanoid";
const data = [
  {
    iteration: "1",
    value: 2,
    Samsung: 2400,
  },
  {
    iteration: "2",
    value: 5,
    Samsung: 1398,
  },
  {
    iteration: "3",
    value: 5,
    Samsung: 9800,
  },
  {
    iteration: "4",
    value: 6,
    Samsung: 3908,
  },
  {
    iteration: "5",
    value: 3,
    Samsung: 4800,
  },
  {
    iteration: "3",
    value: 5,
    Samsung: 9800,
  },
  {
    iteration: "4",
    value: 6,
    Samsung: 3908,
  },
  {
    iteration: "5",
    value: 3,
    Samsung: 4800,
  },
];

export const Metrics = () => {
  return (
    <Panel
      position="top-right"
      className="bg-white p-2 rounded overflow-y-auto h-[750px]"
    >
      <Chart data={data} title="Max(value)" key="qw" />
      <Chart data={data} title="Min(value)" key="qw2" />
      <Chart data={data} title="AVR(value)" key="qw3" />
      <Chart data={data} title="Median(value)" key="qw4" />
    </Panel>
  );
};
