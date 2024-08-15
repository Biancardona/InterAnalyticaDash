import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const authenticate = () => {
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&scope=${process.env.REACT_APP_SCOPE}`;

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
        //Encriptar el token
        const encryptedToken = CryptoJS.AES.encrypt(
          token,
          process.env.REACT_APP_SECRET_KEY
        ).toString();
        localStorage.setItem('token', encryptedToken);
        setAuthenticated(true);
      } else {
        setError('Error retrieving token');
      }
    } else {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const bytes = CryptoJS.AES.decrypt(
            storedToken,
            process.env.REACT_APP_SECRET_KEY
          );
          const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
          if (decryptedToken) {
            setAuthenticated(true);
          } else {
            setError('Invalid token');
          }
        } catch (e) {
          setError('Error decrypting token');
        }
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
        <button
          onClick={authenticate}
          className='px-6 py-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2 transition duration-200'
        >
          Authenticate with Google
        </button>
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
