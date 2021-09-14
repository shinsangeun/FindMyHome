import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import Tag from "../components/index/Tag";
import Chart from "../components/index/Chart";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
                <h1 className={styles.title}>LH 집🏠</h1>
                <p className={styles.description}>검색할 지역을 선택 하세요!</p>
                <Tag/>
                <Chart/>
            <Footer/>
        </div>
    )
}

export default Home
