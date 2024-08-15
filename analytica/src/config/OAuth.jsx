import { useState, useEffect } from 'react';

const authenticate = () => {
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token&scope=${process.env.REACT_APP_SCOPE}`;

  window.location.href = authUrl;
};

const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};

const OAuth2 = ({ setAuthenticated }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = new URLSearchParams(hash.replace('#', '?')).get(
        'access_token'
      );
      if (token) {
        localStorage.setItem('token', token);
        setAuthenticated(true);
        console.log('Token stored in localStorage:', token);
      } else {
        setError('Error retrieving token');
      }
    } else {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setAuthenticated(true);
      }
    }
  }, [setAuthenticated]);

  const handleError = () => {
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className='py-10 flex flex-col items-center justify-center h-auto'>
      {!localStorage.getItem('token') ? (
        <div className='py-3 flex flex-col items-center justify-center'>
          <h3 className='py-6'>
            To see information about your campaigns, authenticate with Google
          </h3>
          <button
            onClick={authenticate}
            className='px-6 py-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'
          >
            Authenticate with Google
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogout}
          className='px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200'
        >
          Logout
        </button>
      )}
      {error && handleError()}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default OAuth2;
