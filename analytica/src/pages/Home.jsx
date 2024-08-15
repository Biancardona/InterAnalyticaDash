import GoogleAdsData from '../components/GoogleAdsData';
import MetricsDisplay from '../components/MetricsDisplay';
import Summary from '../components/Summary';
import OAuth2 from '../config/OAuth';
import { useState } from 'react';

const Home = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <div>
      <OAuth2 setAuthenticated={setAuthenticated} />
      {isAuthenticated ? (
        <>
          <GoogleAdsData />
        </>
      ) : (
        <p>Por favor, autentícate para ver los datos de las campañas.</p>
      )}
      <div>
        <MetricsDisplay />
        <Summary />
      </div>
    </div>
  );
};

export default Home;
