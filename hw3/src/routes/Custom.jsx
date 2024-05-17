import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const getRandomColor = function getRandomColor() {
  const r = getRandomInteger(0, 256);
  const g = getRandomInteger(0, 256);
  const b = getRandomInteger(0, 256);
  const a = getRandomDecimalNumber(0.4, 0.6).toFixed(1);
  return `rgb(${r}, ${g}, ${b}, ${a})`;
};

const getRandomInteger = function getRandomInteger(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const getRandomDecimalNumber = function getRandomDecimalNumber(min, max) {
  return Math.random() * (max - min) + min;
};

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ relevantData }) => {
  // data
  const data = {
    labels: relevantData.map((data) => data.name),
    datasets: [
      {
        label: 'GDP (in Billions)',
        data: relevantData.map((data) => data.gdp_billions),
        backgroundColor: [
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
          getRandomColor(),
        ],
      },
    ],
  };

  // options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // return
  return (
    <div style={{ height: '500px' }}>
      <Pie data={data} options={options}></Pie>
    </div>
  );
};

export default function Custom({ data }) {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3 mb-2">
        <h1 className="fs-2 text-secondary text-center">
          GDP of Various South American Countries (in Billions)
        </h1>
      </div>
      <PieChart relevantData={data} />
    </div>
  );
}
