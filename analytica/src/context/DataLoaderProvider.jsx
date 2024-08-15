import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataLoaderProvider = ({ children }) => {
  const [metricsData, setMetricsData] = useState(null);
  const [googleAdsData, setGoogleAdsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const { data } = await axios.get('./metrics.json');
        setMetricsData(data);
      } catch (error) {
        setError('Error fetching metrics');
        console.log('Error:', error);
      }
    };

    const fetchGoogleAdsData = async () => {
      try {
        const response = await axios.get('./campaigns.json'); // Ruta al archivo JSON
        setGoogleAdsData(response.data);
      } catch (error) {
        setError('Error fetching Google Ads data');
        console.error('Error fetching Google Ads data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
    fetchGoogleAdsData();
  }, []);

  return (
    <DataContext.Provider
      value={{ metricsData, googleAdsData, loading, error }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataLoaderProvider, DataContext };
