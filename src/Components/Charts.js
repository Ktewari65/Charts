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
  const alcoholData = data.map((wine) => wine.Alcohol);
  const magnesiumData = data.map((wine) => wine.Magnesium);
  const uniqueAlcohols = [...new Set(alcoholData)];
  const minMagnesiumData = uniqueAlcohols
    .map((alcohol) => {
      const alcoholMagnesiumValues = magnesiumData.filter(
        (value, index) => alcoholData[index] === alcohol
      );
      return Math.min(...alcoholMagnesiumValues);
    })
    .slice(0, 3);
  const uniqueAlcoholsShortened = uniqueAlcohols.slice(0, 3);

  const option = {
    xAxis: {
      type: 'category',
      data: uniqueAlcoholsShortened,
      name: 'Alcohol',
    },
    yAxis: {
      type: 'value',
      name: 'Magnesium',
    },
    series: [
      {
        data: minMagnesiumData,
        type: 'bar',
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: '500px' }}
    />
  );
};
