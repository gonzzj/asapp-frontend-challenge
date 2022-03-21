import { useEffect, useState } from 'react';
import useFetch from 'use-http';
import lodashGet from 'lodash/get';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import CitiesSelect from '../components/CitiesSelect';

const url = process.env.NEXT_PUBLIC_API_URL;

const withCities = (WrappedComponent: React.FC<any>) => {
  const WithCities = () => {
    const [cities, setCities] = useState([]);
    const { get, response, loading, error } = useFetch(url);

    useEffect(() => {
      const fetchCities = async () => {
        const cities = await get('/cities');
        if (response.ok) setCities(cities)
      };
   
      fetchCities();
    }, []);

    if (error) return <Alert severity="error">{`This is an error: ${error}`}</Alert>
    if (loading) return <Skeleton variant="rectangular" sx={{ m: 4, width: 860, height: 56 }}/>
    
    return (
      <WrappedComponent cities={lodashGet(cities, 'data', [])} />
    )
  }
  
  return WithCities; 
}

export default withCities(CitiesSelect);
