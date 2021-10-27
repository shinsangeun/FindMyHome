import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Tag from "../components/index/Tag";
import Chart from "../components/index/Chart";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>LH 집🏠</h1>
            <p className={styles.description}>검색할 지역을 선택 하세요!</p>
            <Tag/>
            <Chart/>
           {/* <RentalHouseSite/>*/}
        </div>
    )
}

export default Home;
