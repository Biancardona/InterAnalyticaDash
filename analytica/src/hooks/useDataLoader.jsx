import { useContext } from 'react';
import { DataContext } from '../context/DataLoaderProvider';

const useDataLoader = () => {
  return useContext(DataContext);
};
export default useDataLoader;
