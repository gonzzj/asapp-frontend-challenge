/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import useFetch from 'use-http';
import lodashGet from 'lodash/get';
import styles from '../styles/Home.module.scss'
import CitiesSelect from '../components/CitiesSelect'
import Title from '../components/Title';
import HeadMeta from '../components/PageCommons/HeadMeta';
import Footer from '../components/PageCommons/Footer';

const url = process.env.NEXT_PUBLIC_API_URL;

const Home: NextPage = () => {
  const [cities, setCities] = useState([]);
  const [activeLoading, setActiveLoading] = useState(false);
  const { get, response, loading, error } = useFetch(url);

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await get('/cities');
      if (response.ok) setCities(cities)
      setActiveLoading(!activeLoading);
    };

    fetchCities();
  }, []);

  if (error) return <p>There is an error.</p>
  if (loading && !activeLoading) return <p>Loading...</p>

  return (
    <div className={styles.container}>
      <HeadMeta />

      <main className={styles.main}>
        <Title label={'Select your favorite cities'} />

        <CitiesSelect cities={lodashGet(cities, 'data', [])} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

