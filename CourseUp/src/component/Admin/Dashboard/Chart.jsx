import { Line, Doughnut, Chart } from "react-chartjs-2";
//Chart required for our frontend is taken from react-chartjs-2. What chart we'll use.

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
//Requirements of individual chart are taken from chart.js

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

function getLastYearMonths() {
  const labels = [];
  const currentMonth = new Date().getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = currentMonth; i >= 0; i--) labels.unshift(months[i]);

  for (let i = 11; i > currentMonth; i--) labels.unshift(months[i]);

  return labels;
}

export const LineChart = () => {
  const labels = getLastYearMonths();

  const data = {
    // responsive: true,
    labels,
    datasets: [
      {
        label: "Views",
        data: [1, 2, 3, 4],
        borderColor: "rgba(107, 70, 193, 0.5)",
        backgroundColor: "#6b46c1",
      },
    ],
    // plugins: {
    //     legend: {
    //         position: "bottom"
    //     },
    //     title:{
    //         display: true,
    //         text: "Yearly Views"
    //     }
    // }
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Yearly Views",
      },
    },
  };
  return <Line options={options} data={data} />;
};

export const DoughnutChart = () => {
  const labels = ["Subscribed", "Not Subscribed"];

  const data = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [3, 20],
        borderColor: ["rgba(62, 12, 171)", "rgba(214, 43, 129)"],
        backgroundColor: ["rgba(62, 12, 171, 0.5)", "rgba(214, 43, 129, 0.5)"],
      },
    ],
  };

  return <Doughnut data={data} />;
};
