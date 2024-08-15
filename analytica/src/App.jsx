import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { DataLoaderProvider } from './context/DataLoaderProvider';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <DataLoaderProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </DataLoaderProvider>
    </BrowserRouter>
  );
}

export default App;
