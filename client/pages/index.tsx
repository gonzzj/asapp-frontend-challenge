import type { NextPage } from 'next'
import useFetch from 'use-http';
import get from 'lodash/get';
import styles from '../styles/Home.module.scss'
import CitiesSelect from '../components/CitiesSelect'
import Title from '../components/Title';
import HeadMeta from '../components/PageCommons/HeadMeta';
import Footer from '../components/PageCommons/Footer';
import { Cities } from '../types/city';

const url = 'http://localhost:3030/cities';

const Home: NextPage = () => {
  const { loading, error, data = [] } = useFetch(url, {}, [])

  if (error) return <p>There is an error.</p>
  if (loading) return <p>Loading...</p>

  return (
    <div className={styles.container}>
      <HeadMeta />

      <main className={styles.main}>
        <Title title={'Select your favorite cities'} />

        <CitiesSelect cities={get(data, 'data', [])} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

