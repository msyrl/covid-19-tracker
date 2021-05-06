import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import './LineGraph.css';

function LineGraph({ casesType = "cases" }) {
  const [data, setData] = useState({});

  const buildChartData = (data, casesType) => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data[casesType]) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }

      lastDataPoint = data[casesType][date];
    }

    return chartData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((response) => response.json())
      .then((data) => {
        const chartData = buildChartData(data, casesType);
        setData(chartData);
      });
  }, [casesType]);

  return (
    <div className="line-graph">
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                fill: true,
                data: data,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
