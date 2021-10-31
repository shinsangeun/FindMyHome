// @ts-ignore
import { TagCloud } from 'react-tagcloud';
import Word from './data/Word';
// @ts-ignore
import styled from "styled-components";
import {useQuery} from "react-query";
import {useState, useEffect} from "react";

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

    async function handleData(location: string) {
        console.log("location2:", location);

        try{
            await fetch(`http://apis.data.go.kr/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&PAN_NM=${location}&UPP_AIS_TP_CD=06&PAN_SS=공고중`)
            .then(res =>  console.log("res", res.json()))
        }catch (e){
            console.log("e:",e);

        }

        // const {isLoading, error, data} = useQuery('repoData', () =>
        //     fetch(`http://apis.data.go.kr/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo?serviceKey=vcu9zQh21aHdqeduiEp7Gr9QacLNM98A%2FWMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf%2FnP6IaLI2sXPUA%3D%3D&PG_SZ=10&PAGE=1&PAN_NM=${location}&UPP_AIS_TP_CD=06&PAN_SS=공고중`)
        //         .then(res => res.json())
        // )
        //
        // if (isLoading) return 'Loading...';
        // if (error) return 'Error';
        //
        // if (data && data[1].dsList.length > 0){
        //     let count = data[1].dsList.length;
        //     console.log("data==>", location, data);
        //        // setTagData(count);
        //     // @ts-ignore
        //     tagData.push({value: location, count: count});
        // }else{
        //     // @ts-ignore
        //     tagData.push({value: location, count: 0});
        // }
    }
    return (
        <Layout>
            {tagData.length > 0 ?
                <TagCloud
                    minSize={12}
                    maxSize={80}
                   // @ts-ignore
                    tags={tagData}
                    onClick={(tag: { value: string; }) => alert(`'${tag.value}' was selected!`)}
                />
                :<></>
            }
        </Layout>
    )
}

export default Tag;