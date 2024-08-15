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
        <div className='py-3 flex flex-col items-center justify-center'>
          <h3 className='py-6'>
            To see information about your campaigns, authenticate with Google
          </h3>
        </div>
      )}
      <div>
        <MetricsDisplay />
        <Summary />
      </div>
    </div>
  );
};

export default Home;
