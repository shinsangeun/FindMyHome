// @ts-ignore
import { TagCloud } from 'react-tagcloud';
import Word from './data/Word';
// @ts-ignore
import styled from "styled-components";
import {useQuery} from "react-query";
import {useState, useEffect} from "react";
import axios from 'axios';

const Layout = styled.div`
    width: 1000px;height:300px;border-top: 1px solid #dcdcdc;padding: 10px;
`;

const Tag = () => {
    const [tagData, setTagData] = useState([]);
    const Word = ['서울', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '부산', '대구', '인천', '대전', '울산', '세종', '제주'];

    useEffect(() => {
       // Word.map((data, index) => {
            handleData('경기');
       // })
    }, [])

    const handleData = async (location: string) => {
        console.log("location2:", location);

        await axios.get(`https://apis.data.go.kr/B552555/lhLeaseInfo1/lhLeaseInfo1?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&CNP_CD=11&SPL_TP_CD=07`)
    }

    const {isLoading, error, data} = useQuery('repoData', async () =>
        await axios.get(`https://apis.data.go.kr/B552555/lhLeaseInfo1/lhLeaseInfo1?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&CNP_CD=11&SPL_TP_CD=07`)
    )

    if(data!== undefined){
        console.log("tag==>", data.data[1].dsList);
    }

    if (isLoading) return 'Loading...';
    if (error) return 'Error';

    if(data!== undefined) {
        return (
            <Layout>
                {data.data[1].dsList.length > 0 ?
                    <TagCloud
                        minSize={12}
                        maxSize={80}
                        // @ts-ignore
                        tags={data.data[1].dsList}
                        onClick={(tag: { value: string; }) => alert(`'${tag.value}' was selected!`)}
                    />
                    : <></>
                }
            </Layout>
        )
    }
}

export default Tag;