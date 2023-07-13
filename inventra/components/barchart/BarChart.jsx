"use client"

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      text: 'Semana anterior',
    },
  },
};

const labels = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export const data = {
  labels,
  datasets: [
    {
      label: "Horas de visualización por dia",
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
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

export function BarChart() {
  
  return(
    <div>
      <Bar options={options} data={data} />;
    </div>
    ) 
}
