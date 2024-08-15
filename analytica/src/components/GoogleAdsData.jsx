import React, { useContext } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { DataContext } from '../context/DataLoaderProvider';

const GoogleAdsData = () => {
  const { googleAdsData, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const campaigns = googleAdsData?.campañas || [];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-6'>Google Ads Data</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {campaigns.map((campaign) => {
          const chartData = {
            labels: ['Impressions', 'Clicks', 'Conversions'],
            datasets: [
              {
                label: 'Metrics',
                data: [
                  campaign.impresiones,
                  campaign.clics,
                  campaign.conversiones,
                ],
                backgroundColor: [
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                ],
              },
            ],
          };

          return (
            <div
              key={campaign.id}
              className='bg-white shadow-lg rounded-lg p-6'
            >
              <h2 className='text-xl font-semibold mb-4'>{campaign.nombre}</h2>
              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                    tooltip: {
                      callbacks: {
                        label: (tooltipItem) => {
                          const label = tooltipItem.dataset.label || '';
                          return `${label}: ${tooltipItem.raw}`;
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoogleAdsData;
