import React, { useContext } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { DataContext } from '../context/DataLoaderProvider';

const GoogleAdsData = () => {
  const { googleAdsData, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const campaigns = googleAdsData?.campañas;

  const chartData = {
    labels: campaigns?.map((campaign) => campaign.nombre) || [],
    datasets: [
      {
        label: 'Impressions',
        data: campaigns?.map((campaign) => campaign.impresiones) || [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Clicks',
        data: campaigns?.map((campaign) => campaign.clics) || [],
        backgroundColor: 'rgba(153,102,255,0.6)',
      },
      {
        label: 'Conversions',
        data: campaigns?.map((campaign) => campaign.conversiones) || [],
        backgroundColor: 'rgba(255,159,64,0.6)',
      },
    ],
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-6'>Google Ads Data</h1>

      <div>
        {campaigns ? (
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: { legend: { position: 'top' } },
              }}
            />
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default GoogleAdsData;
