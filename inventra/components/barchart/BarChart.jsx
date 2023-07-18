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
  maintainAspectRatio: false,
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
      backgroundColor: "#2969E3",
      borderColor: "#2969E3",
      pointBorderColor:"#2969E3",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#2969E3",
      pointHoverBorderColor: "#2969E3",
      pointRadio: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55],
  }
  ],
};

export function BarChart() {
  
  return(
    <div className="w-full h-full">
      <Bar options={options} data={data} />
    </div>
    ) 
}
