"use client"

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};


// mes de julio
const diasMes = 31;

export const data = {
  labels: Array.from(Array(diasMes).keys()).map((_, index) => index + 1),
  datasets: [
    {
      label: "Analisis por mes",
      fill: true, // Agregamos esta propiedad para colorear el área
      borderColor: "rgba(75, 192, 192, 0.2)",
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Cambiamos el color de fondo para que sea semi-transparente
      pointBorderColor: "rgba(75, 192, 192, 0.2)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75, 192, 192, 0.2)",
      pointHoverBorderColor: "rgba(75, 192, 192, 0.2)",
      pointRadio: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55],
    }
  ],
};

export function AreaChart() {
  return <Line options={options} data={data} />;
}
