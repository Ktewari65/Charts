import ReactECharts from "echarts-for-react";
import React from "react";
const data = [
  {
    Alcohol: 14.23,
    Flavanoids: 0.3,
    Ash: 2.43,
    Magnesium: 127,
  },
  {
    Alcohol: 13.2,
    Flavanoids: 2.76,
    Ash: 2.14,
    Magnesium: 100,
  },
  {
    Alcohol: 13.16,
    Flavanoids: 3.24,
    Ash: 2.67,
    Magnesium: 101,
  },
  {
    Alcohol: 14.37,
    Flavanoids: 3.49,
    Ash: 2.5,
    Magnesium: 145,
  },
  {
    Alcohol: 13.24,
    Flavanoids: 2.69,
    Ash: 2.87,
    Magnesium: 118,
  },
];


// Line Chart Configuration

export const LineChart = () => {
  const option = {
    title: {
      text: "Flavanoids vs Ash",
    },
    tooltip: {},
    xAxis: {
      name: "Flavanoids",
      type: "value",
    },
    yAxis: {
      name: "Ash",
      type: "value",
    },
    series: [
      {
        type: "line",
        data: data.map((item) => [item.Flavanoids, item.Ash]),
      },
    ],
  };
  return <ReactECharts option={option} />;
};



// Bar Chart Configuration

export const BarChart = () => {
  const categories = data.map((item) => item.Alcohol);   //.toFixed(2)
  const minMagnesiumValues = data.map((item) => item.Magnesium);
  const option = {
    title: {
      text: "Minimum Magnesium for Each Alcohol Category",
    },
    tooltip: {
    
    },
    xAxis: {
      type: "category",
      data: categories,
      name: "Alcohol",
    },
    yAxis: {
      type: "value",
      name: "Minimum Magnesium",
    },
    series: [
      {
        type: "bar",
        data: minMagnesiumValues,
      },
    ],
  };
  return <ReactECharts option={option} />;
};