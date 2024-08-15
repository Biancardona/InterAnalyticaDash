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

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {campaigns.length > 0 ? (
          campaigns.map((campaign, index) => {
            const chartData = {
              labels: ['Impressions', 'Clicks', 'Conversions'],
              datasets: [
                {
                  label: campaign.nombre,
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
              <div key={index} className='bg-white shadow-lg rounded-lg p-6'>
                <h2 className='text-xl font-semibold text-center mb-4'>
                  {campaign.nombre}
                </h2>
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            );
          })
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default GoogleAdsData;
