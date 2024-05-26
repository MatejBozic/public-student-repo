import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const BarChart = ({ relevantData }) => {
  const data = {
    labels: relevantData.map((data) => data.name),
    datasets: [
      {
        label: 'Population',
        data: relevantData.map((data) => data.population),
        backgroundColor: 'pink',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div
      className="d-flex justify-content-center px-5"
      style={{ height: '500px' }}
    >
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default function Population({ data }) {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3 mb-2">
        <h1 className="fs-2 text-secondary">
          Populations of Various South American Countries
        </h1>
      </div>
      <BarChart relevantData={data} />
    </div>
  );
}
