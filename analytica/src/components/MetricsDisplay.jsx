import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useContext } from 'react';
import { DataContext } from '../context/DataLoaderProvider';

const MetricsDisplay = () => {
  const { metricsData, loading, error } = useContext(DataContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Proporciona valores predeterminados para evitar errores si metricsData es null o undefined
  const {
    pageViews = [],
    sessions = [],
    demographics = { edad: [], gender: [] },
  } = metricsData || {};

  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Metrics Data</h2>
      <div className='grid grid cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4'>Page Views</h3>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={pageViews}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='views'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Gráfico de Sesiones */}
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4'>
            Sessions and bounce rate
          </h3>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={sessions}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='sessions' stroke='#82ca9d' />
              <Line type='monotone' dataKey='bounceRate' stroke='#ff7300' />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Gráfico de Demografía por Edad */}
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4'>Demographics by age</h3>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={demographics.age}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='range' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='percentage' fill='#8884d8' />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Gráfico de Demografía por Género */}
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4'>Demographics by Gender</h3>
          <ResponsiveContainer width='100%' height={300}>
            <PieChart>
              <Pie
                data={demographics.gender}
                dataKey='percentage'
                nameKey='type'
                cx='50%'
                cy='50%'
                outerRadius={80}
                fill='#82ca9d'
                label
              >
                {demographics.gender.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? '#8884d8' : '#82ca9d'}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
