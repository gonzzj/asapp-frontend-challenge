/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import CitiesSelect from '../modules/withCities'
import Title from '../components/Title';
import HeadMeta from '../components/PageCommons/HeadMeta';
import Footer from '../components/PageCommons/Footer';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <HeadMeta />

      <main className={styles.main}>
        <Title label={'Select your favorite cities'} />

        <CitiesSelect />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

