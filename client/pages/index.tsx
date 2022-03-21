import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import CitiesSelect from '../components/CitiesSelect'
import Title from '../components/Title';
import HeadMeta from '../components/PageCommons/HeadMeta';
import Footer from '../components/PageCommons/Footer';

const cities = [{"country": "Andorra", "geonameid": 3040051, "name": "les Escaldes", "subcountry": "Escaldes-Engordany"},{"country": "Andorra", "geonameid": 3041563, "name": "Andorra la Vella", "subcountry": "Andorra la Vella"},{"country": "United Arab Emirates", "geonameid": 290594, "name": "Umm al Qaywayn", "subcountry": "Umm al Qaywayn"},{"country": "United Arab Emirates", "geonameid": 291074, "name": "Ras al-Khaimah", "subcountry": "Ra\u02bcs al Khaymah"},{"country": "United Arab Emirates", "geonameid": 291696, "name": "Khawr Fakk\u0101n", "subcountry": "Ash Sh\u0101riqah"},{"country": "United Arab Emirates", "geonameid": 292223, "name": "Dubai", "subcountry": "Dubai"},{"country": "United Arab Emirates", "geonameid": 292231, "name": "Dibba Al-Fujairah", "subcountry": "Al Fujayrah"},{"country": "United Arab Emirates", "geonameid": 292239, "name": "Dibba Al-Hisn", "subcountry": "Al Fujayrah"},{"country": "United Arab Emirates", "geonameid": 292672, "name": "Sharjah", "subcountry": "Ash Sh\u0101riqah"},{"country": "United Arab Emirates", "geonameid": 292688, "name": "Ar Ruways", "subcountry": "Abu Dhabi"},{"country": "United Arab Emirates", "geonameid": 292878, "name": "Al Fujayrah", "subcountry": "Al Fujayrah"},{"country": "United Arab Emirates", "geonameid": 292913, "name": "Al Ain", "subcountry": "Abu Dhabi"},{"country": "United Arab Emirates", "geonameid": 292932, "name": "Ajman", "subcountry": "Ajman"},{"country": "United Arab Emirates", "geonameid": 292953, "name": "Adh Dhayd", "subcountry": "Ash Sh\u0101riqah"},{"country": "United Arab Emirates", "geonameid": 292968, "name": "Abu Dhabi", "subcountry": "Abu Dhabi"},{"country": "Afghanistan", "geonameid": 1120985, "name": "Zaranj", "subcountry": "N\u012bmr\u016bz"},{"country": "Afghanistan", "geonameid": 1123004, "name": "Taloqan", "subcountry": "Takh\u0101r"},{"country": "Afghanistan", "geonameid": 1125155, "name": "Sh\u012bn\u1e0fan\u1e0f", "subcountry": "Herat"},{"country": "Afghanistan", "geonameid": 1125444, "name": "Shibirgh\u0101n", "subcountry": "Jowzj\u0101n"},{"country": "Afghanistan", "geonameid": 1125896, "name": "Shahrak", "subcountry": "Ghowr"},{"country": "Afghanistan", "geonameid": 1127110, "name": "Sar-e Pul", "subcountry": "Sar-e Pol"},{"country": "Afghanistan", "geonameid": 1127628, "name": "Sang-e Ch\u0101rak", "subcountry": "Sar-e Pol"},{"country": "Afghanistan", "geonameid": 1127768, "name": "A\u012bbak", "subcountry": "Samang\u0101n"}];

const Home: NextPage = () => (
  <div className={styles.container}>
    <HeadMeta />

    <main className={styles.main}>
      <Title title={'Select your favorite cities'} />

      <CitiesSelect cities={cities} />
    </main>

    <Footer />
  </div>
)

export default Home
